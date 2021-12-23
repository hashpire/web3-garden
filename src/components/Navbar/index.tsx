import React from 'react';
import { Link } from 'gatsby';
import HomeSvg from '../../icons/home.inline.svg';
import PeopleSvg from '../../icons/people.inline.svg';
import BulbSvg from '../../icons/bulb.inline.svg';
import GithubSvg from '../../icons/github.inline.svg';
import FacebookSvg from '../../icons/facebook.inline.svg';
import InstagramSvg from '../../icons/instagram.inline.svg';
import TwitterSvg from '../../icons/twitter.inline.svg';

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav className="flex flex-grow h-12 lg:h-16">
      <ul className="flex justify-around w-full h-full max-w-lg m-auto lg:max-w-full lg:justify-start">
        <li className="lg:ml-10">
          <Link
            to="/"
            className="flex items-center h-full text-gray-400 hover:text-primary"
            activeClassName="navbar-active"
          >
            <HomeSvg className="w-7 h-7 lg:w-6 lg:h-6" />
            <span className="hidden ml-2 text-sm font-semibold md:inline-block">Home</span>
          </Link>
        </li>
        <li className="lg:ml-10">
          <Link
            to="/community"
            className="flex items-center h-full text-gray-400 hover:text-primary"
            activeClassName="navbar-active"
          >
            <PeopleSvg className="w-7 h-7 lg:w-6 lg:h-6" />
            <span className="hidden ml-2 text-sm font-semibold md:inline-block">Community</span>
          </Link>
        </li>
        <li className="lg:ml-10">
          <Link
            to="/about"
            className="flex items-center h-full text-gray-400 hover:text-primary"
            activeClassName="navbar-active"
          >
            <BulbSvg className="w-7 h-7 lg:w-6 lg:h-6" />
            <span className="hidden ml-2 text-sm font-semibold md:inline-block ">About</span>
          </Link>
        </li>
        <li className="hidden lg:ml-auto lg:flex lg:flex-col lg:justify-center">
          <a href="https://github.com/hashpire" className="block text-gray-400 hover:text-gray-500">
            <span className="sr-only">Hashpire on GitHub</span>
            <GithubSvg className="w-8 h-8" />
          </a>
        </li>
        <li className="hidden lg:ml-4 lg:flex lg:flex-col lg:justify-center">
          <a href="https://facebook.com/hashpire" className="block text-gray-400 hover:text-gray-500">
            <span className="sr-only">Hashpire on Facebook</span>
            <FacebookSvg className="w-8 h-8" />
          </a>
        </li>
        <li className="hidden lg:ml-4 :flex :flex-col lg:justify-center">
          <a href="https://instagram.com/hashpire" className="block text-gray-400 hover:text-gray-500">
            <span className="sr-only">Hashpire on Instagram</span>
            <InstagramSvg className="w-8 h-8" />
          </a>
        </li>
        <li className="hidden lg:ml-4 lg:flex lg:flex-col lg:justify-center">
          <a href="https://github.com/hashpire" className="block text-gray-400 hover:text-gray-500">
            <span className="sr-only">Hashpire on Twitter</span>
            <TwitterSvg className="w-8 h-8" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
