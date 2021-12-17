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
          backgroundImage: `linear-gradient(180deg, rgba(30, 30, 30, 0.2) 0%, rgba(30, 30, 30, 0.1) 0.01%, rgba(30, 30, 30, 0.9) 72.97%, #1E1E1E 100%), url(${coverImage})`,
        }}
      >
        <span className="block text-xl font-semibold text-neutral-100 line-clamp-2">{title}</span>
        <p className="mt-1 text-sm font-normal line-clamp-2 text-neutral-400">{description}</p>
        <div className="flex items-center mt-4">
          <span className="text-xs font-normal text-neutral-400">{publishedAt}</span>
          <div className="w-0.5 h-0.5 rounded-full bg-neutral-400 mx-2" />
          <ContributorList contributors={contributors} />
        </div>
      </article>
    </Link>
  );
}
