import React from 'react';
import { Link } from 'gatsby';
import Navbar from './Navbar';
import HashpireLogoSvg from '@images/hashpire-logo-dark.inline.svg';
import LeftPaneSvg from '@icons/left-pane.inline.svg';
import RightPaneSvg from '@icons/right-pane.inline.svg';

type HeaderProps = {
  sidePane?: {
    onLeftClick: () => void;
    onRightClick: () => void;
  };
  siteTitle: string;
};

const Header: React.FC<HeaderProps> = ({ siteTitle, sidePane }) => {
  return (
    <header className="flex flex-col px-2 py-2 border-b border-solid lg:px-6 lg:py-0 bg-background-darker border-background shadow-2 lg:shadow-none lg:bg-background lg:flex-row">
      <div className="flex items-center h-16">
        {sidePane?.onLeftClick && (
          <LeftPaneSvg
            className="block lg:hidden text-neutral-500 w-9 h-9 hover:text-primary"
            onClick={sidePane.onLeftClick}
          />
        )}
        <Link to="/" className="flex h-full mx-auto">
          <span className="sr-only">{siteTitle}</span>
          <HashpireLogoSvg className="w-32 h-auto" />
        </Link>
        {sidePane?.onRightClick && (
          <RightPaneSvg
            className="block lg:hidden text-neutral-500 w-9 h-9 hover:text-primary"
            onClick={sidePane.onRightClick}
          />
        )}
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
