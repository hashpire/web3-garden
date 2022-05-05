import React, { useCallback, useEffect, useRef, useState } from 'react';
import LeftPaneSvg from '@icons/left-pane.inline.svg';
import RightPaneSvg from '@icons/right-pane.inline.svg';
// import CopyLinkSvg from '@/icons/copy-link.inline.svg';
import { usePrefersReducedMotion } from '@/hooks/motion';

type MobileRibbonProps = {
  onLeftSidebarClick: () => void;
  onRightSidebarClick: () => void;
};

export default function MobileRibbon({
  onLeftSidebarClick,
  onRightSidebarClick,
}: MobileRibbonProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const scrollToTop = useCallback(() => {
    window.scroll({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  }, [prefersReducedMotion]);

  const [stuck, setStuck] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // const copyUrl = () => {
  //   // ref: https://blog.dadops.co/2021/03/17/copy-and-paste-in-a-react-app/
  //   const el = document.createElement('input');
  //   el.value = window.location.href;
  //   document.body.appendChild(el);
  //   el.select();
  //   document.execCommand('copy');
  //   document.body.removeChild(el);
  // };

  useEffect(() => {
    const cachedRef = ref.current;
    if (!cachedRef) return;
    const observer = new IntersectionObserver(
      ([e]) => setStuck(e.intersectionRatio < 1),
      { threshold: [1] },
    );
    observer.observe(cachedRef);
    return () => observer.unobserve(cachedRef);
  }, [ref]);

  // `sticky` and `-top-px` for IntersectionObserver
  // ref: https://css-tricks.com/how-to-detect-when-a-sticky-element-gets-pinned/

  return (
    <div
      className={`sticky z-10 flex items-center justify-between px-4 py-2 h-14 -top-px bg-background-darker ${
        stuck && 'border-b border-brand-grey'
      }`}
      ref={ref}
    >
      <div
        className="flex items-center justify-center w-12 h-12 cursor-pointer text-neutral-500 hover:text-primary"
        onClick={onLeftSidebarClick}
      >
        <LeftPaneSvg className="w-8 h-8" />
      </div>
      {stuck && (
        <div
          className="flex items-center justify-center flex-1 h-full px-2 cursor-pointer"
          onClick={scrollToTop}
        >
          <span className="block text-neutral-400">Scroll to top</span>
          {/* <label
            className="flex items-center justify-center rounded-full w-7 h-7 bg-background"
            onClick={copyUrl}
          >
            <CopyLinkSvg className="w-5 h-5 text-neutral-200" />
          </label> */}
        </div>
      )}
      <div
        className="flex items-center justify-center w-12 h-12 cursor-pointer text-neutral-500 hover:text-primary"
        onClick={onRightSidebarClick}
      >
        <RightPaneSvg className="w-8 h-8" />
      </div>
    </div>
  );
}
