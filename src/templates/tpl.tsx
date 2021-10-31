import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';

const Tpl = () => (
  <Layout>
    <Seo title="Tpl" />
    <h1>Hello from template</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default Tpl;
