import React from 'react';
import LinkSvg from '@/icons/link.inline.svg';
import classNames from 'classnames';

type PaneProps = {
  title: string;
  children?: React.ReactNode;
  className?: string;
};

export default function Pane({ children, title, className }: PaneProps) {
  return (
    <div className={classNames('bg-background flex flex-col', className)}>
      <div className="flex items-center px-4 py-3 bg-background-darker">
        <LinkSvg className="inline w-6 h-6 text-neutral-200" />
        <span className="ml-2 text-base font-semibold text-neutral-200">
          {title}
        </span>
      </div>
      <div className="flex-1 p-4 overflow-auto">{children}</div>
    </div>
  );
}
