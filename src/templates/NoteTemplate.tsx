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
// import { usePrefersReducedMotion } from '@/hooks/motion';

export type NoteTemplatePageContext = {
  title: string;
  id: string;
  html: string;
  headings: Array<{ depth: number; id: string; value: string }>;
  outboundReferences: Array<{ url: string; title: string }>;
  inboundReferences: Array<{ url: string; title: string }>;
  metaImage?: string;
  metaDescription?: string;
};

export default function NoteTemplate({
  pageContext,
}: PageProps<{}, NoteTemplatePageContext>) {
  const {
    html,
    headings,
    inboundReferences,
    outboundReferences,
    title,
    metaImage,
    metaDescription,
  } = pageContext;

  const isLg = useLg();
  // const prefersReducedMotion = usePrefersReducedMotion();

  const { dispatch } = useSidebar();

  const handleTOCItemClick = useCallback(
    (id: string) => {
      !isLg && dispatch({ type: 'CLOSE_MOBILE_LEFT_SIDEBAR' });

      // TODO: Disabled because prefersReducedMotion causes sidebar to rerender, which causes animation to flash
      // if (prefersReducedMotion) {
      //   navigate(`#${id}`);
      // } else {
      scrollTo(`#${id}`);
      history.pushState(null, '', `#${id}`);
      // }
    },
    [
      dispatch,
      isLg,
      // prefersReducedMotion
    ],
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
        <Seo title={title} image={metaImage} description={metaDescription} />
        <div
          dangerouslySetInnerHTML={{ __html: html }}
          className="px-4 font-open-sans md:px-6 lg:px-12"
        />
      </NoteLayout>
    ),
    [
      headings,
      handleTOCItemClick,
      inboundReferences,
      handleLinkClick,
      outboundReferences,
      title,
      metaImage,
      metaDescription,
      html,
    ],
  );

  return memoizedValue;
}
