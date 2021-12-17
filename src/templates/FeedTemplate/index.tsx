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
        {isFirst && (
          <FeaturedSection
          // notes={[
          //   {
          //     url: '/about',
          //     title: 'Parachain',
          //     excerpt:
          //       'Voluptate sunt do magna ad esse laborum fugiat. Labore ex mollit eiusmod Lorem commodo dolore et adipisicing elit. Lorem et sit nisi nostrud fugiat duis. Amet adipisicing qui adipisicing culpa anim ullamco consequat eiusmod cillum laboris eu enim. Sunt labore et cupidatat cillum cupidatat duis Lorem occaecat proident. Ut quis proident nostrud ullamco ea. Est amet sint non Lorem enim eiusmod adipisicing in dolor do.Laborum do non commodo ipsum adipisicing elit. Incididunt Lorem velit aute sint elit amet veniam sint. Excepteur ipsum esse consectetur elit nulla reprehenderit incididunt do veniam eiusmod consectetur do voluptate Lorem. Enim aliquip cillum cillum ex ut commodo sint anim excepteur. Consequat enim occaecat non qui ipsum in ea commodo ad aute esse.',
          //     coverImage:
          //       'https://images.unsplash.com/photo-1566132127697-4524fea60007?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          //     contributors: [
          //       {
          //         name: 'Jonathan',
          //         imageUrl:
          //           'https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
          //       },
          //     ],
          //     publishedAt: 'Aug 20, 2021',
          //   },
          //   {
          //     url: '/about',
          //     title: 'Parachain',
          //     excerpt:
          //       'Voluptate sunt do magna ad esse laborum fugiat. Labore ex mollit eiusmod Lorem commodo dolore et adipisicing elit. Lorem et sit nisi nostrud fugiat duis. Amet adipisicing qui adipisicing culpa anim ullamco consequat eiusmod cillum laboris eu enim. Sunt labore et cupidatat cillum cupidatat duis Lorem occaecat proident. Ut quis proident nostrud ullamco ea. Est amet sint non Lorem enim eiusmod adipisicing in dolor do.Laborum do non commodo ipsum adipisicing elit. Incididunt Lorem velit aute sint elit amet veniam sint. Excepteur ipsum esse consectetur elit nulla reprehenderit incididunt do veniam eiusmod consectetur do voluptate Lorem. Enim aliquip cillum cillum ex ut commodo sint anim excepteur. Consequat enim occaecat non qui ipsum in ea commodo ad aute esse.',
          //     coverImage:
          //       'https://images.unsplash.com/photo-1566132127697-4524fea60007?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          //     contributors: [
          //       {
          //         name: 'Jonathan',
          //         imageUrl:
          //           'https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
          //       },
          //       {
          //         name: 'Bozo',
          //         imageUrl:
          //           'https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
          //       },
          //     ],
          //     publishedAt: 'Aug 20, 2021',
          //   },
          //   {
          //     url: '/about',
          //     title: 'Parachain',
          //     excerpt:
          //       'Voluptate sunt do magna ad esse laborum fugiat. Labore ex mollit eiusmod Lorem commodo dolore et adipisicing elit. Lorem et sit nisi nostrud fugiat duis. Amet adipisicing qui adipisicing culpa anim ullamco consequat eiusmod cillum laboris eu enim. Sunt labore et cupidatat cillum cupidatat duis Lorem occaecat proident. Ut quis proident nostrud ullamco ea. Est amet sint non Lorem enim eiusmod adipisicing in dolor do.Laborum do non commodo ipsum adipisicing elit. Incididunt Lorem velit aute sint elit amet veniam sint. Excepteur ipsum esse consectetur elit nulla reprehenderit incididunt do veniam eiusmod consectetur do voluptate Lorem. Enim aliquip cillum cillum ex ut commodo sint anim excepteur. Consequat enim occaecat non qui ipsum in ea commodo ad aute esse.',
          //     coverImage:
          //       'https://images.unsplash.com/photo-1566132127697-4524fea60007?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          //     contributors: [],
          //     publishedAt: 'Aug 20, 2021',
          //   },
          // ]}
          />
        )}
        <ListSection
          className="mt-20"
          title={isFirst ? 'Notes' : undefined}
          notes={posts.map((post) => {
            const { node } = post;
            const { id, excerpt = '', frontmatter, parent } = node;
            const title = parent?.name || ''; // TODO: or get from frontmatter
            const url = `${gardenBasePath}/${title}`;
            const { cover_image: coverImage } = frontmatter || {};
            const contributors = frontmatter?.contributors?.map((c) => ({ name: c.name, imageUrl: c.imageUrl })) || [];

            return { id, title, url, excerpt, coverImage, contributors };
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
            cover_image
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
