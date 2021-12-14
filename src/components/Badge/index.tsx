import React from 'react';

type BadgeProps = {
  title: string;
};

export default function Badge({ title }: BadgeProps) {
  return (
    <span className="inline-block h-6 px-2 py-1 bg-accent-focus bg-opacity-20 border border-accent shadow-1 rounded-2xl text-xs font-normal text-accent">
      {title}
    </span>
  );
}
