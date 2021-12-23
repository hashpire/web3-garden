import React from 'react';
import LinkSvg from '@/icons/link.inline.svg';

type PaneProps = {
  children?: React.ReactNode;
};

export default function Pane({ children }: PaneProps) {
  return (
    <div className="bg-background">
      <div className="flex items-center px-4 py-3 bg-background-darker">
        <LinkSvg className="inline w-6 h-6 text-neutral-200" />
        <span className="ml-2 text-base font-semibold text-neutral-200">Relation to this page</span>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}