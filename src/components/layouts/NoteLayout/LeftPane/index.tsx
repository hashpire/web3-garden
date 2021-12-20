import React from 'react';
import classNames from 'classnames';

type LeftPaneProps = {
  className?: string;
};

export default function LeftPane({ className }: LeftPaneProps) {
  return <aside className={classNames('', className)}>Left</aside>;
}
