import React from 'react';
import { graphql, PageProps } from 'gatsby';
import Layout from '../../components/layouts/MainLayout';
import FeaturedSection from './FeaturedSection';
import ListSection from './ListSection';
import Pagination from '../../components/Pagination';

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

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        {isFirst && <FeaturedSection />}
        <ListSection
          className="mt-20"
          title={isFirst ? 'Notes' : undefined}
          notes={posts.map((post) => {
            const { node } = post;
            const { id, excerpt = '', frontmatter, parent } = node;
            const title = parent?.name || ''; // TODO: or get from frontmatter
            const url = `${gardenBasePath}/${title}`;
            const { cover_image } = frontmatter || {};
            const contributors = frontmatter?.contributors?.map((c) => ({ name: c.name, imageUrl: c.imageUrl })) || [];

            return { id, title, url, excerpt, coverImage: cover_image?.childImageSharp?.gatsbyImageData, contributors };
          })}
        />
        <Pagination
          currentPage={currentPage}
          numPages={numPages}
          feedRootPath={feedRootPath}
          feedBasePath={feedBasePath}
          className="mt-10"
        />
      </div>
    </Layout>
  );
}
export const query = graphql`
  query FeedTemplate($skip: Int!, $limit: Int!) {
    allMarkdownRemark(limit: $limit, skip: $skip, filter: { frontmatter: { published: { eq: true } } }) {
      edges {
        node {
          id
          frontmatter {
            cover_image {
              childImageSharp {
                gatsbyImageData
              }
            }
            contributors {
              name
              imageUrl
            }
          }
          excerpt(truncate: true, pruneLength: 300)
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
