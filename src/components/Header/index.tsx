import React from 'react';
import { Link } from 'gatsby';
import Navbar from './Navbar';
import LinkToDiscuss from './LinkToDiscuss';
import HashpireLogoSvg from '@images/hashpire-logo-dark.inline.svg';

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="flex flex-col items-center px-4 border-b border-brand-grey md:px-6 bg-background-darker lg:bg-background lg:border-b-0">
      <div className="flex items-center w-full">
        <Link to="/" className="flex h-14 lg:h-16">
          <span className="sr-only">Hashpire</span>
          <HashpireLogoSvg className="w-32 h-auto" />
        </Link>
        <LinkToDiscuss className="ml-auto lg:ml-6" />
        <Navbar className="hidden h-16 lg:flex lg:ml-auto" />
      </div>
      <Navbar className="w-full h-12 lg:hidden" />
    </header>
  );
};

export default Header;
