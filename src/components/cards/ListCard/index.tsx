import React from 'react';
// import classNames from 'classnames';
import ContributorList from '../../ContributorList';
// import Tag from '../../Tag';
import type { ContributorListProps } from '../../ContributorList';
import { Link } from 'gatsby';

type ListCardProps = {
  title: string;
  excerpt: string;
  coverImage: string;
  publishedAt: string;
  contributors: ContributorListProps['contributors'];
  url: string;
};

export default function ListCard({ title, publishedAt, coverImage, contributors, excerpt, url }: ListCardProps) {
  return (
    <Link to={url} className="block">
      <article className="flex items-center h-32 md:h-40">
        <div className="flex flex-col w-3/4 h-full px-2 lg:w-4/6">
          <div>
            <h3 className="block text-base font-semibold text-neutral-100 line-clamp-2 lg:text-xl">{title}</h3>
            <p className="block mt-2 text-sm font-normal text-neutral-500 line-clamp-2">{excerpt}</p>
          </div>
          <div className="flex items-center mt-auto">
            <span className="text-xs font-normal text-neutral-500">{publishedAt}</span>
            <ContributorList contributors={contributors} className="ml-4" />
          </div>
        </div>
        <div className="w-1/4 lg:w-2/6 lg:h-full">
          <div className="aspect-w-3 aspect-h-2 lg:aspect-none lg:w-full lg:h-full">
            <img
              src={coverImage}
              alt={title}
              className="object-cover object-center w-full h-full lg:w-full lg:h-full"
            />
          </div>
        </div>
      </article>
    </Link>
  );
}
