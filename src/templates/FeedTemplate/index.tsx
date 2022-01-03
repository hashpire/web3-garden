import React from 'react';
import { graphql, PageProps } from 'gatsby';
import Layout from '../../layouts/MainLayout';
import FeaturedSection from './FeaturedSection';
import ListSection from './ListSection';
import Pagination from '../../components/Pagination';
import Seo from '@/components/Seo';

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
  const {
    currentPage,
    numPages,
    feedBasePath,
    feedRootPath = feedBasePath,
    gardenBasePath,
  } = pageContext;
  const isFirst = currentPage === 1;

  return (
    <Layout>
      <Seo title={'Web3 Digital Garden'} />
      <div className="px-4 py-12 md:px-6 lg:px-0 lg:py-16 lg:mx-auto lg:max-w-4xl">
        {isFirst && <FeaturedSection />}
        <ListSection
          className={isFirst ? 'mt-12' : undefined}
          title={isFirst ? 'Notes' : undefined}
          notes={posts.map((post) => {
            const { node } = post;
            const { id, excerpt = '', frontmatter, fields } = node;
            const { cover_image } = frontmatter || {};
            const contributors =
              frontmatter?.contributors?.map((c) => ({
                name: c.name,
                imageUrl: c.imageUrl,
              })) || [];
            const {
              gitAuthorTime: publishedAt,
              title = 'No Title',
              slug = '',
            } = fields || {};
            const url = `${gardenBasePath}/${slug}`;

            return {
              id,
              title,
              url,
              excerpt,
              coverImage: cover_image?.childImageSharp?.gatsbyImageData,
              contributors,
              publishedAt,
            };
          })}
        />
        <Pagination
          currentPage={currentPage}
          numPages={numPages}
          feedRootPath={feedRootPath}
          feedBasePath={feedBasePath}
          className="mt-10 lg:mt-16"
        />
      </div>
    </Layout>
  );
}
export const query = graphql`
  query FeedTemplate($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      limit: $limit
      skip: $skip
      filter: { frontmatter: { published: { eq: true } } }
      sort: { fields: [fields___gitAuthorTime], order: [DESC] }
    ) {
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
          fields {
            title
            slug
            gitAuthorTime(formatString: "YYYY-MM-DD")
          }
          excerpt(truncate: true, pruneLength: 300)
        }
      }
    }
  }
`;
