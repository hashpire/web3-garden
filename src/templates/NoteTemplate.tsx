import React from 'react';
import NoteLayout from '../components/layouts/NoteLayout';
import { PageProps } from 'gatsby';
import Seo from '../components/Seo';

export type NoteTemplatePageContext = {
  id: string;
  html: string;
};

export default function NoteTemplate({ pageContext }: PageProps<{}, NoteTemplatePageContext>) {
  const { html } = pageContext;

  return (
    <NoteLayout>
      <Seo title="Note" />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </NoteLayout>
  );
}
