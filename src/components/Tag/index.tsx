import React from 'react';
import classNames from 'classnames';

type TagProps = {
  name: string;
  className?: string;
};

export default function Tag({ name, className }: TagProps) {
  // const computedStyle = `${disabled ? 'border-neutral-3 text-neutral-3 bg-transparent cursor-default' : ''}`;

  return (
    <span
      className={classNames(
        'inline-flex items-center text-neutral-2 text-xs font-normal shadow-1 border',
        'bg-neutral-5 border-neutral-5 hover:border-accent hover:text-accent focus:border-accent-pressed focus:outline-btnFocus focus:text-accent-pressed',
        `h-6 py-1 px-2.5 rounded-2xl `,
        className,
      )}
    >
      #{name}
    </span>
  );

  // return (
  //   <button
  //     className={`inline-flex items-center text-neutral-2 text-xs font-normal shadow-1 border ${
  //       size === 'small'
  //         ? `h-6 py-1 px-2.5 rounded-2xl ${computedStyle}`
  //         : `h-8 py-1.5 px-4 rounded-3xl ${computedStyle}`
  //     } ${className}`}
  //   >
  //     #{name}
  //   </button>
  // );
}
