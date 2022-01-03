import React from 'react';
import classNames from 'classnames';
import GithubSvg from '@/icons/github.inline.svg';
import FacebookSvg from '@/icons/facebook.inline.svg';
import InstagramSvg from '@/icons/instagram.inline.svg';
import TwitterSvg from '@/icons/twitter.inline.svg';

type ExternalLinksProps = {
  className?: string;
};

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

export default function ExternalLinks({ className }: ExternalLinksProps) {
  return (
    <ul className={classNames('lg:space-x-4 lg:flex', className)}>
      {links.map(({ href, Icon, screenReaderText }, index) => (
        <li key={index}>
          <a href={href} className="block text-gray-400 hover:text-gray-500">
            <span className="sr-only">{screenReaderText}</span>
            <Icon className="w-8 h-8" />
          </a>
        </li>
      ))}
    </ul>
  );
}
