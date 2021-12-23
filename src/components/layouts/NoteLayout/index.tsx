import React, { useEffect, useState } from 'react';
import Header from '../../Header';
import DesktopPane from './DesktopPane';
import { useLg } from '../../../hooks/responsive';
import MobilePane from './MobilePane';

export type NoteLayoutProps = {};

const NoteLayout: React.FC<NoteLayoutProps> = ({ children }) => {
  const isLg = useLg();
  const [mobilePane, setMobilePane] = useState<'left' | 'right' | null>(null);
  const [leftPaneVisible, setLeftPaneVisbile] = useState<boolean>(true);
  const [rightPaneVisible, setRightPaneVisible] = useState<boolean>(true);

  // lock and unlock body scroll when menu overlay visible
  useEffect(() => {
    if (mobilePane) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [mobilePane]);

  return (
    <div className="flex flex-col min-h-screen bg-background lg:h-screen">
      <Header siteTitle={`Garden`} />
      {/* overflow-x-hidden to remove scrollbar during animation */}
      <div className="flex flex-row flex-1 overflow-x-hidden border-t lg:overflow-y-hidden border-brand-grey">
        {/* All items in row will take the largest height of them by default. */}
        {isLg ? (
          <DesktopPane isShowing={leftPaneVisible}>test</DesktopPane>
        ) : (
          <MobilePane isShowing={mobilePane === 'left'} direction="right" onClose={() => setMobilePane(null)}>
            <div>Left Pane</div>
          </MobilePane>
        )}
        {/* https://www.w3.org/TR/css-flexbox-1/#min-size-auto */}
        <main className="flex flex-col flex-1 min-w-0 lg:border-l lg:border-r lg:overflow-y-auto bg-background-darker">
          {isLg && <button onClick={() => setLeftPaneVisbile((isShowing) => !isShowing)}>Left</button>}
          {isLg && <button onClick={() => setRightPaneVisible((isShowing) => !isShowing)}>Right</button>}
          {!isLg && <button onClick={() => setMobilePane((value) => (value ? null : 'left'))}>Mobile Left</button>}
          {!isLg && <button onClick={() => setMobilePane((value) => (value ? null : 'right'))}>Mobile Right</button>}
          {children}
        </main>
        {isLg ? (
          <DesktopPane isShowing={rightPaneVisible}>test</DesktopPane>
        ) : (
          <MobilePane isShowing={mobilePane === 'right'} direction="left" onClose={() => setMobilePane(null)}>
            <div className="bg-blue-500">Right Pane</div>
          </MobilePane>
        )}
      </div>
    </div>
  );
};

export default NoteLayout;
