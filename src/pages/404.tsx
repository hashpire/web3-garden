import React from 'react';
import { PageProps } from 'gatsby';
import Layout from '../layouts/MainLayout';
import Seo from '../components/Seo';

const NotFoundPage: React.FC<PageProps> = () => (
  <Layout>
    <Seo title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
);

export default NotFoundPage;
