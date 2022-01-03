import React from 'react';
import { Link } from 'gatsby';
import { PageProps } from 'gatsby';
import Seo from '@/components/Seo';
import NotFoundSvg from '@images/not-found.inline.svg';
import backgroundDot from '@images/background-dot.png';
import WaveSvg from '@images/wave.inline.svg';

const NotFoundPage: React.FC<PageProps> = () => (
  <main
    className="flex flex-col items-center flex-1"
    style={{
      backgroundImage: `url(${backgroundDot})`,
    }}
  >
    <Seo title="Page Not Found" />
    <NotFoundSvg />
    <h1 className="text-3xl font-semibold mt-9 text-primary md:text-4xl md:mt-12">
      Page not found
    </h1>
    <p className="mt-4 text-base font-semibold whitespace-pre-line text-neutral-200 md:mt-6 lg:whitespace-normal">
      {`Looks like you’re lost. \nYou just hit a tree that doesn’t exist in the garden`}
    </p>
    <Link
      to="/"
      className="px-8 py-3 mt-12 text-base font-semibold border text-primary rounded-3xl border-primary hover:text-neutral-200 hover:bg-primary lg:mt-16"
    >
      Back to Home
    </Link>
    <div className="w-full mt-auto overflow-hidden max-h-80">
      <WaveSvg className="w-full h-auto" />
    </div>
  </main>
);

export default NotFoundPage;
