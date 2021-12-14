import React from 'react';
import classNames from 'classnames';
import Avatar from '../Avatar';

export type ContributorListProps = {
  contributors: { name: string; imageUrl: string }[];
};

export default function ContributorList({ contributors }: ContributorListProps) {
  const limit = 5;

  return (
    <div className="flex items-center">
      {contributors.slice(0, limit).map((contributor, index) => (
        <Avatar
          key={index}
          src={contributor.imageUrl}
          alt={contributor.name}
          className={classNames('w-7 h-7', { '-ml-2': index > 0 })}
        />
      ))}
      {contributors.length === 1 && (
        <span className="text-xs font-semibold text-neutral-100 ml-2">{contributors[0].name}</span>
      )}
      {contributors.length > limit && (
        <div className="flex items-center justify-center w-7 h-7 bg-background border border-neutral-100 rounded-full -ml-2">
          <span className="text-xs text-neutral-500">+{contributors.length - 5}</span>
        </div>
      )}
    </div>
  );
}
