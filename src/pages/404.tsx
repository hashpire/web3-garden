import React from 'react';
import { Link } from 'gatsby';
import { PageProps } from 'gatsby';
import Seo from '@/components/Seo';
import NotFoundSvg from '@images/not-found.inline.svg';
import background from '@images/page-not-found.svg';

const NotFoundPage: React.FC<PageProps> = () => (
  <main
    className="flex px-4 py-12 flex-col justify-center items-center flex-1 bg-no-repeat bg-cover md:bg-center 2xl:bg-bottom"
    style={{
      backgroundImage: `url(${background})`,
    }}
  >
    <Seo title="Page Not Found" />
    <NotFoundSvg />
    <h1 className="text-3xl mt-7 font-semibold text-center text-primary">
      Page Not Found
    </h1>
    <p className="mt-4 text-base font-semibold whitespace-pre-line text-center text-neutral-200 lg:whitespace-normal">
      {`Looks like you’re lost. \nYou just hit a tree that doesn’t exist in the garden`}
    </p>
    <Link
      to="/"
      className="px-8 py-3 mt-12 text-base font-semibold border text-primary rounded-3xl border-primary hover:text-neutral-200 hover:bg-primary lg:mt-16"
    >
      Back to Home
    </Link>
  </main>
);

export default NotFoundPage;
