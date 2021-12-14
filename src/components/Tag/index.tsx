import React from 'react';
import classNames from 'classnames';

type TagProps = {
  name: string;
  className?: string;
};

export default function Tag({ name, className }: TagProps) {
  // const computedStyle = `${disabled ? 'border-neutral-500 text-neutral-500 bg-transparent cursor-default' : ''}`;

  return (
    <span
      className={classNames(
        'inline-flex items-center text-neutral-200 text-xs font-normal shadow-1 border',
        'bg-neutral-900 border-neutral-900 hover:border-primary hover:text-primary focus:border-primary-dark focus:outline-btnFocus focus:text-primary-dark',
        `h-6 py-1 px-2.5 rounded-2xl `,
        className,
      )}
    >
      #{name}
    </span>
  );

  // return (
  //   <button
  //     className={`inline-flex items-center text-neutral-200 text-xs font-normal shadow-1 border ${
  //       size === 'small'
  //         ? `h-6 py-1 px-2.5 rounded-2xl ${computedStyle}`
  //         : `h-8 py-1.5 px-4 rounded-3xl ${computedStyle}`
  //     } ${className}`}
  //   >
  //     #{name}
  //   </button>
  // );
}
