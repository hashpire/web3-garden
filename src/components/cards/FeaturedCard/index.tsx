import React from 'react';
import classNames from 'classnames';
import FolderSvg from '../../../icons/folder.inline.svg';
import ContributorList from '../../ContributorList';
import type { ContributorListProps } from '../../ContributorList';
import { Link } from 'gatsby';

export type FeaturedCardProps = {
  className?: string;
  title: string;
  url: string;
  description: string;
  coverImage: string;
  publishedAt: string;
  contributors: ContributorListProps['contributors'];
};

export default function FeaturedCard({
  title,
  description,
  coverImage,
  publishedAt,
  contributors,
  className,
  url,
}: FeaturedCardProps) {
  return (
    <Link to={url}>
      <article
        className={classNames(
          'h-80 max-w-md px-6 pb-6 flex flex-col justify-end rounded-2xl shadow-1 border border-neutral-400 bg-center bg-no-repeat bg-cover',
          className,
        )}
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(30, 30, 30, 0.2) 0%, rgba(30, 30, 30, 0.1) 0.01%, rgba(30, 30, 30, 0.9) 72.97%, #1E1E1E 100%), url(${coverImage})`,
        }}
      >
        <div className="flex flex-col justify-between">
          <div className="flex flex-col">
            <div className="flex items-center">
              <FolderSvg className="text-neutral-100 h-8 w-8" />
              <span className="text-neutral-100 font-semibold line-clamp-1 ml-2">{title}</span>
            </div>
            <span className="line-clamp-2 text-neutral-500 text-sm font-normal mt-1">{description}</span>
          </div>
          <div className="flex items-center mt-3">
            <span className="text-xs text-neutral-500 font-normal">{publishedAt}</span>
            <div className="w-0.5 h-0.5 rounded-full bg-neutral-400 mx-2" />
            <ContributorList contributors={contributors} />
          </div>
        </div>
      </article>
    </Link>
  );
}
