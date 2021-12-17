import { GatsbyNode } from 'gatsby';
import path from 'path';
import type { NoteTemplatePageContext } from './src/templates/NoteTemplate';
import type { FeedTemplatePageContext } from './src/templates/FeedTemplate';

type GatsbyNodeQuery = {
  site: {
    siteMetadata?: {
      garden?: {
        basePath?: string;
      };
      feed?: {
        basePath?: string;
        useIndex?: boolean;
        notesPerPage?: number;
      };
    };
  };
  allMarkdownRemark: {
    edges: Array<{
      node: {
        id: string;
        html: string;
        parent?: { name?: string };
      };
    }>;
  };
};

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions, reporter }) => {
  const { createPage, createRedirect } = actions;

  const result = await graphql<GatsbyNodeQuery>(
    `
      {
        site {
          siteMetadata {
            garden {
              basePath
            }
            feed {
              basePath
              useIndex
              notesPerPage
            }
          }
        }
        allMarkdownRemark {
          edges {
            node {
              id
              html
              parent {
                ... on File {
                  name
                }
              }
            }
          }
        }
      }
    `,
  );
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  // extract query result
  const { feed, garden } = result.data?.site?.siteMetadata || {};
  const notes = result.data?.allMarkdownRemark?.edges || [];

  // create garden
  const { basePath: gardenBasePath = '/garden' } = garden || {};
  const noteTemplate = path.resolve('./src/templates/NoteTemplate.tsx');

  notes.forEach(({ node }) => {
    const { id, html } = node;
    const fileName = node.parent?.name;

    if (fileName) {
      createPage<NoteTemplatePageContext>({
        path: `${gardenBasePath}/${fileName}`,
        component: noteTemplate,
        context: { id, html },
      });
    }
  });

  // create feed
  const { notesPerPage = 10, basePath: feedBasePath = `/page`, useIndex: useIndexAsFeed = true } = feed || {};
  const feedTempate = path.resolve('./src/templates/FeedTemplate/index.tsx');
  const feedRootPath = useIndexAsFeed ? '/' : feedBasePath;
  const numPages = Math.ceil(notes.length / notesPerPage);

  createRedirect({
    fromPath: `${feedBasePath}/1`,
    toPath: feedRootPath,
  });

  Array.from({ length: numPages }).forEach((_, i) => {
    const page = i + 1;

    createPage<FeedTemplatePageContext>({
      path: page === 1 ? feedRootPath : `${feedBasePath}/${page}`,
      component: feedTempate,
      context: {
        limit: notesPerPage,
        skip: i * notesPerPage,
        numPages,
        currentPage: page,
        feedBasePath,
        feedRootPath,
        gardenBasePath: gardenBasePath,
      },
    });
  });
};

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@images': path.resolve(__dirname, 'src/images'),
        '@icons': path.resolve(__dirname, 'src/icons'),
      },
    },
  });
};

export const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] = ({ actions, schema }) => {
  const { createTypes } = actions;

  const contributorsTypeDefs = `
    type ContributorsJson implements Node @dontInfer {
      name: String!
      position: String
      imageUrl: String
      contactInfo: ContributorsJsonContactInfo
      shortIntro: String
    }

    type ContributorsJsonContactInfo {
      website: String
      email: String
      github: String
      twitter: String
      facebook: String
    }
  `;
  createTypes(contributorsTypeDefs);

  const frontmatterTypeDefs = [
    `
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
    }
    type Frontmatter {
      published: Boolean
      featured: Boolean
      cover_image: String
    }
  `,
    // Custom resolver needed because `contributors: [ContributorsJson] @link(by: "name")` does not support default value
    schema.buildObjectType({
      name: 'Frontmatter',
      fields: {
        contributors: {
          type: '[ContributorsJson!]',
          resolve: (source, _args, context) => {
            const { contributors } = source;
            if (!contributors) return null;
            return contributors.map(async (contributorName: string) => {
              const result = await context.nodeModel.findOne({
                type: 'ContributorsJson',
                query: {
                  filter: { name: { eq: contributorName } },
                },
              });
              return result || { name: contributorName };
            });
          },
        },
      },
    }),
  ];
  createTypes(frontmatterTypeDefs);
};
