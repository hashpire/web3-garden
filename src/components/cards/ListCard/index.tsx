import React from 'react';
// import classNames from 'classnames';
import ContributorList from '../../ContributorList';
// import Tag from '../../Tag';
import type { ContributorListProps } from '../../ContributorList';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

type ListCardProps = {
  title: string;
  excerpt: string;
  coverImage?: IGatsbyImageData;
  publishedAt: string;
  contributors: ContributorListProps['contributors'];
  url: string;
};

export default function ListCard({
  title,
  publishedAt,
  coverImage,
  contributors,
  excerpt,
  url,
}: ListCardProps) {
  return (
    <Link to={url} className="block">
      <article className="flex items-center h-32 md:h-40">
        <div className="flex flex-col justify-center w-3/4 h-full pr-2 md:pr-4 md:justify-start lg:w-4/6">
          <div>
            <h3 className="block text-base font-semibold text-neutral-100 line-clamp-2 lg:text-xl">
              {title}
            </h3>
            <p className="block mt-2 text-sm font-normal leading-relaxed text-neutral-400 line-clamp-2">
              {excerpt}
            </p>
          </div>
          <div className="flex items-center mt-4">
            <span className="text-xs font-normal text-neutral-400">
              {publishedAt}
            </span>
            {contributors.length > 0 && (
              <div className="w-1 h-1 mx-2 rounded-full bg-neutral-400" />
            )}
            <ContributorList contributors={contributors} />
          </div>
        </div>

        <div className="w-1/4 lg:w-2/6 lg:h-full">
          <div className="aspect-w-3 aspect-h-2 lg:aspect-none lg:w-full lg:h-full">
            <div className="lg:h-full">
              {coverImage && (
                <GatsbyImage
                  alt={title}
                  image={coverImage}
                  className="w-full h-full"
                />
              )}
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
