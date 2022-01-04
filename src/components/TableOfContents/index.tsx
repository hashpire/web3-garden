import React, { useCallback, useMemo, useState } from 'react';
import TriangleDownSvg from '@icons/triangle-down.inline.svg';
import TriangleLeftSvg from '@icons/triangle-right.inline.svg';
import Pane from '../Pane';
import classNames from 'classnames';

export type Heading = { depth: number; id: string; value: string };

export type Headings = Array<Heading>;

export type TreeItemProps = {
  title: string;
  children: React.ReactNode;
  id: string;
  onClick?: (id: string) => void;
};

export type TableOfContentsProps = {
  headings: Headings;
  onItemClick?: TreeItemProps['onClick'];
};

function TreeItem({ title, children, id, onClick }: TreeItemProps) {
  const [show, setShow] = useState(false);
  const toggleShow = useCallback(() => setShow((state) => !state), []);
  const handleClick = useCallback(() => onClick && onClick(id), [onClick]);

  return (
    <div>
      <div className="flex items-center pl-6">
        {children && (
          <div onClick={toggleShow} className="-ml-6">
            <div className="flex items-center justify-center w-6 h-6 cursor-pointer text-neutral-400 hover:text-primary">
              {show ? (
                <TriangleDownSvg className="w-3.5 h-3.5" />
              ) : (
                <TriangleLeftSvg className="w-3.5 h-3.5" />
              )}
            </div>
          </div>
        )}
        <a
          className="ml-1 text-neutral-400 hover:text-primary "
          href={`#${id}`}
          onClick={handleClick}
        >
          <span className="text-sm"> {title}</span>
        </a>
      </div>
      <div className={classNames('pl-4 space-y-3 mt-3', !show && 'hidden')}>
        {children}
      </div>
    </div>
  );
}

function createTree({
  headings,
  onItemClick,
}: {
  headings: Headings;
  onItemClick?: TreeItemProps['onClick'];
}) {
  if (headings.length === 0) return null;

  // split headings into subtrees
  const items = [];
  let lastIndex = 0;

  for (let i = 1; i < headings.length; i++) {
    if (headings[i].depth <= headings[lastIndex].depth) {
      const subTree = createTree({
        headings: headings.slice(lastIndex + 1, i),
        onItemClick,
      });
      const { value: title, id } = headings[lastIndex];

      items.push(
        <TreeItem key={lastIndex} title={title} id={id} onClick={onItemClick}>
          {subTree}
        </TreeItem>,
      );
      lastIndex = i;
    }
  }

  const subTree = createTree({
    headings: headings.slice(lastIndex + 1),
    onItemClick,
  });
  const { value: title, id } = headings[lastIndex];
  items.push(
    <TreeItem key={lastIndex} title={title} id={id} onClick={onItemClick}>
      {subTree}
    </TreeItem>,
  );

  return items;
}

export default function TableOfContents({
  headings,
  onItemClick,
}: TableOfContentsProps) {
  const tree = useMemo(
    () => createTree({ headings, onItemClick }),
    [headings, onItemClick],
  );

  return (
    <Pane title="Table of Contents">
      <div className="space-y-3">{tree}</div>
    </Pane>
  );
}
