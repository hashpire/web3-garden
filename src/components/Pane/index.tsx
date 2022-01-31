import React, { ReactElement } from 'react';
import classNames from 'classnames';

type PaneProps = {
  title: string;
  children?: React.ReactNode;
  className?: string;
  icon: ReactElement;
};

export default function Pane({ children, title, className, icon }: PaneProps) {
  return (
    <div className={classNames('flex flex-col', className)}>
      <div className="flex items-center px-4 py-3 bg-background-darker">
        {icon}
        <span className="ml-2 text-base font-semibold text-neutral-400">
          {title}
        </span>
      </div>
      <div className="flex-1 p-4 overflow-auto">{children}</div>
    </div>
  );
}
