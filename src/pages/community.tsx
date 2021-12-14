import * as React from 'react';
import { PageProps, graphql } from 'gatsby';
import Layout from '../components/layouts/MainLayout';
import Seo from '../components/Seo';
import ContributorCard from '../components/cards/ContributorCard';
import PageHeader from '../components/PageHeader';

const CommunityPage: React.FC<PageProps<GatsbyTypes.CommunityPageQuery>> = ({ data }) => {
  const contributors = data.site?.siteMetadata?.contributors;

  return (
    <Layout>
      <Seo title="Hashpire Community" />
      <PageHeader title="Our Community" className="text-center" />
      <div className="max-w-6xl mx-auto my-20 grid gap-x-10 gap-y-28 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {contributors &&
          contributors.map((contributor, index) => {
            return (
              <ContributorCard
                key={index}
                className="m-auto"
                displayName={contributor?.displayName || ''}
                username={contributor?.username || ''}
                github="https://github.com/anakornk"
                email="anakornk@gmail.com"
                facebook="https://anakornk.com"
                shortIntro="Eiusmod fugiat pariatur fugiat incididunt ut labore esse aliqua elit reprehenderit aliqua. Non aute culpa reprehenderit est aliquip culpa sunt sit ea. Ad amet eu ex aliquip magna exercitation labore laborum minim incididunt ea aute quis. Nisi pariatur mollit aliqua pariatur officia. Consectetur labore laborum sunt eiusmod occaecat ipsum proident minim aute quis ipsum id incididunt."
                profileImageUrl="https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
              />
            );
            // return <div key={index}>{contributor?.username || ''}</div>;
          })}
      </div>
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
