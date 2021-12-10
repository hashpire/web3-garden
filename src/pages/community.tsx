import * as React from 'react';
import { PageProps, Link, graphql } from 'gatsby';
import Layout from '../components/layouts/MainLayout';
import Seo from '../components/seo';

const CommunityPage: React.FC<PageProps<GatsbyTypes.CommunityPageQuery>> = ({ data }) => {
  const contributors = data.site?.siteMetadata?.contributors;

  return (
    <Layout>
      <Seo title="Hashpire Community" />
      <h1>Our Community</h1>
      <div>
        {contributors &&
          contributors.map((contributor, index) => {
            return <div key={index}>{contributor?.username || ''}</div>;
          })}
      </div>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  );
};

export default CommunityPage;

export const query = graphql`
  query CommunityPage {
    site {
      siteMetadata {
        contributors {
          displayName
          email
          github
          shortIntro
          username
          website
        }
      }
    }
  }
`;
