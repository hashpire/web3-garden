import React from 'react';
import classNames from 'classnames';

type RightPaneProps = {
  className?: string;
};

export default function RightPane({ className }: RightPaneProps) {
  return <aside className={classNames('w-1/5 bg-yellow-500', className)}>right</aside>;
}
