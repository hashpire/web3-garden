import React from 'react';
import NoteLayout from '../layouts/NoteLayout';
import { Link, PageProps } from 'gatsby';
import Seo from '../components/Seo';
import Pane from '@/components/Pane';
import TableOfContents from '@/components/TableOfContents';

export type NoteTemplatePageContext = {
  id: string;
  html: string;
  headings: Array<{ depth: number; id: string; value: string }>;
};

// TODO: title + content for sidebar
export default function NoteTemplate({ pageContext }: PageProps<{}, NoteTemplatePageContext>) {
  const { html, headings } = pageContext;

  return (
    <NoteLayout
      leftSidebarContent={
        <>
          <TableOfContents headings={headings} />
          <Pane title="Table of Contents">Left Pane</Pane>
          <Link to="/garden/post-1">test</Link>
        </>
      }
      rightSidebarContent={
        <>
          <Pane title="Table of Contents">Right Pane</Pane>
        </>
      }
    >
      <Seo title="Note" />
      <div dangerouslySetInnerHTML={{ __html: html }} className="px-4 py-6 font-open-sans md:p-6 lg:px-12 lg:py-10" />
    </NoteLayout>
  );
}
