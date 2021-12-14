import React from 'react';
// import { GithubIcon, FacebookIcon, InstagramIcon, TwitterIcon, MailIcon } from '../../../Icon';
import hashpireTH from '../../images/hashpire-tonghualabs.png';
import GithubSvg from '../../icons/github.inline.svg';
import FacebookSvg from '../../icons/facebook.inline.svg';
import InstagramSvg from '../../icons/instagram.inline.svg';
import TwitterSvg from '../../icons/twitter.inline.svg';

const MainPageFooter: React.FC<{}> = () => {
  return (
    <footer className="p-10 flex flex-col items-center justify-center space-y-4 bg-gradient-to-r from-primary-light to-primary">
      <img src={hashpireTH} alt="hashpire by tonguhaulabs logo" className="w-36" />
      <ul className="flex space-x-2">
        <li className="flex flex-col justify-center">
          <a href="https://github.com/hashpire" className="block text-gray-400 hover:text-gray-500">
            <span className="sr-only">Hashpire on GitHub</span>
            <GithubSvg className="w-8 h-8" />
          </a>
        </li>
        <li className="flex flex-col justify-center">
          <a href="https://facebook.com/hashpire" className="block text-gray-400 hover:text-gray-500">
            <span className="sr-only">Hashpire on Facebook</span>
            <FacebookSvg className="w-8 h-8" />
          </a>
        </li>
        <li className="flex flex-col justify-center">
          <a href="https://instagram.com/hashpire" className="block text-gray-400 hover:text-gray-500">
            <span className="sr-only">Hashpire on Instagram</span>
            <InstagramSvg className="w-8 h-8" />
          </a>
        </li>
        <li className="flex flex-col justify-center">
          <a href="https://github.com/hashpire" className="block text-gray-400 hover:text-gray-500">
            <span className="sr-only">Hashpire on Twitter</span>
            <TwitterSvg className="w-8 h-8" />
          </a>
        </li>
      </ul>
      <div className="text-base text-neutral-4">Copyright © Hashpire 2021.</div>
    </footer>
  );
};

export default MainPageFooter;
