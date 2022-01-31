import * as React from 'react';
import Layout from '../layouts/MainLayout';
import GardenSvg from '../icons/garden.inline.svg';
import SeedSvg from '../icons/seed.inline.svg';
import TreeSvg from '../icons/tree.inline.svg';
import IdeaPotSvg from '../icons/idea-pot.inline.svg';
import GraphSvg from '../icons/graph.inline.svg';
import ChatCircleSvg from '../icons/chat-circle.inline.svg';
import HandShakeSvg from '../icons/handshake.inline.svg';
import backgroundDot from '../images/background-dot.png';
import Seo from '@/components/Seo';
import { Link } from 'gatsby';

const communityGoals = [
  {
    icon: (
      <GraphSvg className="flex-none w-12 h-12 text-neutral-200 md:w-16 md:h-16" />
    ),
    title: `Provide a comprehensive \nWeb3 Digital Garden \n(Knowledge Graph)`,
  },
  {
    icon: (
      <ChatCircleSvg className="flex-none w-12 h-12 text-neutral-200 md:w-16 md:h-16" />
    ),
    title: `A friendly space for Web3 enthusiasts to network and discuss all things Web3`,
  },
  {
    icon: (
      <HandShakeSvg className="flex-none w-12 h-12 text-neutral-200 md:w-16 md:h-16" />
    ),
    title: `Promote and support the growth and development of the decentralized web`,
  },
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
    <Seo
      title="About"
      description="Hashpire is a collaborative space for people to learn, share and discuss all things Web3"
    />
    {/* Section 1 */}
    <section
      className="px-6 py-24 bg-no-repeat bg-cover md:px-10 md:py-36 lg:py-36"
      style={{
        backgroundImage: `url(${backgroundDot})`,
      }}
    >
      <div className="max-w-5xl mx-auto text-left md:text-center lg:whitespace-pre-line">
        <h1 className="text-4xl font-semibold leading-snug whitespace-pre-line md:text-6xl md:leading-snug text-neutral-200 lg:whitespace-normal">
          <span className="block md:hidden">{`In\n Decentralization\n We Trust`}</span>
          <span className="hidden md:block">{`In Decentralization\n We Trust`}</span>
        </h1>
        <p className="mt-10 text-2xl font-semibold leading-normal whitespace-pre-line text-neutral-400 lg:text-3xl lg:leading-normal">
          <span className="text-primary">hashpire</span>
          <span className="inline md:hidden">
            {
              '\n is a collaborative space for people to learn, share and discuss all things Web3'
            }
          </span>
          <span className="hidden md:inline">
            {
              ' is a collaborative space for people to \nlearn, share and discuss all things Web3'
            }
          </span>
        </p>
      </div>
    </section>

    {/* Section 2 */}
    <section className="px-6 py-16 bg-background-darker md:py-28 md:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-normal text-primary">Our Goals</h2>
        <div className="grid grid-cols-1 gap-8 mt-12 lg:mt-14 md:grid-cols-3 md:gap-6">
          {communityGoals.map((goal, key) => (
            <div
              className="flex items-center px-6 py-4 text-left md:text-center md:flex-col bg-background md:py-12 md:px-6 rounded-3xl shadow-1"
              key={key}
            >
              {goal.icon}
              <span className="block ml-6 text-base font-semibold md:mt-6 md:ml-0 text-neutral-200 lg:text-xl lg:whitespace-pre-line">
                {goal.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Section 3 */}
    <section className="px-6 py-16 bg-background md:py-20 md:px-8 lg:py-28">
      <div className="max-w-6xl mx-auto text-center xl:grid xl:grid-rows-2 xl:grid-flow-col gap-x-12">
        <div className="text-left xl:mt-8 md:text-center">
          <h2 className="text-3xl font-semibold leading-snug whitespace-pre-line md:whitespace-normal text-primary md:text-4xl">
            {`Building a Web3 \nDigital Garden`}
          </h2>
          <p className="mt-6 text-base font-normal text-neutral-400 md:text-xl md:max-w-5xl md:mx-auto xl:max-w-none">
            {`In a rapidly changing technological world, our community is committed to building and maintaining a community-driven Digital Garden, a graph-based collective knowledge base, to provide valuable knowledge and powerful insights about Web3 to the general public.`}
          </p>
        </div>
        <IdeaPotSvg className="inline mt-12 xl:block xl:mt-0 xl:w-full xl:h-full xl:order-first xl:row-span-2 xl:col-span-2" />
        <div className="grid grid-cols-1 mt-14 gap-y-14 md:grid-cols-3 md:gap-x-2">
          {digitalGarden.map((element, key) => (
            <div
              className="flex flex-col items-center md:whitespace-pre-line"
              key={key}
            >
              {element.icon}
              <span className="block mt-6 text-xl font-semibold text-primary md:font-bold">
                {element.title}
              </span>
              <span className="block mt-2 text-base font-normal md:mt-3 text-neutral-200">
                {element.description}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Section 4 */}
    <section className="px-6 py-16 bg-background-darker md:py-20 md:px-8 lg:py-28 lg:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-primary md:text-4xl">
          Community Perks
        </h2>
        <div className="grid grid-cols-1 gap-12 mt-12 md:grid-cols-3 md:gap-6 lg:mt-14 lg:gap-20">
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
