import React, { useCallback, useMemo } from 'react';
import NoteLayout from '../layouts/NoteLayout';
import { PageProps } from 'gatsby';
import Seo from '../components/Seo';
import TableOfContents from '@/components/TableOfContents';
import LinksPane from '@/components/LinksPane';
import { useSidebar } from '@/context/sidebar';
import { useLg } from '@/hooks/responsive';

export type NoteTemplatePageContext = {
  title: string;
  id: string;
  html: string;
  headings: Array<{ depth: number; id: string; value: string }>;
  outboundReferences: Array<{
    id: string;
    fields?: { slug?: string; title?: string };
  }>;
  inboundReferences: Array<{
    id: string;
    fields?: { slug?: string; title?: string };
  }>;
  gardenBasePath: string;
};

export default function NoteTemplate({
  pageContext,
}: PageProps<{}, NoteTemplatePageContext>) {
  const {
    html,
    headings,
    inboundReferences,
    outboundReferences,
    gardenBasePath,
    title,
  } = pageContext;

  const isLg = useLg();
  const { dispatch } = useSidebar();

  const handleTOCItemClick = useCallback(() => {
    !isLg && dispatch({ type: 'CLOSE_MOBILE_LEFT_SIDEBAR' });
  }, [dispatch, isLg]);

  // memoized to prevent rerender when routing with hashtag, which causes sidebar animation flashing bug
  const memoizedValue = useMemo(
    () => (
      <NoteLayout
        leftSidebarContent={
          <>
            <TableOfContents
              headings={headings}
              onItemClick={handleTOCItemClick}
              className="h-full"
            />
          </>
        }
        rightSidebarContent={
          <>
            <LinksPane
              title="Incoming Links"
              links={inboundReferences.map((r) => ({
                title: r.fields?.title || '',
                url: `${gardenBasePath}/${r.fields?.slug}`,
              }))}
              className="h-1/2"
            />
            <LinksPane
              title="Outgoing Links"
              links={outboundReferences.map((r) => ({
                title: r.fields?.title || '',
                url: `${gardenBasePath}/${r.fields?.slug}`,
              }))}
              className="h-1/2"
            />
          </>
        }
      >
        <Seo title={title} />
        <div
          dangerouslySetInnerHTML={{ __html: html }}
          className="px-4 py-6 font-open-sans md:p-6 lg:px-12 lg:py-10"
        />
      </NoteLayout>
    ),
    [html, headings, inboundReferences, outboundReferences, handleTOCItemClick],
  );

  return memoizedValue;
}
