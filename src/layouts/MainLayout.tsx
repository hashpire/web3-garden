import React from 'react';

type MainLayoutProps = {};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return <main className="flex-1">{children}</main>;
};

export default MainLayout;
