import React from 'react';
import classNames from 'classnames';
import CollapseLeftSvg from '@icons/collapse-left.inline.svg';
import CollapseRightSvg from '@icons/collapse-right.inline.svg';

type CollapsePane = {
  direction: 'left' | 'right';
  className?: string;
  onClick: () => void;
};

const CollasePane: React.FC<CollapsePane> = ({ direction, className, onClick }) => {
  return (
    <button
      className={classNames(`h-full flex items-center bg-neutral-900 hover:bg-brand-grey`, className)}
      onClick={onClick}
    >
      {direction === 'left' ? (
        <CollapseLeftSvg className="w-7 h-7 text-neutral-100" />
      ) : (
        <CollapseRightSvg className="w-7 h-7 text-neutral-100" />
      )}
    </button>
  );
};

export default CollasePane;
