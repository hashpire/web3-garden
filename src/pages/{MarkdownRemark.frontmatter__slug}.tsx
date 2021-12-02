import React from 'react';
import { graphql, PageProps } from 'gatsby';

export default function MarkdownPage({ data }: PageProps<GatsbyTypes.MarkdownPageQuery>) {
  const { markdownRemark } = data;

  if (!markdownRemark) return <div>Empty</div>;

  const { frontmatter, html } = markdownRemark;

  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <h1>{frontmatter?.title || ''}</h1>
        <h2>{frontmatter?.date || ''}</h2>
        <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: html || '' }} />
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query MarkdownPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`;
