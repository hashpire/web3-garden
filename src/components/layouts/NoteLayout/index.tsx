import React from 'react';
import Header from '../../Header';
import LeftPane from './LeftPane';
import RightPane from './RightPane';

export type NoteLayoutProps = {
  // leftPane?: React.ReactNode;
};

const NoteLayout: React.FC<NoteLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen bg-background">
      <Header siteTitle={`Garden`} />
      <div className="flex flex-row flex-1 overflow-hidden border-t border-brand-grey">
        <LeftPane className="w-1/5 bg-background" />
        <main className="flex flex-col flex-1 overflow-y-auto border-l border-r bg-background-darker border-brand-grey">
          {children}
        </main>
        <RightPane className="w-1/5 bg-background" />
      </div>
    </div>
  );
};

export default NoteLayout;
