/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react';
import classNames from 'classnames';
import { useStaticQuery, graphql } from 'gatsby';
import Header from '../components/Header';
import Footer from '../components/Footer';

type LayoutProps = {};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const data = useStaticQuery<GatsbyTypes.SiteTitleQueryQuery>(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="flex flex-col min-h-screen bg-background-darker">
      <Header siteTitle={data.site?.siteMetadata?.title || `Title`} />
      <div className={classNames('flex-grow')}>
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
