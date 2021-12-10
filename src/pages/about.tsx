import * as React from 'react';
import { PageProps, Link, graphql } from 'gatsby';
import Layout from '../components/layouts/MainLayout';
import Seo from '../components/seo';
import { StaticImage } from 'gatsby-plugin-image';

const AboutPage: React.FC<PageProps<GatsbyTypes.AboutPageQuery>> = ({ data, path }) => (
  <Layout>
    <Seo title="About Page" />
    <h1>About</h1>
    <h1 className="text-3xl font-bold underline">Hello world!</h1>
    <p>{`You're currently on the page "${path}" which was built on ${data.site?.buildTime || 'NAN'}`}</p>
    <div>
      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={['auto', 'webp', 'avif']}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
    </div>
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
