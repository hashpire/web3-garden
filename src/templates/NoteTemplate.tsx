import React, { useCallback, useMemo } from 'react';
import NoteLayout from '../layouts/NoteLayout';
import { navigate, PageProps } from 'gatsby';
import Seo from '../components/Seo';
import TableOfContents from '@/components/TableOfContents';
import LinksPane from '@/components/LinksPane';
import { useSidebar } from '@/context/sidebar';
import { useLg } from '@/hooks/responsive';
import LinkInSvg from '@/icons/link-in.inline.svg';
import LinkOutSvg from '@/icons/link-out.inline.svg';
import scrollTo from 'gatsby-plugin-smoothscroll';

export type NoteTemplatePageContext = {
  title: string;
  id: string;
  html: string;
  headings: Array<{ depth: number; id: string; value: string }>;
  outboundReferences: Array<{ url: string; title: string }>;
  inboundReferences: Array<{ url: string; title: string }>;
};

export default function NoteTemplate({
  pageContext,
}: PageProps<{}, NoteTemplatePageContext>) {
  const { html, headings, inboundReferences, outboundReferences, title } =
    pageContext;

  const isLg = useLg();
  const { dispatch } = useSidebar();

  const handleTOCItemClick = useCallback(
    (id: string) => {
      !isLg && dispatch({ type: 'CLOSE_MOBILE_LEFT_SIDEBAR' });
      scrollTo(`#${id}`);
      history.pushState(null, '', `#${id}`);
      // TODO: respect “PREFERS REDUCED MOTION”
      // navigate(`#${id}`);
    },
    [dispatch, isLg],
  );

  const handleLinkClick = useCallback(
    (url: string) => {
      if (isLg) {
        navigate(url);
      } else {
        dispatch({ type: 'CLOSE_MOBILE_RIGHT_SIDEBAR' });
        setTimeout(() => navigate(url), 300);
      }
    },
    [dispatch, isLg],
  );

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
              links={inboundReferences}
              className="h-1/2"
              icon={<LinkInSvg className="w-6 h-6 text-neutral-400" />}
              onLinkClick={handleLinkClick}
            />
            <LinksPane
              title="Outgoing Links"
              links={outboundReferences}
              className="h-1/2"
              icon={<LinkOutSvg className="w-6 h-6 text-neutral-400" />}
              onLinkClick={handleLinkClick}
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
    [
      headings,
      title,
      html,
      inboundReferences,
      outboundReferences,
      handleTOCItemClick,
      handleLinkClick,
    ],
  );

  return memoizedValue;
}
