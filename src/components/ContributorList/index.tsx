import React from 'react';
import classNames from 'classnames';
import Avatar from '../Avatar';

export type ContributorListProps = {
  className?: string;
  contributors: { name: string; imageUrl?: string }[];
};

export default function ContributorList({
  contributors,
  className,
}: ContributorListProps) {
  const limit = 5;

  return (
    <div className={classNames('flex items-center', className)}>
      {contributors.slice(0, limit).map((contributor, index) => (
        <Avatar
          key={index}
          src={
            contributor.imageUrl ||
            'https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80'
          } // TODO: default image
          alt={contributor.name}
          className={classNames('w-7 h-7', { '-ml-2': index > 0 })}
        />
      ))}
      {contributors.length === 1 && (
        <span className="ml-2 text-xs font-semibold text-neutral-100 line-clamp-2">
          {contributors[0].name}
        </span>
      )}
      {contributors.length > limit && (
        <div className="flex items-center justify-center -ml-2 border rounded-full w-7 h-7 bg-background border-neutral-100">
          <span className="text-xs text-neutral-500">
            +{contributors.length - 5}
          </span>
        </div>
      )}
    </div>
  );
}
