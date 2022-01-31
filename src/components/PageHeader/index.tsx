import React from 'react';
import classNames from 'classnames';

type PageHeaderProps = {
  title: string;
  className?: string;
};

export default function PageHeader({ title, className }: PageHeaderProps) {
  return (
    <h1
      className={classNames(
        'text-3xl font-semibold text-neutral-100 underline decoration-4 decoration-primary underline-offset-8 lg:text-4xl',
        className,
      )}
    >
      {title}
    </h1>
  );
}
