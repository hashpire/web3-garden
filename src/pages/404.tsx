import React from 'react';
import { PageProps, navigate } from 'gatsby';
import Seo from '@/components/Seo';
import NotFoundSvg from '@images/not-found.inline.svg';
import background from '@images/page-not-found.svg';

const NotFoundPage: React.FC<PageProps> = () => (
  <main
    className="flex flex-col items-center justify-center flex-1 px-4 py-12 bg-no-repeat bg-cover md:bg-center 2xl:bg-bottom"
    style={{
      backgroundImage: `url(${background})`,
    }}
  >
    <Seo title="Page Not Found" />
    <NotFoundSvg />
    <h1 className="text-3xl font-semibold text-center whitespace-pre mt-7 text-primary md:text-4xl md:whitespace-normal">
      {`Opps! Looks like \nyou're lost...`}
    </h1>
    <p className="mt-4 text-base font-semibold text-center text-neutral-200 md:mt-6 md:text-xl">
      Head back or help us create new path
    </p>
    <div className="flex flex-col justify-center w-full max-w-xs mt-10 text-center md:mt-12 md:flex-row-reverse md:max-w-none">
      <a
        href="https://github.com/hashpire/eureka-web3"
        className="block px-8 py-3 text-base font-semibold transition duration-300 ease-in-out md:w-56 bg-primary text-neutral-100 rounded-3xl md:inline-block hover:-translate-y-1"
      >
        Contribute Now
      </a>
      <a
        onClick={() => navigate(-1)}
        className="block px-8 py-3 mt-6 text-base font-semibold transition duration-300 ease-in-out border cursor-pointer md:w-56 md:inline-block md:mr-6 text-primary rounded-3xl border-primary md:mt-0 hover:-translate-y-1"
      >
        Go Back
      </a>
    </div>
  </main>
);

export default NotFoundPage;
