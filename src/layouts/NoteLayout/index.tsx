import React, { useEffect } from 'react';
import DesktopSidebar from './DesktopSidebar';
import { useLg } from '../../hooks/responsive';
import MobileSidebar from './MobileSidebar';
import { useSidebar } from '@/context/sidebar';
import MobileRibbon from './MobileRibbon';

export type NoteLayoutProps = {
  leftSidebarContent?: React.ReactNode;
  rightSidebarContent?: React.ReactNode;
};

const NoteLayout: React.FC<NoteLayoutProps> = ({
  children,
  leftSidebarContent,
  rightSidebarContent,
}) => {
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
    <main className="flex flex-row flex-1 min-h-0">
      {/* if animation is translate, overflow-x-hidden need to be added to remove scrollbar during animation, */}
      {/* All items in row will take the largest height of them by default. */}
      {isLg ? (
        <DesktopSidebar
          className="border-l border-brand-grey"
          direction="right"
          isShowing={desktopLeftSidebar}
          onToggle={() => dispatch({ type: 'TOGGLE_DESKTOP_LEFT_SIDEBAR' })}
        >
          {leftSidebarContent}
        </DesktopSidebar>
      ) : (
        <MobileSidebar
          direction="right"
          isShowing={mobileSidebar === 'left'}
          onClose={() => dispatch({ type: 'CLOSE_MOBILE_LEFT_SIDEBAR' })}
        >
          {leftSidebarContent}
        </MobileSidebar>
      )}
      {/* https://www.w3.org/TR/css-flexbox-1/#min-size-auto */}
      <article className="flex-1 min-w-0 bg-background-darker lg:border lg:border-brand-grey lg:overflow-y-auto">
        {!isLg && (
          <MobileRibbon
            onLeftSidebarClick={() =>
              dispatch({ type: 'OPEN_MOBILE_LEFT_SIDEBAR' })
            }
            onRightSidebarClick={() =>
              dispatch({ type: 'OPEN_MOBILE_RIGHT_SIDEBAR' })
            }
          />
        )}
        <div className="flex flex-col max-w-4xl mx-auto">{children}</div>
      </article>
      {isLg ? (
        <DesktopSidebar
          className="border-r border-brand-grey"
          direction="left"
          isShowing={desktopRightSidebar}
          onToggle={() => dispatch({ type: 'TOGGLE_DESKTOP_RIGHT_SIDEBAR' })}
        >
          {rightSidebarContent}
        </DesktopSidebar>
      ) : (
        <MobileSidebar
          direction="left"
          isShowing={mobileSidebar === 'right'}
          onClose={() => dispatch({ type: 'CLOSE_MOBILE_RIGHT_SIDEBAR' })}
        >
          {rightSidebarContent}
        </MobileSidebar>
      )}
    </main>
  );
};

export default NoteLayout;
