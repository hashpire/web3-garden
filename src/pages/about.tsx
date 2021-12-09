import * as React from 'react';
import { PageProps, Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';

const AboutPage: React.FC<PageProps<GatsbyTypes.AboutPageQuery>> = ({ data, path }) => (
  <Layout>
    <Seo title="About Page" />
    <h1>About</h1>
    <p>{`You're currently on the page "${path}" which was built on ${data.site?.buildTime || 'NAN'}`}</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default AboutPage;

export const query = graphql`
  query AboutPage {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`;
