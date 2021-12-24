import React, { useEffect } from 'react';
import DesktopSidebar from './DesktopSidebar';
import CollapseLeftSvg from '@icons/collapse-left.inline.svg';
import CollapseRightSvg from '@icons/collapse-right.inline.svg';
import { useLg } from '../../hooks/responsive';
import MobileSidebar from './MobileSidebar';
import Pane from '@/components/Pane';
import { Link } from 'gatsby';
import { useSidebar } from '@/context/sidebar';
import LeftDesktopSidebarSvg from '@icons/left-pane.inline.svg';
import RightDesktopSidebarSvg from '@icons/right-pane.inline.svg';

export type NoteLayoutProps = {};

const NoteLayout: React.FC<NoteLayoutProps> = ({ children }) => {
  const isLg = useLg();

  const { state, dispatch } = useSidebar();
  const { mobileSidebar, desktopLeftSidebar, desktopRightSidebar } = state;

  // lock and unlock body scroll when menu overlay visible
  useEffect(() => {
    if (mobileSidebar) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [mobileSidebar]);

  return (
    <main className="flex flex-row flex-1 overflow-x-hidden">
      {/* overflow-x-hidden to remove scrollbar during animation */}
      {/* All items in row will take the largest height of them by default. */}
      {isLg ? (
        <DesktopSidebar isShowing={desktopLeftSidebar}>
          <Pane>Left Pane</Pane>
          <Pane>Left Pane</Pane>
          <Link to="/garden/post-1">test</Link>
        </DesktopSidebar>
      ) : (
        <MobileSidebar
          isShowing={mobileSidebar === 'left'}
          direction="right"
          onClose={() => dispatch({ type: 'CLOSE_MOBILE_LEFT_SIDEBAR' })}
        >
          <Link to="/garden/post-1">test</Link>
        </MobileSidebar>
      )}
      {isLg && (
        <button
          className="flex items-center h-full border-r border-brand-grey bg-neutral-900 hover:bg-brand-grey"
          onClick={() => dispatch({ type: 'TOGGLE_DESKTOP_LEFT_SIDEBAR' })}
        >
          {desktopLeftSidebar ? (
            <CollapseLeftSvg className="w-7 h-7 text-neutral-100" />
          ) : (
            <CollapseRightSvg className="w-7 h-7 text-neutral-100" />
          )}
        </button>
      )}
      {/* https://www.w3.org/TR/css-flexbox-1/#min-size-auto */}
      <article className="flex-1 min-w-0 bg-neutral-900 lg:overflow-y-auto">
        <div className="flex flex-col max-w-4xl mx-auto">
          <div className="flex justify-between p-2">
            <LeftDesktopSidebarSvg
              className="block text-neutral-500 w-9 h-9 hover:text-primary"
              onClick={() => dispatch({ type: 'OPEN_MOBILE_LEFT_SIDEBAR' })}
            />
            <RightDesktopSidebarSvg
              className="block text-neutral-500 w-9 h-9 hover:text-primary"
              onClick={() => dispatch({ type: 'OPEN_MOBILE_RIGHT_SIDEBAR' })}
            />
          </div>
          {children}
        </div>
      </article>
      {isLg && (
        <button
          className="flex items-center h-full border-l border-brand-grey bg-neutral-900 hover:bg-brand-grey"
          onClick={() => dispatch({ type: 'TOGGLE_DESKTOP_RIGHT_SIDEBAR' })}
        >
          {desktopRightSidebar ? (
            <CollapseRightSvg className="w-7 h-7 text-neutral-100" />
          ) : (
            <CollapseLeftSvg className="w-7 h-7 text-neutral-100" />
          )}
        </button>
      )}
      {isLg ? (
        <DesktopSidebar isShowing={desktopRightSidebar}>
          <span className="text-white">Right Pane</span>
        </DesktopSidebar>
      ) : (
        <MobileSidebar
          isShowing={mobileSidebar === 'right'}
          direction="left"
          onClose={() => dispatch({ type: 'CLOSE_MOBILE_RIGHT_SIDEBAR' })}
        >
          <span className="text-white">Right Pane</span>
        </MobileSidebar>
      )}
    </main>
  );
};

export default NoteLayout;
