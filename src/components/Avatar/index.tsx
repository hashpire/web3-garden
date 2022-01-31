import React from 'react';
import classNames from 'classnames';

type AvatarProps = {
  src: string;
  alt: string;
  className?: string;
};

export default function Avatar({ className, src, alt }: AvatarProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={classNames(
        'w-7 h-7 rounded-full object-cover bg-background border border-neutral-100',
        className,
      )}
    />
  );
}
