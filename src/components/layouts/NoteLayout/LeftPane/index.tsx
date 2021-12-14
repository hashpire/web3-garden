import React from 'react';
import classNames from 'classnames';

type LeftPaneProps = {
  className?: string;
};

export default function LeftPane({ className }: LeftPaneProps) {
  return <aside className={classNames('w-1/5 bg-yellow-500', className)}>Left</aside>;
}
