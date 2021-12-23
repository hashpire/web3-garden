import React from 'react';
import classNames from 'classnames';
import { Transition } from '@headlessui/react';

type MobilePaneProps = {
  className?: string;
  isShowing: boolean;
  onClose?: () => void;
  direction: 'left' | 'right';
  children: React.ReactNode;
};

export default function MobilePane({ className, isShowing, onClose, direction, children }: MobilePaneProps) {
  return (
    <Transition show={isShowing} className={classNames(className)} unmount={false} as="aside">
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
        className="fixed inset-0"
        onClick={onClose}
      >
        <div className="w-full h-full bg-red-500 opacity-50"></div>
      </Transition.Child>
      {/* Sidebar Implementation via Translate */}
      <Transition.Child
        enter="transition ease-in-out duration-150 transform"
        enterFrom={classNames(direction === 'left' ? 'translate-x-full' : '-translate-x-full')}
        enterTo="translate-x-0"
        leave="transition ease-in-out duration-150 transform"
        leaveFrom="translate-x-0"
        leaveTo={classNames(direction === 'left' ? 'translate-x-full' : '-translate-x-full')}
        unmount={false}
        as="div"
        className={classNames('fixed inset-y-0 bg-green-500 w-80', direction === 'left' ? 'right-0' : 'left-0')}
      >
        {children}
      </Transition.Child>
      {/* Sidebar */}
      {/* <Transition.Child
        enter="transition-all ease-in-out duration-150"
        enterFrom="w-0"
        enterTo="w-80"
        entered="w-80"
        leave="transition-all ease-in-out duration-150"
        leaveFrom="w-80"
        leaveTo="w-0"
        unmount={false}
        as="div"
        className="fixed inset-y-0 right-0 bg-green-500 w-80 lg:static lg:inset-auto lg:h-full"
      >
        test
      </Transition.Child> */}
    </Transition>
  );
}
