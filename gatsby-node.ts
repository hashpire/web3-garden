import { GatsbyNode } from 'gatsby';
import path from 'path';
import type { NoteTemplatePageContext } from './src/templates/NoteTemplate';
import type { FeedTemplatePageContext } from './src/templates/FeedTemplate';
import { execSync } from 'child_process';
import { slugify } from './src/gatsby/slugify';
import { FileSystemNode } from 'gatsby-source-filesystem';
import { getSrc, IGatsbyImageData } from 'gatsby-plugin-image';

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
        headings: Array<{ depth: number; id: string; value: string }>;
        fields?: { slug?: string; title?: string };
        frontmatter?: {
          cover_image: {
            childImageSharp?: { gatsbyImageData: IGatsbyImageData };
          };
        };
        excerpt?: string;
        outboundReferences: Array<{
          id: string;
          fields?: { slug?: string; title?: string };
        }>;
        inboundReferences: Array<{
          id: string;
          fields?: { slug?: string; title?: string };
        }>;
      };
    }>;
  };
};

export const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions,
  reporter,
}) => {
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
              headings {
                id
                depth
                value
              }
              fields {
                slug
                title
              }
              frontmatter {
                cover_image {
                  childImageSharp {
                    gatsbyImageData(height: 630, width: 1200, layout: FIXED)
                  }
                }
              }
              excerpt(truncate: true, pruneLength: 160)
              outboundReferences {
                ... on MarkdownRemark {
                  id
                  fields {
                    slug
                    title
                  }
                }
              }
              inboundReferences {
                ... on MarkdownRemark {
                  id
                  fields {
                    slug
                    title
                  }
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
    const {
      id,
      html,
      headings,
      inboundReferences,
      outboundReferences,
      excerpt,
    } = node;
    const { slug, title = 'Note' } = node.fields || {};
    const { gatsbyImageData } =
      node.frontmatter?.cover_image.childImageSharp || {};

    if (slug) {
      const urlPath = `${gardenBasePath}/${slug}`;
      console.log(urlPath);
      createPage<NoteTemplatePageContext>({
        path: urlPath,
        component: noteTemplate,
        context: {
          id,
          html,
          headings,
          inboundReferences: inboundReferences.map((r) => ({
            title: r.fields?.title || '',
            url: `${gardenBasePath}/${r.fields?.slug}`,
          })),
          outboundReferences: outboundReferences.map((r) => ({
            title: r.fields?.title || '',
            url: `${gardenBasePath}/${r.fields?.slug}`,
          })),
          title,
          metaImage: gatsbyImageData && getSrc(gatsbyImageData),
          metaDescription: excerpt,
        },
      });
    }
  });

  // create feed
  const {
    notesPerPage = 10,
    basePath: feedBasePath = `/page`,
    useIndex: useIndexAsFeed = true,
  } = feed || {};
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

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({
  actions,
}) => {
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

export const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] =
  ({ actions, schema }) => {
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
      // test_image: File @link(by: "name")
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
                    filter: {
                      base: { eq: cover_image },
                      sourceInstanceName: { eq: 'garden' },
                    },
                  },
                });
                if (result) return result;
              }

              return await context.nodeModel.findOne({
                type: 'File',
                query: {
                  filter: {
                    base: { eq: 'card-default.png' },
                    sourceInstanceName: { eq: 'images' },
                  },
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
  getNode,
  // store,
  // cache,
  // createNodeId,
  // reporter,
}) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark' && node.parent) {
    // git author time
    const command = `git -C src/garden log -1 --pretty=format:%aI "${node.fileAbsolutePath}"`;
    const gitAuthorTime = execSync(command).toString();
    actions.createNodeField({
      node,
      name: 'gitAuthorTime',
      value: gitAuthorTime,
    });

    // slug and title
    const parentNode = getNode(node.parent);
    if (parentNode && parentNode.internal.type === `File`) {
      const fileNode = parentNode as FileSystemNode;

      // const relativeDir = fileNode.relativeDirectory;
      // const relativePath = fileNode.relativePath;
      const fileName = fileNode.name;
      const slug = slugify(fileName);

      createNodeField({
        name: `slug`,
        node,
        value: slug,
      });

      createNodeField({ name: `title`, node, value: fileName });
    }
  }

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
