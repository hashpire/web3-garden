import React from 'react';
import classNames from 'classnames';
import ContributorList from '../../ContributorList';
import type { ContributorListProps } from '../../ContributorList';
import { Link } from 'gatsby';

export type FeaturedCardProps = {
  className?: string;
  title: string;
  url: string;
  excerpt: string;
  coverImage: string;
  publishedAt: string;
  contributors: ContributorListProps['contributors'];
};

export default function FeaturedCard({
  title,
  excerpt,
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
          'h-80 max-w-md px-6 pb-6 flex flex-col justify-end rounded-2xl shadow-2 border border-brand-grey bg-center bg-no-repeat bg-cover',
          className,
        )}
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(23, 23, 23, 0) 0.01%, rgba(23, 23, 23, 0.6) 43.23%, rgba(23, 23, 23, 0.9) 71.87%, #171717 100%),url(${coverImage}`,
        }}
      >
        <span className="block text-xl font-semibold text-neutral-100 line-clamp-2">{title}</span>
        <p className="mt-1 text-sm font-normal line-clamp-2 text-neutral-400">{excerpt}</p>
        <div className="flex items-center mt-4">
          <span className="text-xs font-normal text-neutral-400">{publishedAt}</span>
          {contributors.length >= 1 && <div className="w-1 h-1 mx-2 rounded-full bg-neutral-400" />}
          <ContributorList contributors={contributors} />
        </div>
      </article>
    </Link>
  );
}
