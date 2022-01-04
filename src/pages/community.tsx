import React from 'react';
import { PageProps, graphql } from 'gatsby';
import Layout from '../layouts/MainLayout';
import Seo from '../components/Seo';
import MemberCard from '../components/cards/MemberCard';
import PageHeader from '../components/PageHeader';

const CommunityPage: React.FC<PageProps<GatsbyTypes.CommunityPageQuery>> = ({
  data,
}) => {
  const contributors = data.allContributorsJson.edges;

  return (
    <Layout>
      <Seo title="Our Community" />
      <div className="px-4 py-12 md:px-6 lg:p-16 lg:mx-auto lg:max-w-screen-2xl">
        <PageHeader title="Our Community" className="text-center" />
        <div className="grid grid-cols-1 mx-auto mb-20 mt-28 gap-y-28 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 2xl:grid-cols-4">
          {contributors &&
            contributors.map((contributor, index) => {
              const { name, position, shortIntro, imageUrl, contactInfo } =
                contributor.node;
              return (
                <MemberCard
                  key={index}
                  className="m-auto"
                  name={name}
                  position={position}
                  shortIntro={shortIntro}
                  imageUrl={imageUrl}
                  contactInfo={contactInfo}
                />
              );
            })}
        </div>
      </div>
    </Layout>
  );
};

export default CommunityPage;

export const query = graphql`
  query CommunityPage {
    allContributorsJson {
      edges {
        node {
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
