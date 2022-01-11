import React from 'react';
import { PageProps, graphql } from 'gatsby';
import Layout from '../layouts/MainLayout';
import Seo from '@/components/Seo';
import MemberCard from '@/components/cards/MemberCard';
import GithubSvg from '@/icons/github.inline.svg';
import FacebookSvg from '@/icons/facebook.inline.svg';
import FacebookGroupSvg from '@/icons/facebook-group.inline.svg';
import DiscordSvg from '@/icons/discord.inline.svg';
import TwitterSvg from '@/icons/twitter.inline.svg';
import LinePatternSvg from '@/icons/line-pattern.inline.svg';
import InstagramSvg from '@/icons/instagram.inline.svg';
import wave from '@images/wave.png';

const community = [
  {
    Icon: GithubSvg,
    href: 'https://github.com/hashpire',
    platform: 'Github',
    purpose: 'Contribute to web3 garden',
  },
  {
    Icon: DiscordSvg,
    href: 'https://discord.gg/QeJz5Wujc5',
    platform: 'Discord',
    purpose: 'Discuss with the community',
  },
  {
    Icon: FacebookGroupSvg,
    platform: 'Facebook Group',
    href: 'https://facebook.com/hashpire',
    purpose: 'Share your stuff with friends',
  },
];

const followUs = [
  {
    Icon: FacebookSvg,
    href: 'https://facebook.com/hashpire',
    screenReaderText: 'Hashpire on Facebook',
  },
  {
    Icon: TwitterSvg,
    href: 'https://twitter.com/hashpire',
    screenReaderText: 'Hashpire on Twitter',
  },
  {
    Icon: InstagramSvg,
    href: 'https://instagram.com/hashpire',
    screenReaderText: 'Hashpire on Instagram',
  },
];

const CommunityPage: React.FC<PageProps<GatsbyTypes.CommunityPageQuery>> = ({
  data,
}) => {
  const contributors = data.allContributorsJson.edges;

  return (
    <Layout>
      <Seo
        title="Our Community"
        description="Hashpire is a community of Web3 Enthusiasts"
      />
      {/* Section 1 */}
      <section className="relative z-0 overflow-hidden bg-neutral-900">
        <LinePatternSvg className="hidden xl:block xl:absolute xl:stroke-neutral-100 opacity-10 xl:-z-10 xl:-left-80 xl:top-16" />
        <LinePatternSvg className="hidden xl:block xl:absolute xl:stroke-neutral-100 opacity-10 xl:-z-10 xl:-right-80 xl:-top-20" />
        <div className="max-w-xl px-4 pt-12 mx-auto lg:max-w-5xl xl:max-w-6xl md:pt-16 xl:pt-20 md:px-6">
          <h1 className="text-3xl font-semibold text-center whitespace-pre-line text-primary md:whitespace-normal lg:text-4xl">{`Join \nThe Community`}</h1>
          <div className="flex flex-col flex-wrap justify-center mt-8 lg:flex-row">
            {community.map(({ Icon, platform, href, purpose }, key) => (
              <a
                href={href}
                className="flex items-center py-2 pl-3 pr-8 mb-6 transition duration-300 ease-in-out rounded-full lg:mr-6 text-neutral-200 hover:text-primary shadow-2 hover:-translate-y-1 bg-background"
                key={key}
              >
                <Icon className="flex-none mr-3 w-14 h-14" />
                <p>
                  <span className="block font-medium text-neutral-200">
                    {platform}
                  </span>
                  <span className="font-normal text-neutral-400">
                    {purpose}
                  </span>
                </p>
              </a>
            ))}
          </div>
          <h2 className="mt-8 text-3xl font-semibold text-center xl:mt-10 text-primary lg:text-4xl">
            Follow us !
          </h2>
          <ul className="flex flex-wrap justify-center px-4 mt-5 lg:px-0">
            {followUs.map(({ Icon, href, screenReaderText }, index) => (
              <li key={index}>
                <a
                  href={href}
                  className="block mx-2 mt-3 text-gray-200 transition duration-300 ease-in-out hover:-translate-y-1 hover:text-primary"
                >
                  <span className="sr-only">{screenReaderText}</span>
                  <Icon className="w-14 h-14" />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <img src={wave} className="w-full h-48 mt-12 lg:h-80 xl:h-96" />
      </section>

      {/* Section 2 */}
      <section className="relative px-4 -top-16 lg:-top-40">
        <h2 className="text-3xl font-semibold text-center underline text-neutral-100 underline-offset-8 decoration-4 decoration-primary lg:text-4xl">
          Contributors
        </h2>
        <div className="grid grid-cols-1 mx-auto mb-20 max-w-screen-2xl mt-28 gap-y-28 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 2xl:grid-cols-4">
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
      </section>
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
