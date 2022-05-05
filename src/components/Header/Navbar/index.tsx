import React from 'react';
import { Link } from 'gatsby';
import HomeSvg from '@/icons/home.inline.svg';
import PeopleSvg from '@/icons/people.inline.svg';
import AboutSvg from '@/icons/about.inline.svg';
import classNames from 'classnames';

type NavbarProps = {
  className?: string;
};

const navbarItems = [
  {
    Icon: HomeSvg,
    text: 'Home',
    to: '/',
  },
  {
    Icon: PeopleSvg,
    text: 'Community',
    to: '/community',
  },
  {
    Icon: AboutSvg,
    text: 'About',
    to: '/about',
  },
];

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  return (
    <nav className={classNames('flex', className)}>
      <ul className="flex justify-around w-full lg:w-auto lg:justify-start lg:space-x-8">
        {navbarItems.map(({ Icon, text, to }, index) => (
          <li key={index}>
            <Link
              to={to}
              className="flex items-center justify-center h-full text-gray-400 w-14 md:w-auto hover:text-primary"
              activeClassName="navbar-active"
            >
              <Icon className="w-6 h-6" />
              <span className="hidden ml-2 text-sm font-semibold md:inline-block">
                {text}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
