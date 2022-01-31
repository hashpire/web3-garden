import React from 'react';

type BadgeProps = {
  title: string;
};

export default function Badge({ title }: BadgeProps) {
  return (
    <span className="inline-block h-6 px-2 py-1 text-xs font-normal border bg-primary bg-opacity-20 border-primary shadow-1 rounded-2xl text-primary">
      {title}
    </span>
  );
}
