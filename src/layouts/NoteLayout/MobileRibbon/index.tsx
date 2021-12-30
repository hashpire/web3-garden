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
    <div className="flex justify-between p-2">
      <LeftSidebarSvg
        className="block text-neutral-500 w-9 h-9 hover:text-primary"
        onClick={onLeftSidebarClick}
      />
      <RightSidebarSvg
        className="block text-neutral-500 w-9 h-9 hover:text-primary"
        onClick={onRightSidebarClick}
      />
    </div>
  );
}
