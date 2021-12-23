import * as React from 'react';
import Layout from '../layouts/MainLayout';
import GardenSvg from '../icons/garden.inline.svg';
import SeedSvg from '../icons/seed.inline.svg';
import TreeSvg from '../icons/tree.inline.svg';
import IdeaPotSvg from '../icons/idea-pot.inline.svg';
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

const digitalGarden = [
  {
    icon: <SeedSvg className="text-neutral-200 w-14 h-14" />,
    title: 'Seed',
    description: 'Seed the garden with a \ncontent idea.',
    subDescription: 'Start a topic with an idea',
  },
  {
    icon: <TreeSvg className="text-neutral-200 w-14 h-14" />,
    title: 'Tree',
    description: `Produce branches \nfor the content.`,
    subDescription: 'Create content linked to the topic',
  },
  {
    icon: <GardenSvg className="text-neutral-200 w-14 h-14" />,
    title: 'Garden',
    description: `Connect the dots \n\n`,
    subDescription: 'See relationships and gain insights',
  },
];

const AboutPage: React.FC<{}> = () => (
  <Layout>
    <Seo title="Hashpire About" />
    {/* Section 1 */}
    <section
      className="px-6 bg-no-repeat bg-cover py-36 md:px-10 lg:py-28 lg:px-32"
      style={{
        backgroundImage: `url(${backgroundDot})`,
      }}
    >
      <div className="mx-auto text-center max-w-7xl lg:whitespace-pre-line">
        <span className="text-3xl font-semibold text-primary md:text-4xl">hashpire</span>
        <p className="inline text-3xl font-semibold whitespace-pre-line text-neutral-100 md:text-4xl xl:whitespace-normal">{` is \na community-driven Digital Garden`}</p>
        <p className="mt-10 text-base font-semibold text-neutral-400 md:mt-6 md:text-xl md:whitespace-pre-line">
          {`A space for people to create, curate, cultivate and discuss content \nrelated to the Decentralize web`}
        </p>
      </div>
    </section>

    {/* Section 2 */}
    <section className="px-6 py-16 bg-background md:py-20 md:px-8 lg:py-28 lg:px-16">
      <div className="mx-auto text-center max-w-7xl xl:grid xl:grid-rows-2 xl:grid-flow-col gap-x-12">
        <div className="xl:mt-8">
          <h2 className="text-3xl font-semibold text-primary md:text-4xl">Digital Garden</h2>
          <p className="mt-6 text-base font-semibold text-neutral-400 md:text-xl lg:whitespace-pre-line xl:whitespace-normal">
            {`A digital garden is a public space of information where seeds of thought grow. \nIt's about writing and creating process-oriented networking content.`}
          </p>
        </div>
        <IdeaPotSvg className="inline mt-12 xl:block xl:mt-0 xl:w-full xl:h-full xl:order-first xl:row-span-2 xl:col-span-2" />
        <div className="grid grid-cols-1 mt-14 gap-y-14 md:grid-cols-3 md:gap-x-2 xl:mt-4">
          {digitalGarden.map((element, key) => (
            <div className="flex flex-col items-center md:whitespace-pre-line" key={key}>
              {element.icon}
              <span className="block mt-6 text-xl font-semibold text-primary md:font-bold">{element.title}</span>
              <span className="block mt-2 text-base font-semibold md:mt-3 text-neutral-200">{element.description}</span>
              <span className="block mt-2 text-base font-normal md:mt-3 text-neutral-400">
                {element.subDescription}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Section 3 */}
    <section className="px-6 py-16 bg-background-darker md:py-20 md:px-8 lg:py-28 lg:px-16">
      <div className="mx-auto text-center max-w-7xl">
        <h2 className="text-3xl font-semibold text-primary md:text-4xl">Why join ?</h2>
        <div className="grid grid-cols-1 gap-12 mt-12 md:grid-cols-3 md:gap-6 lg:mt-24 lg:gap-20">
          {whyjoin.map((post, key) => (
            <div className="text-center whitespace-pre-line" key={key}>
              <span className="inline-block w-4 h-4 rounded-full bg-primary" />
              <span className="block mt-2 text-base font-semibold text-neutral-200 lg:text-xl">{post}</span>
            </div>
          ))}
        </div>
        <button className="px-8 py-3 mt-12 text-base font-semibold border text-primary rounded-3xl border-primary hover:text-neutral-200 hover:bg-primary lg:mt-24">
          Join the community
        </button>
      </div>
    </section>
  </Layout>
);

export default AboutPage;
