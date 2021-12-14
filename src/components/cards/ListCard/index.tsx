import React from 'react';
// import classNames from 'classnames';
import ContributorList from '../../ContributorList';
// import Tag from '../../Tag';
import type { ContributorListProps } from '../../ContributorList';
import { Link } from 'gatsby';

type ListCardProps = {
  title: string;
  description: string;
  coverImage: string;
  publishedAt: string;
  tags: { name: string }[];
  contributors: ContributorListProps['contributors'];
  url: string;
};

export default function ListCard({
  title,
  // tags,
  publishedAt,
  coverImage,
  contributors,
  description,
  url,
}: ListCardProps) {
  return (
    <Link to={url} className="block">
      <article className="flex h-36 items-center md:h-44">
        <div className="flex flex-col w-3/4 lg:w-4/6 px-2 h-full">
          <ContributorList contributors={contributors} />
          <h3 className="block text-base font-semibold text-neutral-1 line-clamp-2 lg:text-xl ">{title}</h3>
          <p className="block text-sm font-normal text-neutral-3 line-clamp-2">{description}</p>
          {/* <div className="block line-clamp-1 lg:hidden">
          {tags.map((tag, key) => (
            <span key={key} className="mr-2 text-xs text-neutral-3 font-normal">
              #{tag.name}
            </span>
          ))}
        </div> */}
          <div className="mt-auto">
            <span className="text-xs text-neutral-3 font-normal">{publishedAt}</span>
            {/* <span className="hidden lg:inline-block lg:line-clamp-1">
            {tags.slice(0, 3).map((tag, key) => (
              <Tag key={key} name={tag.name} className="ml-2" />
            ))}
          </span> */}
          </div>
        </div>
        <div className="w-1/4 lg:w-2/6 lg:h-full">
          <div className="aspect-w-3 aspect-h-2 lg:aspect-none lg:w-full lg:h-full">
            <img
              src={coverImage}
              alt={title}
              className="w-full h-full object-center object-cover lg:w-full lg:h-full"
            />
          </div>
        </div>
      </article>
    </Link>
  );
}
