import React from 'react';
import { Link } from 'gatsby';
import { PageProps } from 'gatsby';
import Seo from '../components/Seo';
import NotfoundSvg from '@images/not-found.inline.svg';
import backgroundDot from '@images/background-dot.png';
import WaveSvg from '@images/wave.inline.svg';
import Header from '../components/Header';

const NotFoundPage: React.FC<PageProps> = () => (
  <div
    className="flex flex-col min-h-screen bg-no-repeat bg-cover"
    style={{
      backgroundImage: `url(${backgroundDot})`,
    }}
  >
    <Header siteTitle="404: Not found" />
    <Seo title="404: Not found" />
    <main className="flex flex-col justify-center flex-grow px-6 text-center md:py-16">
      <NotfoundSvg className="mx-auto" />
      <span className="block text-3xl font-semibold mt-9 text-primary md:text-4xl md:mt-12">Page not found</span>
      <p className="mt-4 font-semibold whitespace-pre-line tex-base text-neutral-200 md:mt-6 lg:whitespace-normal">
        {`Looks like you’re lost. \nYou just hit a tree that doesn’t exist in the garden`}
      </p>
      <Link to="/">
        <button className="px-8 py-3 mt-12 text-base font-semibold border text-primary rounded-3xl border-primary hover:text-neutral-200 hover:bg-primary lg:mt-16">
          Back to home
        </button>
      </Link>
    </main>
    <div className="w-full overflow-hidden max-h-80">
      <WaveSvg className="w-full h-full" />
    </div>
  </div>
);

export default NotFoundPage;
