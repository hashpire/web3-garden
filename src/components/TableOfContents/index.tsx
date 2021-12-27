import React, { useCallback, useMemo, useState } from 'react';
import TriangleDownSvg from '@icons/triangle-down.inline.svg';
import TriangleLeftSvg from '@icons/triangle-right.inline.svg';
import Pane from '../Pane';

type Headings = Array<{ depth: number; id: string; value: string }>;

type TreeItemProps = { title: string; children: React.ReactNode; id: string };

type TableOfContentsProps = {
  headings: Headings;
};

function TreeItem({ title, children, id }: TreeItemProps) {
  const [show, setShow] = useState(false);
  const toggleShow = useCallback(() => setShow((state) => !state), []);

  return (
    <div className="py-1">
      <a
        className="flex items-center py-0.5  pl-5 cursor-pointer opacity-50 hover:rounded text-neutral-200 hover:bg-primary hover:text-white"
        href={`#${id}`}
      >
        {children && (
          <div onClick={toggleShow} className="pl-1.5 -ml-5">
            {show ? <TriangleDownSvg className="w-2 h-2" /> : <TriangleLeftSvg className="w-2 h-2" />}
          </div>
        )}
        <span className="ml-2"> {title}</span>
      </a>
      {show && <div className="pl-4">{children}</div>}
    </div>
  );
}

function createTree(headings: Headings) {
  if (headings.length === 0) return null;

  // split headings into subtrees
  const items = [];
  let lastIndex = 0;

  for (let i = 1; i < headings.length; i++) {
    if (headings[i].depth <= headings[lastIndex].depth) {
      const subTree = createTree(headings.slice(lastIndex + 1, i));
      const { value: title, id } = headings[lastIndex];

      items.push(
        <TreeItem key={lastIndex} title={title} id={id}>
          {subTree}
        </TreeItem>,
      );
      lastIndex = i;
    }
  }

  const subTree = createTree(headings.slice(lastIndex + 1));
  const { value: title, id } = headings[lastIndex];
  items.push(
    <TreeItem key={lastIndex} title={title} id={id}>
      {subTree}
    </TreeItem>,
  );

  return items;
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  const tree = useMemo(() => createTree(headings), [headings]);

  return <Pane title="Table of Contents">{tree}</Pane>;
}
