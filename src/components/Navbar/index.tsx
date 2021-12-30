import React from 'react';
import { Link } from 'gatsby';
import HomeSvg from '../../icons/home.inline.svg';
import PeopleSvg from '../../icons/people.inline.svg';
import BulbSvg from '../../icons/bulb.inline.svg';
import GithubSvg from '../../icons/github.inline.svg';
import FacebookSvg from '../../icons/facebook.inline.svg';
import InstagramSvg from '../../icons/instagram.inline.svg';
import TwitterSvg from '../../icons/twitter.inline.svg';
import classNames from 'classnames';

type NavbarProps = {
  className?: string;
};

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  return (
    <nav className={(classNames('flex h-16'), className)}>
      <ul className="flex h-full">
        <li className="ml-auto lg:ml-10">
          <Link
            to="/"
            className="flex items-center h-full text-gray-400 hover:text-primary"
            activeClassName="navbar-active"
          >
            <HomeSvg className="w-7 h-7 lg:w-6 lg:h-6" />
            <span className="hidden ml-2 text-sm font-semibold md:inline-block">
              Home
            </span>
          </Link>
        </li>
        <li className="ml-10">
          <Link
            to="/community"
            className="flex items-center h-full text-gray-400 hover:text-primary"
            activeClassName="navbar-active"
          >
            <PeopleSvg className="w-7 h-7 lg:w-6 lg:h-6" />
            <span className="hidden ml-2 text-sm font-semibold md:inline-block">
              Community
            </span>
          </Link>
        </li>
        <li className="ml-10">
          <Link
            to="/about"
            className="flex items-center h-full text-gray-400 hover:text-primary"
            activeClassName="navbar-active"
          >
            <BulbSvg className="w-7 h-7 lg:w-6 lg:h-6" />
            <span className="hidden ml-2 text-sm font-semibold md:inline-block ">
              About
            </span>
          </Link>
        </li>
        <li className="hidden lg:ml-auto lg:flex lg:flex-col lg:justify-center">
          <a
            href="https://github.com/hashpire"
            className="block text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Hashpire on GitHub</span>
            <GithubSvg className="w-8 h-8" />
          </a>
        </li>
        <li className="hidden lg:ml-4 lg:flex lg:flex-col lg:justify-center">
          <a
            href="https://facebook.com/hashpire"
            className="block text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Hashpire on Facebook</span>
            <FacebookSvg className="w-8 h-8" />
          </a>
        </li>
        <li className="hidden lg:ml-4 :flex :flex-col lg:justify-center">
          <a
            href="https://instagram.com/hashpire"
            className="block text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Hashpire on Instagram</span>
            <InstagramSvg className="w-8 h-8" />
          </a>
        </li>
        <li className="hidden lg:ml-4 lg:flex lg:flex-col lg:justify-center">
          <a
            href="https://github.com/hashpire"
            className="block text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Hashpire on Twitter</span>
            <TwitterSvg className="w-8 h-8" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
