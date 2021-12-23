import React from 'react';
import classNames from 'classnames';
import { Transition } from '@headlessui/react';

type DesktopPaneProps = {
  className?: string;
  isShowing: boolean;
  children: React.ReactNode;
};

export default function DesktopPane({ className, isShowing, children }: DesktopPaneProps) {
  return (
    <Transition
      show={isShowing}
      unmount={false}
      as="aside"
      enter="transition-all ease-in-out duration-150"
      enterFrom="w-0"
      enterTo="w-72"
      entered="w-72"
      leave="transition-all ease-in-out duration-150"
      leaveFrom="w-72"
      leaveTo="w-0"
      className={classNames('w-72 h-full bg-background', className)}
    >
      {children}
    </Transition>
  );
}
