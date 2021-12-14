import React from 'react';
import classNames from 'classnames';

type SectionHeaderProps = {
  title: string;
  className?: string;
};

export default function SectionHeader({ title, className }: SectionHeaderProps) {
  return (
    <div className={classNames('flex items-center', className)}>
      <div className="text-2xl text-neutral-100">{title}</div>
      <div className="flex-grow ml-8 border-2 border-dashed" />
    </div>
  );
}
