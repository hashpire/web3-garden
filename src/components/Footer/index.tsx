import React from 'react';
import HashpireThlSvg from '../../images/hashpire-thl.inline.svg';
import GithubSvg from '@/icons/github.inline.svg';
import FacebookSvg from '@/icons/facebook.inline.svg';
import InstagramSvg from '@/icons/instagram.inline.svg';
import TwitterSvg from '@/icons/twitter.inline.svg';

const links = [
  {
    Icon: GithubSvg,
    href: 'https://github.com/hashpire',
    screenReaderText: 'Hashpire on Github',
  },
  {
    Icon: FacebookSvg,
    href: 'https://facebook.com/hashpire',
    screenReaderText: 'Hashpire on Facebook',
  },
  {
    Icon: InstagramSvg,
    href: 'https://instagram.com/hashpire',
    screenReaderText: 'Hashpire on Instagram',
  },
  {
    Icon: TwitterSvg,
    href: 'https://twitter.com/hashpire',
    screenReaderText: 'Hashpire on Twitter',
  },
];

const MainPageFooter: React.FC<{}> = () => {
  return (
    <footer className="flex flex-col items-center justify-center space-y-4 p-9 bg-background">
      <HashpireThlSvg className="w-40 h-auto" />
      <ul className="flex space-x-2">
        {links.map(({ href, Icon, screenReaderText }, index) => (
          <li key={index}>
            <a
              href={href}
              className="flex items-center justify-center w-12 h-12 text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">{screenReaderText}</span>
              <Icon className="w-8 h-8" />
            </a>
          </li>
        ))}
      </ul>
      <div className="text-base text-neutral-400">
        Copyright © Hashpire 2021.
      </div>
    </footer>
  );
};

export default MainPageFooter;
