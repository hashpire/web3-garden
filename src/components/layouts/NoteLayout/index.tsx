import React, { useEffect, useState } from 'react';
import Header from '../../Header';
import DesktopSidebar from './DesktopSidebar';
import CollapseLeftSvg from '@icons/collapse-left.inline.svg';
import CollapseRightSvg from '@icons/collapse-right.inline.svg';
import { useLg, useXl } from '../../../hooks/responsive';
import MobileSidebar from './MobileSidebar';
import Pane from '@/components/Pane';
import { Link } from 'gatsby';

export type NoteLayoutProps = {};

const NoteLayout: React.FC<NoteLayoutProps> = ({ children }) => {
  const isLg = useLg();
  const isXl = useXl();
  const [mobileSidebar, setMobileSidebar] = useState<'left' | 'right' | null>(null);
  const [leftDesktopSidebarVisible, setLeftDesktopSidebarVisbile] = useState<boolean>(isXl ? true : false);
  const [rightDesktopSidebarVisible, setRightDesktopSidebarVisible] = useState<boolean>(isXl ? true : false);

  // lock and unlock body scroll when menu overlay visible
  useEffect(() => {
    if (mobileSidebar) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [mobileSidebar]);

  return (
    <div className="flex flex-col min-h-screen lg:h-screen">
      <Header
        siteTitle={`Garden`}
        sidePane={{
          onLeftClick: () => setMobileSidebar((value) => (value ? null : 'left')),
          onRightClick: () => setMobileSidebar((value) => (value ? null : 'right')),
        }}
      />
      {/* overflow-x-hidden to remove scrollbar during animation */}
      <div className="flex flex-row flex-1 overflow-x-hidden lg:overflow-y-hidden">
        {/* All items in row will take the largest height of them by default. */}
        {isLg ? (
          <DesktopSidebar isShowing={leftDesktopSidebarVisible}>
            <Pane>Left Pane</Pane>
            <Pane>Left Pane</Pane>
            <Link to="/garden/post-1">test</Link>
          </DesktopSidebar>
        ) : (
          <MobileSidebar isShowing={mobileSidebar === 'left'} direction="right" onClose={() => setMobileSidebar(null)}>
            <span className="text-white">Left Pane</span>
          </MobileSidebar>
        )}
        {isLg && (
          <button
            className="flex items-center h-full border-r border-brand-grey bg-neutral-900 hover:bg-brand-grey"
            onClick={() => setLeftDesktopSidebarVisbile((isShowing) => !isShowing)}
          >
            {leftDesktopSidebarVisible ? (
              <CollapseLeftSvg className="w-7 h-7 text-neutral-100" />
            ) : (
              <CollapseRightSvg className="w-7 h-7 text-neutral-100" />
            )}
          </button>
        )}
        {/* https://www.w3.org/TR/css-flexbox-1/#min-size-auto */}
        <main className="flex-1 min-w-0 bg-neutral-900 lg:overflow-y-auto">
          <div className="flex flex-col max-w-4xl mx-auto">{children}</div>
        </main>
        {isLg && (
          <button
            className="flex items-center h-full border-l border-brand-grey bg-neutral-900 hover:bg-brand-grey"
            onClick={() => setRightDesktopSidebarVisible((isShowing) => !isShowing)}
          >
            {rightDesktopSidebarVisible ? (
              <CollapseRightSvg className="w-7 h-7 text-neutral-100" />
            ) : (
              <CollapseLeftSvg className="w-7 h-7 text-neutral-100" />
            )}
          </button>
        )}
        {isLg ? (
          <DesktopSidebar isShowing={rightDesktopSidebarVisible}>
            <span className="text-white">Right Pane</span>
          </DesktopSidebar>
        ) : (
          <MobileSidebar isShowing={mobileSidebar === 'right'} direction="left" onClose={() => setMobileSidebar(null)}>
            <span className="text-white">Right Pane</span>
          </MobileSidebar>
        )}
      </div>
    </div>
  );
};

export default NoteLayout;
