import { GatsbyNode } from 'gatsby';
import path from 'path';
import type { NoteTemplatePageContext } from './src/templates/NoteTemplate';
import type { FeedTemplatePageContext } from './src/templates/FeedTemplate';
import { execSync } from 'child_process';

// import { createRemoteFileNode } from 'gatsby-source-filesystem';

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
        allMarkdownRemark(
          filter: { frontmatter: { published: { eq: true } } }
          sort: { fields: [fields___gitAuthorTime], order: [DESC] }
        ) {
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
    }
  `,
    //       test_image: File @link(by: "name")
    // Custom resolver needed because `contributors: [ContributorsJson] @link(by: "name")` does not support default value
    schema.buildObjectType({
      name: 'Frontmatter',
      fields: {
        cover_image: {
          type: 'File!',
          resolve: async (source, _args, context) => {
            const { cover_image } = source;

            if (cover_image) {
              const result = await context.nodeModel.findOne({
                type: 'File',
                query: {
                  filter: { base: { eq: cover_image }, sourceInstanceName: { eq: 'gardenFiles' } },
                },
              });
              if (result) return result;
            }

            return await context.nodeModel.findOne({
              type: 'File',
              query: {
                filter: { base: { eq: 'card-default.png' }, sourceInstanceName: { eq: 'images' } },
              },
            });
          },
        },
      },
    }),
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

export const onCreateNode: GatsbyNode['onCreateNode'] = async ({
  node,
  actions,
  // store,
  // cache,
  // createNodeId,
  // reporter,
}) => {
  if (node.internal.type === 'MarkdownRemark') {
    const gitAuthorTime = execSync(`git log -1 --pretty=format:%aI "${node.fileAbsolutePath}"`).toString();
    actions.createNodeField({
      node,
      name: 'gitAuthorTime',
      value: gitAuthorTime,
    });
  }
  //   const { createNodeField, createNode } = actions;
  //   // if (node.internal.type === `MarkdownRemark` && node.parent) {
  //   //   const parentNode = getNode(node.parent);
  //   //   if (parentNode && parentNode.internal.type === `File`) {
  //   //     const fileNode = parentNode as FileSystemNode;
  //   //     const fileName = fileNode.relativePath;
  //   //     // do something with fileName
  //   //     console.log(fileName);
  //   //   }
  //   //   // create name with folder e.g. X/Y/Z/file-name
  //   //   const value = createFilePath({ node, getNode, trailingSlash: false });
  //   //   console.log('oncreatenode', value);
  //   //   createNodeField({
  //   //     name: `slug`,
  //   //     node,
  //   //     value,
  //   //   });
  //   // }
  //   if (node.internal.type === 'MarkdownRemark') {
  //     const frontmatter = node.frontmatter as any;
  //     if (frontmatter.test_image) {
  //       const fileNode = await createRemoteFileNode({
  //         url: frontmatter.test_image, // string that points to the URL of the image
  //         parentNodeId: node.id, // id of the parent node of the fileNode you are going to create
  //         createNode, // helper function in gatsby-node to generate the node
  //         createNodeId, // helper function in gatsby-node to generate the node id
  //         cache,
  //         store,
  //         reporter,
  //       });
  //       // if the file was created, extend the node with "localFile"
  //       if (fileNode) {
  //         createNodeField({ node, name: 'localFile', value: fileNode.id });
  //       }
  //     }
  //   }
};
