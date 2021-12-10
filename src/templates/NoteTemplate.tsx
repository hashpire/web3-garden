import React from 'react';
import Layout from '../components/layouts/MainLayout';
import { PageProps } from 'gatsby';
import Seo from '../components/seo';

export type NoteTemplatePageContext = {
  id: string;
  html: string;
};

export default function NoteTemplate({ pageContext }: PageProps<{}, NoteTemplatePageContext>) {
  const { html } = pageContext;

  return (
    <Layout>
      <Seo title="Note" />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
}
