/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

type SeoProps = {
  description?: string;
  lang?: string;
  meta?: Array<{ name: string; content: string }>;
  image?: string;
  title: string;
};

function Seo({
  description = '',
  lang = 'en',
  meta = [],
  image,
  title,
}: SeoProps) {
  const { site } = useStaticQuery<GatsbyTypes.SeoQuery>(
    graphql`
      query Seo {
        site {
          siteMetadata {
            title
            description
            twitter
            defaultMetaImage
            siteUrl
          }
        }
      }
    `,
  );

  const {
    description: siteDescription,
    title: siteTitle,
    siteUrl,
    twitter,
    defaultMetaImage,
  } = site?.siteMetadata || {};

  const metaDescription = description || siteDescription;
  const defaultTitle = siteTitle;
  const metaImage = `${siteUrl}${image || defaultMetaImage}`;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : undefined}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: metaImage,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: twitter,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: metaImage,
        },
      ].concat(meta)}
    />
  );
}

export default Seo;
