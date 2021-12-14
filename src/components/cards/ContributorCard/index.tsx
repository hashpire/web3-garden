import React from 'react';
import GithubSvg from '@icons/github.inline.svg';
import FacebookSvg from '@icons/facebook.inline.svg';
import EmailSvg from '@icons/email.inline.svg';
// import InstagramSvg from '../../../icons/instagram.inline.svg';
// import TwitterSvg from '../../../icons/twitter.inline.svg';
import Badge from '@/components/Badge';
import classNames from 'classnames';

type ContributorCardProps = {
  profileImageUrl?: string;
  badgeTitle?: 'Sponsor' | 'Contributor';
  // contacts: {
  //   github?: string;
  //   facebook?: string;
  //   instagram?: string;
  //   twitter?: string;
  //   mail?: string;
  // };
  className?: string;
  username: string;
  displayName: string;
  shortIntro?: string; // bio
  github?: string;
  facebook?: string;
  twitter?: string;
  email?: string;
  website?: string;
};

export default function ContributorCard({
  profileImageUrl,
  // badgeTitle,
  // username,
  displayName,
  email,
  github,
  shortIntro,
  // website,
  facebook,
  className,
}: ContributorCardProps) {
  return (
    <div
      className={classNames(
        'relative flex flex-col items-center h-72 w-60 px-6 pb-6 bg-background border border-neutral-500 rounded-3xl',
        className,
      )}
    >
      <img
        src={profileImageUrl}
        alt={displayName}
        className="absolute -top-10 h-20 w-20 rounded-full object-cover border-4 border-neutral-200 shadow-1"
      />
      <div className="mt-16 h-full flex flex-col justify-between items-center">
        <Badge title={'Contributor'} />
        <h3 className="block text-xl text-neutral-200 font-semibold text-center">{displayName}</h3>
        <p className="block text-sm text-neutral-500 text-center line-clamp-3">{shortIntro}</p>
        <ul className="flex items-center space-x-2">
          {github && (
            <li className="flex flex-col justify-center">
              <a href="https://github.com/hashpire" className="block text-gray-400 hover:text-gray-500">
                {/* <span className="sr-only">Hashpire on GitHub</span> */}
                <GithubSvg className="w-8 h-8" />
              </a>
            </li>
          )}
          {facebook && (
            <li className="flex flex-col justify-center">
              <a href="https://facebook.com/hashpire" className="block text-gray-400 hover:text-gray-500">
                {/* <span className="sr-only">Hashpire on Facebook</span> */}
                <FacebookSvg className="w-8 h-8" />
              </a>
            </li>
          )}
          {email && (
            <li className="flex flex-col justify-center">
              <a href="https://facebook.com/hashpire" className="block text-gray-400 hover:text-gray-500">
                {/* <span className="sr-only">Hashpire on Facebook</span> */}
                <EmailSvg className="w-8 h-8" />
              </a>
            </li>
          )}
        </ul>

        {/* {facebook && <FacebookSvg className="w-6 h-6" />} */}
        {/* {instagram && <InstagramSvg className="w-6 h-6" />} */}
        {/* {twitter && <TwitterSvg className="w-6 h-6" />} */}
        {/* {mail && <MailIcon className="w-6 h-6" />} */}
      </div>
    </div>
  );
}
