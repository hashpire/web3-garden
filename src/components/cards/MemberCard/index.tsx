import React from 'react';
import classNames from 'classnames';
import Badge from '@/components/Badge';
import GithubSvg from '@icons/github.inline.svg';
import FacebookSvg from '@icons/facebook.inline.svg';
import TwitterSvg from '@icons/twitter.inline.svg';
import EmailSvg from '@icons/email.inline.svg';
import WebsiteSvg from '@icons/website.inline.svg';

type ContactInfo = {
  github?: string;
  facebook?: string;
  twitter?: string;
  email?: string;
  website?: string;
};

type MemberCardProps = {
  imageUrl?: string;
  position?: string;
  name: string;
  shortIntro?: string;
  contactInfo?: ContactInfo;
  className?: string;
};

const icons: Array<{
  platform: keyof ContactInfo;
  Icon: typeof GithubSvg;
  prefix: string;
}> = [
  {
    platform: 'website',
    Icon: WebsiteSvg,
    prefix: '',
  },
  {
    platform: 'email',
    Icon: EmailSvg,
    prefix: 'mailto:',
  },
  {
    platform: 'github',
    Icon: GithubSvg,
    prefix: 'https://github.com/',
  },
  {
    platform: 'twitter',
    Icon: TwitterSvg,
    prefix: 'https://twitter.com/',
  },
  {
    platform: 'facebook',
    Icon: FacebookSvg,
    prefix: 'https://facebook.com/',
  },
];

export default function MemberCard({
  name,
  position,
  imageUrl,
  shortIntro,
  contactInfo,
  className,
}: MemberCardProps) {
  return (
    <div
      className={classNames(
        'relative flex flex-col items-center h-80 w-72 px-6 pb-6 bg-background border border-brand-grey rounded-3xl',
        className,
      )}
    >
      <img
        src={imageUrl}
        alt={name}
        className="absolute object-cover w-24 h-24 border-4 rounded-full bg-background -top-14 border-neutral-200 shadow-1"
      />
      <div className="flex flex-col items-center justify-between h-full mt-20">
        <div className="flex flex-col items-center">
          <Badge title={position || 'Contributor'} />
          <h3 className="block mt-4 text-xl font-semibold text-center text-neutral-200">
            {name}
          </h3>
          <p className="block mt-2 text-sm text-center text-neutral-400 line-clamp-4">
            {shortIntro}
          </p>
        </div>
        {contactInfo && (
          <ul className="flex items-center space-x-2">
            {icons.map(({ Icon, platform, prefix }) => {
              const handle = contactInfo[platform];
              if (!handle) return null;

              return (
                <li key={platform} className="flex flex-col justify-center">
                  <a
                    href={`${prefix}${handle}`}
                    className="block text-gray-400 hover:text-gray-500"
                  >
                    <Icon className="w-8 h-8" />
                  </a>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
