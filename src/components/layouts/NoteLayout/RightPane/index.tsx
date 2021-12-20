import React from 'react';
import classNames from 'classnames';

type RightPaneProps = {
  className?: string;
};

export default function RightPane({ className }: RightPaneProps) {
  return <aside className={classNames('', className)}>right</aside>;
}
