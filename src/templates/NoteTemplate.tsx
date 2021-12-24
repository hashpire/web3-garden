import React from 'react';
import NoteLayout from '../layouts/NoteLayout';
import { PageProps } from 'gatsby';
import Seo from '../components/Seo';

export type NoteTemplatePageContext = {
  id: string;
  html: string;
};

// TODO: title + content for sidebar
export default function NoteTemplate({ pageContext }: PageProps<{}, NoteTemplatePageContext>) {
  const { html } = pageContext;

  return (
    <NoteLayout>
      <Seo title="Note" />
      <div dangerouslySetInnerHTML={{ __html: html }} className="px-4 py-6 font-open-sans md:p-6 lg:px-12 lg:py-10" />
    </NoteLayout>
  );
}
