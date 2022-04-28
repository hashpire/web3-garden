import React from 'react';
import SearchSvg from '@icons/search.inline.svg';
import DiscussSvg from '@icons/discuss.inline.svg';
import SearchInput from '@/components/SearchInput';
import classNames from 'classnames';

type LinkToDiscussProps = {
  className?: string;
};

const LinkToDiscuss: React.FC<LinkToDiscussProps> = ({ className }) => {
  return (
    <ul className={classNames('space-x-4 flex', className)}>
      <li>
        <label className="flex justify-center rounded-full lg:hidden bg-background w-9 h-9">
          <SearchSvg className="w-9 h-9 text-neutral-200" />
        </label>
        <SearchInput className="hidden lg:block" />
      </li>
      <li>
        <a
          target="_blank"
          href="https://discuss.hashpire.io/"
          className="text-gray-400"
          rel="noreferrer"
        >
          <label className="flex items-center justify-center border rounded-full cursor-pointer hover:text-primary hover:border-primary lg:px-3 text-neutral-400 lg:w-32 border-neutral-400 w-9 h-9">
            <DiscussSvg className="w-9 h-9" />
            <span className="flex-grow hidden text-sm font-semibold lg:block">
              Discuss
            </span>
          </label>
        </a>
      </li>
    </ul>
  );
};

export default LinkToDiscuss;
