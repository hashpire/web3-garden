import React from 'react';
import classNames from 'classnames';
import ContributorList from '../../ContributorList';
import type { ContributorListProps } from '../../ContributorList';
import { Link } from 'gatsby';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

export type FeaturedCardProps = {
  className?: string;
  title: string;
  url: string;
  excerpt: string;
  coverImage?: IGatsbyImageData;
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
      <article className={classNames('relative h-80', className)}>
        <div className="relative w-full h-full">
          {coverImage && (
            <GatsbyImage
              alt={title}
              image={coverImage}
              className="w-full h-full"
            />
          )}
          <div
            className="absolute inset-0 z-10"
            style={{
              background:
                'linear-gradient(180deg, rgba(23, 23, 23, 0) 0.01%, rgba(23, 23, 23, 0.6) 43.23%, rgba(23, 23, 23, 0.9) 71.87%, #171717 100%)',
            }}
          ></div>
        </div>
        <div className="absolute z-50 flex flex-col justify-between bottom-6 left-6 right-6">
          <div className="flex flex-col">
            <span className="font-semibold text-neutral-100 line-clamp-2">
              {title}
            </span>
            <span className="mt-1 text-sm font-normal line-clamp-2 text-neutral-400">
              {excerpt}
            </span>
          </div>
          <div className="flex items-center mt-3">
            <span className="text-xs font-normal text-neutral-400">
              {publishedAt}
            </span>
            {contributors.length > 0 && (
              <div className="w-1 h-1 mx-2 rounded-full bg-neutral-400" />
            )}
            <ContributorList contributors={contributors} />
          </div>
        </div>
      </article>
    </Link>
  );
}
