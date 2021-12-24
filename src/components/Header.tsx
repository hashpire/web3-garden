import React from 'react';
import { Link } from 'gatsby';
import Navbar from './Navbar';
import HashpireLogoSvg from '@images/hashpire-logo-dark.inline.svg';

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="flex px-6 border-b border-solid bg-background border-background shadow-2 lg:shadow-none">
      <div className="flex items-center h-16">
        <Link to="/" className="flex h-full mx-auto">
          <span className="sr-only">Hashpire</span>
          <HashpireLogoSvg className="w-32 h-auto" />
        </Link>
      </div>
      <Navbar className="flex-1" />
    </header>
  );
};

export default Header;
