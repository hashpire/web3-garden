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
      <div className="flex flex-row flex-1 overflow-hidden">
        <LeftPane className="w-1/5" />
        <main className="flex flex-col flex-1 overflow-y-auto bg-sky-900">{children}</main>
        <RightPane className="w-1/5" />
      </div>
    </div>
  );
};

export default NoteLayout;
