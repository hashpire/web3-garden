import React from 'react';
import classNames from 'classnames';
import { Transition } from '@headlessui/react';

type MobileSidebarProps = {
  className?: string;
  isShowing: boolean;
  onClose?: () => void;
  direction: 'left' | 'right';
  children: React.ReactNode;
};

export default function MobileSidebar({
  className,
  isShowing,
  onClose,
  direction,
  children,
}: MobileSidebarProps) {
  return (
    <Transition
      show={isShowing}
      className={classNames(className)}
      unmount={false}
      as="aside"
    >
      {/* Background overlay */}
      <Transition.Child
        enter="transition-opacity ease-in-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-50"
        entered="opacity-50"
        leave="transition-opacity ease-in-out duration-300"
        leaveFrom="opacity-50"
        leaveTo="opacity-0"
        unmount={false}
        className="fixed inset-0 z-10"
        onClick={onClose}
      >
        <div className="w-full h-full opacity-50 bg-neutral-900"></div>
      </Transition.Child>
      {/* Sidebar Implementation via Translate */}
      <Transition.Child
        enter="transition ease-in-out duration-150 transform"
        enterFrom={classNames(
          direction === 'left' ? 'translate-x-full' : '-translate-x-full',
        )}
        enterTo="translate-x-0"
        leave="transition ease-in-out duration-150 transform"
        leaveFrom="translate-x-0"
        leaveTo={classNames(
          direction === 'left' ? 'translate-x-full' : '-translate-x-full',
        )}
        unmount={false}
        as="div"
        className={classNames(
          'fixed inset-y-0 z-20 bg-neutral-900 min-w-72 w-4/5 md:w-1/2',
          direction === 'left' ? 'right-0' : 'left-0',
        )}
      >
        {children}
      </Transition.Child>
    </Transition>
  );
}
