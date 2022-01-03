import React from 'react';
import LeftSidebarSvg from '@icons/left-sidebar.inline.svg';
import RightSidebarSvg from '@icons/right-sidebar.inline.svg';

type MobileRibbonProps = {
  onLeftSidebarClick: () => void;
  onRightSidebarClick: () => void;
};

export default function MobileRibbon({
  onLeftSidebarClick,
  onRightSidebarClick,
}: MobileRibbonProps) {
  return (
    <div className="flex items-center justify-between h-16 px-4 py-2">
      <div
        className="flex items-center justify-center w-12 h-12 cursor-pointer text-neutral-500 hover:text-primary"
        onClick={onLeftSidebarClick}
      >
        <LeftSidebarSvg className="w-7 h-7 " />
      </div>
      <div
        className="flex items-center justify-center w-12 h-12 cursor-pointer text-neutral-500 hover:text-primary"
        onClick={onRightSidebarClick}
      >
        <RightSidebarSvg className="w-7 h-7 " />
      </div>
    </div>
  );
}
