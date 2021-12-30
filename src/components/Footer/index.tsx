import React from 'react';
import HashpireThlSvg from '../../images/hashpire-thl.inline.svg';
import GithubSvg from '../../icons/github.inline.svg';
import FacebookSvg from '../../icons/facebook.inline.svg';
import InstagramSvg from '../../icons/instagram.inline.svg';
import TwitterSvg from '../../icons/twitter.inline.svg';

const MainPageFooter: React.FC<{}> = () => {
  return (
    <footer className="flex flex-col items-center justify-center p-10 space-y-4 bg-background">
      <HashpireThlSvg className="w-40 h-auto" />
      <ul className="flex space-x-2">
        <li className="flex flex-col justify-center">
          <a
            href="https://github.com/hashpire"
            className="block text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Hashpire on GitHub</span>
            <GithubSvg className="w-8 h-8" />
          </a>
        </li>
        <li className="flex flex-col justify-center">
          <a
            href="https://facebook.com/hashpire"
            className="block text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Hashpire on Facebook</span>
            <FacebookSvg className="w-8 h-8" />
          </a>
        </li>
        <li className="flex flex-col justify-center">
          <a
            href="https://instagram.com/hashpire"
            className="block text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Hashpire on Instagram</span>
            <InstagramSvg className="w-8 h-8" />
          </a>
        </li>
        <li className="flex flex-col justify-center">
          <a
            href="https://github.com/hashpire"
            className="block text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Hashpire on Twitter</span>
            <TwitterSvg className="w-8 h-8" />
          </a>
        </li>
      </ul>
      <div className="text-base text-neutral-400">
        Copyright © Hashpire 2021.
      </div>
    </footer>
  );
};

export default MainPageFooter;
