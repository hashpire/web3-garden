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
        filter: { frontmatter: { featured: { eq: true }, published: { eq: true } } }
        sort: { fields: [fields___gitAuthorTime], order: [DESC] }
      ) {
        edges {
          node {
            id
            excerpt
            frontmatter {
              cover_image {
                childImageSharp {
                  gatsbyImageData(width: 200, aspectRatio: 1.5)
                }
              }
              contributors {
                name
                imageUrl
              }
            }
            parent {
              ... on File {
                name
              }
            }
          }
        }
      }
    }
  `);

  const notes = data.allMarkdownRemark.edges;
  if (notes.length === 0) return null;

  const { basePath: gardenBasePath = '/garden' } = data?.site?.siteMetadata?.garden || {};

  return (
    <section className={classNames(className)}>
      <SectionHeader title="Featured" />
      <div className="grid grid-cols-1 gap-10 mt-10 md:grid-cols-2">
        {notes.map((note) => {
          const { node } = note;
          return (
            <FeaturedCard
              key={node.id}
              title={node.parent?.name || ''}
              url={`${gardenBasePath}/${node.parent?.name}`}
              excerpt={node.excerpt || ''}
              coverImage={node.frontmatter?.cover_image?.childImageSharp?.gatsbyImageData}
              contributors={node.frontmatter?.contributors?.map((c) => ({ name: c.name, imageUrl: c.imageUrl })) || []}
              publishedAt="2014-07-18"
              className="max-w-lg m-auto"
            />
          );
        })}
      </div>
    </section>
  );
}
