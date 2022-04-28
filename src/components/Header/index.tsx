import React from 'react';
import { Link } from 'gatsby';
import Navbar from './Navbar';
import LinkToDiscuss from './LinkToDiscuss';
import HashpireLogoSvg from '@images/hashpire-logo-dark.inline.svg';

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="flex flex-col items-center px-4 md:px-6 bg-background-darker">
      <div className="flex items-center w-full">
        <Link to="/" className="flex h-14 lg:h-16">
          <span className="sr-only">Hashpire</span>
          <HashpireLogoSvg className="w-32 h-auto" />
        </Link>
        <LinkToDiscuss className="ml-auto lg:ml-6" />
        <Navbar className="hidden h-16 lg:flex lg:ml-auto" />
      </div>
      <Navbar className="w-full lg:hidden h-14" />
    </header>
  );
};

export default Header;
