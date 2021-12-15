import React from 'react';
import { PageProps, graphql } from 'gatsby';
import Layout from '../components/layouts/MainLayout';
import Seo from '../components/Seo';
import MemberCard from '../components/cards/MemberCard';
import PageHeader from '../components/PageHeader';

const CommunityPage: React.FC<PageProps<GatsbyTypes.CommunityPageQuery>> = ({ data }) => {
  const contributors = data.site?.siteMetadata?.contributors;

  return (
    <Layout>
      <Seo title="Hashpire Community" />
      <PageHeader title="Our Community" className="text-center" />
      <div className="grid max-w-6xl grid-cols-1 mx-auto my-20 gap-x-10 gap-y-28 md:grid-cols-2 lg:grid-cols-3">
        {contributors &&
          contributors.map((contributor, index) => {
            return (
              <MemberCard
                key={index}
                className="m-auto"
                name={contributor?.name || ''}
                position={contributor?.position}
                shortIntro={contributor?.shortIntro}
                imageUrl={contributor?.imageUrl}
                contactInfo={contributor?.contactInfo || {}}
              />
            );
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
          name
          position
          shortIntro
          imageUrl
          contactInfo {
            website
            email
            github
            twitter
            facebook
          }
        }
      }
    }
  }
`;
