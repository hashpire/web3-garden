import React from 'react';
import { graphql, Link, PageProps } from 'gatsby';
import Layout from '../components/layout';

export type FeedTemplatePageContext = {
  limit: number;
  skip: number;
  numPages: number;
  currentPage: number;
  feedBasePath: string;
  feedRootPath?: string;
  gardenBasePath: string;
};

export default function FeedTemplate({
  data,
  pageContext,
}: PageProps<GatsbyTypes.FeedTemplateQuery, FeedTemplatePageContext>) {
  const posts = data.allMarkdownRemark.edges;
  const { currentPage, numPages, feedBasePath, feedRootPath = feedBasePath, gardenBasePath } = pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? feedRootPath : `${feedBasePath}/${currentPage - 1}`;
  const nextPage = `${feedBasePath}/${currentPage + 1}`;

  return (
    <Layout>
      {isFirst && <div>Tags and MOCs</div>}
      {posts.map(({ node }) => {
        const title = node.parent?.name || ''; // TODO: or get from frontmatter
        const url = `${gardenBasePath}/${title}`;

        return (
          <div key={node.id}>
            <Link to={url}>
              <h1>{title}</h1>
            </Link>
          </div>
        );
      })}
      <ul
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          listStyle: 'none',
          padding: 0,
          margin: 0,
        }}
      >
        <li
          style={{
            margin: 0,
          }}
        >
          {isFirst ? (
            <span>← Previous Page</span>
          ) : (
            <Link to={prevPage} rel="prev">
              ← Previous Page
            </Link>
          )}
        </li>
        {Array.from({ length: numPages }, (_, i) => {
          const page = i + 1;
          return (
            <li
              key={`pagination-number${page}`}
              style={{
                margin: 0,
              }}
            >
              <Link
                to={page === 1 ? feedRootPath : `${feedBasePath}/${page}`}
                style={{
                  textDecoration: 'none',
                  color: page === currentPage ? '#ffffff' : '',
                  background: page === currentPage ? '#007acc' : '',
                }}
              >
                {page}
              </Link>
            </li>
          );
        })}
        <li
          style={{
            margin: 0,
          }}
        >
          {isLast ? (
            <span>Next Page →</span>
          ) : (
            <Link to={nextPage} rel="next">
              Next Page →
            </Link>
          )}
        </li>
      </ul>
    </Layout>
  );
}
export const query = graphql`
  query FeedTemplate($skip: Int!, $limit: Int!) {
    allMarkdownRemark(limit: $limit, skip: $skip) {
      edges {
        node {
          id
          parent {
            ... on File {
              name
            }
          }
        }
      }
    }
  }
`;
