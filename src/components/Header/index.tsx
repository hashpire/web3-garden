import React from 'react';
import { Link } from 'gatsby';
import Navbar from './Navbar';
import ExternalLinks from './ExternalLinks';
import HashpireLogoSvg from '@images/hashpire-logo-dark.inline.svg';

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="flex items-center pl-3 border-b border-solid md:px-4 bg-background border-background">
      <Link to="/" className="flex h-16">
        <span className="sr-only">Hashpire</span>
        <HashpireLogoSvg className="w-32 h-auto" />
      </Link>
      <Navbar className="ml-auto lg:ml-8" />
      <ExternalLinks className="hidden lg:ml-auto" />
    </header>
  );
};

export default Header;
