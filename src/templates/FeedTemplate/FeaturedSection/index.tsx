import React from 'react';
import SectionHeader from '../../../components/SectionHeader';
import FeaturedCard from '../../../components/cards/FeaturedCard';
import { graphql, useStaticQuery } from 'gatsby';
import classNames from 'classnames';

type FeaturedSectionProps = {
  className?: string;
};

export default function FeaturedSection({ className }: FeaturedSectionProps) {
  const data = useStaticQuery<GatsbyTypes.FeaturedSectionQuery>(graphql`
    query FeaturedSection {
      site {
        siteMetadata {
          garden {
            basePath
          }
        }
      }
      allMarkdownRemark(
        filter: {
          frontmatter: { featured: { eq: true }, published: { eq: true } }
        }
        sort: { fields: [fields___gitAuthorTime], order: [DESC] }
      ) {
        edges {
          node {
            id
            excerpt
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
          }
        }
      }
    }
  `);

  const notes = data.allMarkdownRemark.edges;
  if (notes.length === 0) return null;

  const { basePath: gardenBasePath = '/garden' } =
    data?.site?.siteMetadata?.garden || {};

  return (
    <section className={classNames(className)}>
      <SectionHeader title="Featured" />
      <div className="grid grid-cols-1 gap-10 mt-10 md:grid-cols-2">
        {notes.map((note) => {
          const { node } = note;
          const {
            gitAuthorTime = '',
            title = 'No Title',
            slug = '',
          } = node?.fields || {};

          return (
            <FeaturedCard
              key={node.id}
              title={title}
              url={`${gardenBasePath}/${slug}`}
              excerpt={node.excerpt || ''}
              coverImage={
                node.frontmatter?.cover_image?.childImageSharp?.gatsbyImageData
              }
              contributors={
                node.frontmatter?.contributors?.map((c) => ({
                  name: c.name,
                  imageUrl: c.imageUrl,
                })) || []
              }
              publishedAt={gitAuthorTime}
              className="max-w-lg m-auto"
            />
          );
        })}
      </div>
    </section>
  );
}
