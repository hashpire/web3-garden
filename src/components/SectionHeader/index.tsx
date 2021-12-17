import React from 'react';
import classNames from 'classnames';

type SectionHeaderProps = {
  title: string;
  className?: string;
};

export default function SectionHeader({ title, className }: SectionHeaderProps) {
  return (
    <div className={classNames('flex items-center', className)}>
      <div className="text-2xl text-brand-yellow">{title}</div>
      <div className="flex-grow ml-8 border-2 border-neutral-500" />
      <div className="w-3 h-3 rounded-full bg-neutral-500" />
    </div>
  );
}
