import React from 'react';
import { Link } from 'gatsby';
import CaretLeftSvg from '../../icons/caret-left.inline.svg';
import CaretRightSvg from '../../icons/caret-right.inline.svg';
import classNames from 'classnames';
import { createPageRange } from './utils';

type PaginationProps = {
  className?: string;
  currentPage: number;
  numPages: number;
  feedRootPath: string;
  feedBasePath: string;
  pageRange?: number;
};

export default function Pagination({
  currentPage,
  numPages,
  feedRootPath,
  feedBasePath,
  className,
  pageRange = 7,
}: PaginationProps) {
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage =
    currentPage - 1 === 1 ? feedRootPath : `${feedBasePath}/${currentPage - 1}`;
  const nextPage = `${feedBasePath}/${currentPage + 1}`;

  let caretLeft = (
    <CaretLeftSvg
      className={classNames('h-8 w-8', { 'text-neutral-500': isFirst })}
    />
  );
  if (!isFirst) {
    caretLeft = (
      <Link
        to={prevPage}
        rel="prev"
        className="block text-neutral-100 hover:opacity-80"
      >
        {caretLeft}
      </Link>
    );
  }

  let caretRight = (
    <CaretRightSvg
      className={classNames('h-8 w-8', { 'text-neutral-500': isLast })}
    />
  );
  if (!isLast) {
    caretRight = (
      <Link
        to={nextPage}
        rel="next"
        className="block text-neutral-100 hover:opacity-80"
      >
        {caretRight}
      </Link>
    );
  }

  return (
    <ul className={classNames('flex justify-center items-center', className)}>
      <li>{caretLeft}</li>
      {createPageRange(currentPage, numPages, pageRange).map((page, index) => {
        const pageLink = (
          <span className="text-sm font-semibold text-neutral-100">{page}</span>
        );

        return (
          <li key={`i-${index}`} className="mx-2.5">
            {typeof page === 'number' ? (
              <Link
                to={page === 1 ? feedRootPath : `${feedBasePath}/${page}`}
                className={classNames(
                  'flex items-center justify-center w-9 h-9',
                  'rounded-full border border-transparent hover:border-primary',
                  { 'border-primary bg-primary': page == currentPage },
                )}
              >
                {pageLink}
              </Link>
            ) : (
              pageLink
            )}
          </li>
        );
      })}
      <li>{caretRight}</li>
    </ul>
  );
}
