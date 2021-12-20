import * as React from 'react';
import Layout from '../components/layouts/MainLayout';
import HashSvg from '../icons/hash-hashtag.inline.svg';
import HashInspireSvg from '../icons/hash-inspire.inline.svg';
import EqualsSvg from '../icons/equals.inline.svg';
import GardenSvg from '../icons/garden.inline.svg';
import PlusSvg from '../icons/plus.inline.svg';
import SeedSvg from '../icons/seed.inline.svg';
import TreeSvg from '../icons/tree.inline.svg';
import IdeaPotSvg from '../icons/idea-pot.inline.svg';
import HashpireSvg from '../icons/hashpire.inline.svg';
import backgroundDot from '../images/background-dot.png';
import Seo from '@/components/Seo';

const whyjoin = [
  `Meet friendly \nlike-minded people`,
  `Learning everything \nabout web3`,
  `Participate in events \n(e.g. hackathons, CTF)`,
  `Showcase what \nyou are working on`,
  `Get monthly prizes \nfor content published`,
  `Recieve apportunity \nfrom partners and sponsors`,
];

const garden = [
  {
    icon: <SeedSvg className="text-neutral-200 w-14 h-14" />,
    title: 'Seed',
    description: 'Seed your garden \nwith a content idea.',
    subDescription: '(start a topic with an idea)',
  },
  {
    icon: <TreeSvg className="text-neutral-200 w-14 h-14" />,
    title: 'Tree',
    description: `Produce branches for your content. \nOne note = one idea`,
    subDescription: '(Create content linked to the topic)',
  },
  {
    icon: <GardenSvg className="text-neutral-200 w-14 h-14" />,
    title: 'Garden',
    description: 'Connecting the dots and create \nevergreen darden',
    subDescription: '(Allow other to join)',
  },
];

const communityGoals = [
  `Provide the best Web3 knowledge base \ncommunity in Thailand.`,
  `Promote and support the growth and \ndevelopment of the decentralized web.`,
  `A friendly space for Web3 enthusiasts \nand discuss all things Web3.`,
];

const AboutPage: React.FC<{}> = () => (
  <Layout>
    <Seo title="Hashpire About" />
    {/* Section 1 */}
    <section
      className="px-6 py-16 bg-no-repeat bg-cover md:py-20 md:px-8 lg:py-28 lg:px-32"
      style={{
        backgroundImage: `url(${backgroundDot})`,
      }}
    >
      <div className="grid max-w-6xl grid-cols-1 mx-auto gap-y-7 place-items-center md:grid-cols-5">
        <div className="flex flex-col items-center">
          <HashSvg className="w-16 h-16 text-primary md:w-20 md:h-20" />
          <span className="text-4xl text-neutral-100 text-semibold md:text-5xl lg:text-7xl">hash</span>
        </div>
        <PlusSvg className="w-16 h-16 text-neutral-100 md:w-20 md:h-20" />
        <div className="flex flex-col items-center">
          <HashInspireSvg className="w-16 h-16 text-primary md:w-20 md:h-20" />
          <span className="text-4xl text-neutral-100 text-semibold md:text-5xl lg:text-7xl">pire</span>
        </div>
        <EqualsSvg className="w-16 h-16 text-neutral-100 md:w-20 md:h-20" />
        <HashpireSvg className="w-24 h-24 md:w-28 md:h-28 lg:w-36 lg:h-36" />
      </div>
    </section>

    {/* Section 2 */}
    <section className="px-6 py-16 md:py-20 md:px-8 lg:py-28 lg:px-32 bg-background-darker">
      <div className="max-w-6xl mx-auto text-center">
        <span className="text-xl font-semibold text-primary md:text-2xl">hashpire</span>{' '}
        <span className="text-xl font-semibold whitespace-pre-line text-neutral-100 md:text-2xl md:whitespace-normal">
          {`is a community-driven \nDigital Garden`}
        </span>
        <p className="mt-6 text-base text-primary sm:whitespace-pre-line md:text-xl md:font-semibold md:text-neutral-400 ">
          {`A space for people to create, curate, cultivate and discuss content \nrelated to the Decentralize web`}
        </p>
        <div className="mt-16">
          <span className="block text-2xl font-semibold underline text-primary">Community Goals</span>
          <div className="grid grid-cols-1 mt-6 gap-y-6 gap-x-6 lg:gap-x-9 md:grid-cols-3">
            {communityGoals.map((goal, key) => (
              <p
                className="text-base whitespace-pre-line text-neutral-200 md:whitespace-normal lg:whitespace-normal"
                key={key}
              >
                {goal}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Section 3 */}
    <section className="px-6 py-16 bg-background md:py-20 md:px-8 lg:p-28">
      <div className="max-w-6xl mx-auto text-center">
        <span className="text-3xl font-semibold text-neutral-100 md:text-4xl">#</span>{' '}
        <span className="text-3xl font-semibold text-primary md:text-4xl">Digital Garden</span>
        <p className="mt-6 text-base font-semibold text-neutral-200 md:text-xl lg:whitespace-pre-line">
          {`A digital garden is a public space of information where seeds of thought are growing. \nIt's about writing and creating process-oriented networking cotntent.`}
        </p>
        <div className="mt-6 mb-12">
          <span className="text-base font-normal text-primary md:font-semibold">Garden</span>{' '}
          <p className="inline text-base font-normal text-neutral-400 md:text-neutral-200 md:font-semibold lg:whitespace-pre-line">
            {`is a place where thungs grow in public we plant seeds and allow visitors to nurture \nplants and pull weeds to exploring new experiences.`}
          </p>
        </div>
        <IdeaPotSvg className="inline" />
        <div className="grid grid-cols-1 mt-14 gap-y-14 md:grid-cols-3 md:gap-x-2">
          {garden.map((item, key) => (
            <div className="flex flex-col items-center whitespace-pre-line" key={key}>
              {item.icon}
              <span className="block mt-2.5 text-xl font-semibold text-primary md:font-bold">{item.title}</span>
              <span className="block mt-2.5 text-base font-normal text-neutral-200">{item.description}</span>
              <span className="block text-base font-normal text-neutral-400">{item.subDescription}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Section 4 */}
    <section className="px-6 py-16 bg-background-darker md:py-20 md:px-8 lg:p-28">
      <div className="max-w-6xl mx-auto text-center">
        <span className="text-3xl font-semibold text-neutral-100 md:text-4xl">#</span>{' '}
        <span className="text-3xl font-semibold text-primary md:text-4xl">Why join ?</span>
        <div className="grid grid-cols-1 gap-12 mt-12 md:grid-cols-3 md:gap-6 lg:mt-24 lg:gap-20">
          {whyjoin.map((item, key) => (
            <div className="text-center whitespace-pre-line" key={key}>
              <span className="inline-block w-4 h-4 rounded-full bg-primary" />
              <span className="block mt-2 text-base font-semibold text-neutral-200 lg:text-xl">{item}</span>
            </div>
          ))}
        </div>
        <button className="px-8 py-3 mt-12 text-base font-semibold border text-primary rounded-3xl border-primary lg:mt-24">
          Join the community
        </button>
      </div>
    </section>
  </Layout>
);

export default AboutPage;
