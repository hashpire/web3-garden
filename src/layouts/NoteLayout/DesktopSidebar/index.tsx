import React from 'react';
import classNames from 'classnames';
import { Transition } from '@headlessui/react';
import CollapseLeftSvg from '@icons/collapse-left.inline.svg';
import CollapseRightSvg from '@icons/collapse-right.inline.svg';

type DesktopSidebarProps = {
  className?: string;
  isShowing: boolean;
  children: React.ReactNode;
  onToggle?: () => void;
  direction?: 'left' | 'right';
};

export default function DesktopSidebar({
  className,
  isShowing,
  children,
  onToggle,
  direction = 'left',
}: DesktopSidebarProps) {
  return (
    <aside className="flex border-t border-brand-grey">
      {onToggle && direction === 'right' && (
        <button
          className="flex items-center bg-neutral-900 hover:bg-brand-grey"
          onClick={onToggle}
        >
          {isShowing ? (
            <CollapseLeftSvg className="w-7 h-7 text-neutral-100" />
          ) : (
            <CollapseRightSvg className="w-7 h-7 text-neutral-100" />
          )}
        </button>
      )}
      <Transition
        show={isShowing}
        unmount={false}
        enter="transition-all ease-in-out duration-500"
        enterFrom="w-0"
        enterTo="w-64"
        entered="w-64"
        leave="transition-all ease-in-out duration-500"
        leaveFrom="w-64"
        leaveTo="w-0"
        className={classNames(
          'w-64 h-full bg-neutral-900 overflow-x-hidden',
          className,
        )}
      >
        {children}
      </Transition>
      {onToggle && direction === 'left' && (
        <button
          className="flex items-center bg-neutral-900 hover:bg-brand-grey"
          onClick={onToggle}
        >
          {isShowing ? (
            <CollapseRightSvg className="w-7 h-7 text-neutral-100" />
          ) : (
            <CollapseLeftSvg className="w-7 h-7 text-neutral-100" />
          )}
        </button>
      )}
    </aside>
  );
}
