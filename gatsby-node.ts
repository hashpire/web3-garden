import { GatsbyNode } from 'gatsby';
import path from 'path';
import type { NoteTemplatePageContext } from './src/templates/NoteTemplate';

type GatsbyNodeQuery = {
  site: {
    siteMetadata?: { gardenBasePath?: string };
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
  const { createPage } = actions;

  const result = await graphql<GatsbyNodeQuery>(
    `
      {
        site {
          siteMetadata {
            gardenBasePath
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

  const gardenBasePath = result.data?.site?.siteMetadata?.gardenBasePath || '';
  const posts = result.data?.allMarkdownRemark?.edges || [];

  const noteTemplate = path.resolve('./src/templates/NoteTemplate.tsx');

  posts.forEach(({ node }) => {
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
};
