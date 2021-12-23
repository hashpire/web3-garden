import React, { useEffect, useState } from 'react';
import Header from '../../Header';
import DesktopPane from './DesktopPane';
import CollapsePane from '../../CollapsePane';
import { useLg, useXl } from '../../../hooks/responsive';
import MobilePane from './MobilePane';

export type NoteLayoutProps = {};

const NoteLayout: React.FC<NoteLayoutProps> = ({ children }) => {
  const isLg = useLg();
  const isXl = useXl();
  const [mobilePane, setMobilePane] = useState<'left' | 'right' | null>(null);
  const [leftPaneVisible, setLeftPaneVisbile] = useState<boolean>(isXl ? true : false);
  const [rightPaneVisible, setRightPaneVisible] = useState<boolean>(isXl ? true : false);

  // lock and unlock body scroll when menu overlay visible
  useEffect(() => {
    if (mobilePane) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [mobilePane]);

  return (
    <div className="flex flex-col min-h-screen lg:h-screen">
      <Header
        siteTitle={`Garden`}
        sidePane={{
          onLeftClick: () => setMobilePane((value) => (value ? null : 'left')),
          onRightClick: () => setMobilePane((value) => (value ? null : 'right')),
        }}
      />
      {/* overflow-x-hidden to remove scrollbar during animation */}
      <div className="flex flex-row flex-1 overflow-x-hidden lg:overflow-y-hidden">
        {/* All items in row will take the largest height of them by default. */}
        {!isLg && (
          <MobilePane isShowing={mobilePane === 'left'} direction="right" onClose={() => setMobilePane(null)}>
            <span className="text-white">Left Pane</span>
          </MobilePane>
        )}
        {isLg && (
          <DesktopPane isShowing={leftPaneVisible}>
            <span className="text-white">Left Pane</span>
          </DesktopPane>
        )}
        {isLg && (
          <CollapsePane
            direction={leftPaneVisible ? 'left' : 'right'}
            className="border-r border-brand-grey"
            onClick={() => setLeftPaneVisbile((isShowing) => !isShowing)}
          />
        )}
        <main className="flex flex-col flex-1 min-w-0 bg-neutral-900 lg:overflow-y-auto">
          <div className="max-w-4xl mx-auto">{children}</div>
        </main>
        {isLg && (
          <CollapsePane
            direction={rightPaneVisible ? 'right' : 'left'}
            className="border-l border-brand-grey"
            onClick={() => setRightPaneVisible((isShowing) => !isShowing)}
          />
        )}
        {!isLg && (
          <MobilePane isShowing={mobilePane === 'right'} direction="left" onClose={() => setMobilePane(null)}>
            <span className="text-white">Right Pane</span>
          </MobilePane>
        )}
        {isLg && (
          <DesktopPane isShowing={rightPaneVisible}>
            <span className="text-white">Right Pane</span>
          </DesktopPane>
        )}
      </div>
    </div>
  );
};

export default NoteLayout;
