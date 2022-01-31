import React, { useCallback, useEffect, useRef, useState } from 'react';
import LeftSidebarSvg from '@icons/left-sidebar.inline.svg';
import RightSidebarSvg from '@icons/right-sidebar.inline.svg';
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
      className="sticky z-10 flex items-center justify-between h-16 px-4 py-2 border-b -top-px bg-background-darker border-brand-grey"
      ref={ref}
    >
      <div
        className="flex items-center justify-center w-12 h-12 cursor-pointer text-neutral-500 hover:text-primary"
        onClick={onLeftSidebarClick}
      >
        <LeftSidebarSvg className="w-7 h-7 " />
      </div>
      {stuck && (
        <div
          className="flex items-center justify-center flex-1 h-full cursor-pointer text-neutral-500"
          onClick={scrollToTop}
        >
          <span>scroll to top</span>
        </div>
      )}
      <div
        className="flex items-center justify-center w-12 h-12 cursor-pointer text-neutral-500 hover:text-primary"
        onClick={onRightSidebarClick}
      >
        <RightSidebarSvg className="w-7 h-7 " />
      </div>
    </div>
  );
}
