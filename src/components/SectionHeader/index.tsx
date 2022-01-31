import React from 'react';
import classNames from 'classnames';

type SectionHeaderProps = {
  title: string;
  className?: string;
};

export default function SectionHeader({
  title,
  className,
}: SectionHeaderProps) {
  return (
    <div className={classNames('flex items-center', className)}>
      <h2 className="text-2xl font-semibold text-brand-yellow">{title}</h2>
      <div className="flex-grow ml-8 h-0.5 bg-neutral-500" />
      <div className="w-3 h-3 rounded-full bg-neutral-500" />
    </div>
  );
}
