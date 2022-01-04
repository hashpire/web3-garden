import * as React from 'react';
import Layout from '../layouts/MainLayout';
import GardenSvg from '../icons/garden.inline.svg';
import SeedSvg from '../icons/seed.inline.svg';
import TreeSvg from '../icons/tree.inline.svg';
import IdeaPotSvg from '../icons/idea-pot.inline.svg';
import backgroundDot from '../images/background-dot.png';
import Seo from '@/components/Seo';
import { Link } from 'gatsby';

const communityGoals = [
  `Provide a comprehensive \nWeb3 Digital Garden \n(Knowledge Graph)`,
  `A friendly space for Web3 enthusiasts to network and discuss all things Web3`,
  `Promote and support the growth and development of the decentralized web`,
];

const communityPerks = [
  `Meet friendly \nlike-minded people`,
  `Knowledge sharing and \ncollaborative learning with peers`,
  `Participate in community\n events and activities`,
  `Recognition and rewards \nfor your contributions`,
  `Access to exclusive privileges\n from sponsors and partners`,
  `Have a voice in our community \nand so much more!`,
  // `Mentorships, Sponsorships, Investments and Job Opportunities`,
];

const digitalGarden = [
  {
    icon: <SeedSvg className="text-neutral-200 w-14 h-14" />,
    title: 'Plant Seeds',
    description: 'Create new content ideas',
  },
  {
    icon: <TreeSvg className="text-neutral-200 w-14 h-14" />,
    title: 'Nourish Trees',
    description: 'Create and link related content',
  },
  {
    icon: <GardenSvg className="text-neutral-200 w-14 h-14" />,
    title: 'Walk in the Garden',
    description: 'See content relationships and gain insights',
  },
];

const AboutPage: React.FC<{}> = () => (
  <Layout>
    <Seo title="About" />
    {/* Section 1 */}
    <section
      className="px-6 bg-no-repeat bg-cover py-36 md:px-10 lg:py-28 lg:px-32"
      style={{
        backgroundImage: `url(${backgroundDot})`,
      }}
    >
      <div className="mx-auto text-left md:text-center max-w-7xl lg:whitespace-pre-line">
        <h1 className="text-4xl font-semibold whitespace-pre-line md:mt-6 md:text-6xl text-neutral-100 md:whitespace-normal">
          {`In\n Decentralization\n We Trust`}
        </h1>
        <p className="mt-10 text-3xl font-semibold whitespace-pre-line text-neutral-100 md:text-4xl xl:whitespace-normal">
          <span className="md:text-4xl text-primary">hashpire</span>
          {
            '\n is a collaborative space for people to learn, share and discuss all things Web3'
          }
        </p>
      </div>
    </section>

    <section className="px-6 py-16 bg-background-darker md:py-20 md:px-8 lg:py-28 lg:px-16">
      <div className="mx-auto text-center max-w-7xl">
        <h2 className="text-3xl font-semibold text-primary md:text-4xl">
          Our Goals
        </h2>
        <div className="grid grid-cols-1 gap-12 mt-12 md:grid-cols-3 md:gap-6 lg:mt-24 lg:gap-20">
          {communityGoals.map((goal, key) => (
            <div className="text-center whitespace-pre-line" key={key}>
              <span className="inline-block w-4 h-4 rounded-full bg-primary" />
              <span className="block mt-2 text-base font-semibold text-neutral-200 lg:text-xl">
                {goal}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Section 2 */}
    <section className="px-6 py-16 bg-background md:py-20 md:px-8 lg:py-28 lg:px-16">
      <div className="mx-auto text-center max-w-7xl xl:grid xl:grid-rows-2 xl:grid-flow-col gap-x-12">
        <div className="xl:mt-8">
          <h2 className="text-3xl font-semibold text-primary md:text-4xl">
            Building a Web3 Digital Garden
          </h2>
          <p className="mt-6 text-base font-semibold text-neutral-400 md:text-xl lg:whitespace-pre-line xl:whitespace-normal">
            {`In a rapidly changing technological world, our community is committed to building and maintaining a community-driven Digital Garden, a graph-based collective knowledge base, to provide valuable knowledge and powerful insights about Web3 to the general public.`}
          </p>
        </div>
        <IdeaPotSvg className="inline mt-12 xl:block xl:mt-0 xl:w-full xl:h-full xl:order-first xl:row-span-2 xl:col-span-2" />
        <div className="grid grid-cols-1 mt-14 gap-y-14 md:grid-cols-3 md:gap-x-2 xl:mt-4">
          {digitalGarden.map((element, key) => (
            <div
              className="flex flex-col items-center md:whitespace-pre-line"
              key={key}
            >
              {element.icon}
              <span className="block mt-6 text-xl font-semibold text-primary md:font-bold">
                {element.title}
              </span>
              <span className="block mt-2 text-base font-semibold md:mt-3 text-neutral-200">
                {element.description}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Section 3 */}
    <section className="px-6 py-16 bg-background-darker md:py-20 md:px-8 lg:py-28 lg:px-16">
      <div className="mx-auto text-center max-w-7xl">
        <h2 className="text-3xl font-semibold text-primary md:text-4xl">
          Community Perks
        </h2>
        <div className="grid grid-cols-1 gap-12 mt-12 md:grid-cols-3 md:gap-6 lg:mt-24 lg:gap-20">
          {communityPerks.map((perk, key) => (
            <div className="text-center whitespace-pre-line" key={key}>
              <span className="inline-block w-4 h-4 rounded-full bg-primary" />
              <span className="block mt-2 text-base font-semibold text-neutral-200 lg:text-xl">
                {perk}
              </span>
            </div>
          ))}
        </div>
        <Link
          to="/community"
          className="inline-block px-8 py-3 mt-12 text-base font-semibold border text-primary rounded-3xl border-primary hover:text-neutral-200 hover:bg-primary lg:mt-24"
        >
          Join Us
        </Link>
      </div>
    </section>
  </Layout>
);

export default AboutPage;
