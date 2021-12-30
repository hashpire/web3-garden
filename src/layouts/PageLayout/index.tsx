import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { useLg } from '@/hooks/responsive';
import classNames from 'classnames';
import React from 'react';

type PageLayoutProps = {
  children?: React.ReactNode;
  path: string;
};

export default function PageLayout({ children, path }: PageLayoutProps) {
  const isLg = useLg();
  const fillViewPort = isLg && !!path.match(/^\/garden/);
  return (
    <div
      className={classNames(
        'flex flex-col min-h-screen bg-background-darker',
        fillViewPort && 'h-screen',
      )}
    >
      <Header />
      {children}
      {!fillViewPort && <Footer />}
    </div>
  );
}
