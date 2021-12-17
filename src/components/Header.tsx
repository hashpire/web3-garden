import React from 'react';
import { Link } from 'gatsby';
import Navbar from './Navbar';
import HashpireLogoSvg from '@images/hashpire-logo-dark.inline.svg';
import LeftPaneSvg from '@icons/left-pane.inline.svg';
import RightPaneSvg from '@icons/right-pane.inline.svg';

type HeaderProps = {
  siteTitle: string;
};

const Header: React.FC<HeaderProps> = ({ siteTitle }) => {
  // px-4 sm:px-6 md:px-8
  return (
    <header className="px-2 py-2 lg:px-6 lg:py-0 bg-background border-solid border-b border-neutral-500 flex flex-col lg:flex-row">
      <div className="h-16 flex justify-between items-center">
        <LeftPaneSvg className="block lg:hidden text-neutral-500 w-9 h-9" />
        <Link to="/" className="flex h-full">
          <span className="sr-only">{siteTitle}</span>
          <HashpireLogoSvg className="w-32 h-auto" />
        </Link>
        <RightPaneSvg className="block lg:hidden text-neutral-500 w-9 h-9" />
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
