/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Header from '../Header';
import Footer from '../Footer';

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
    <div className="flex flex-col min-h-screen bg-primary-light">
      <Header siteTitle={data.site?.siteMetadata?.title || `Title`} />
      <div
        // style={{
        //   margin: `0 auto`,
        //   maxWidth: 960,
        //   padding: `0 1.0875rem 1.45rem`,

        // }}
        className="flex-grow px-4 py-6 md:p-6 lg:p-9"
      >
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
