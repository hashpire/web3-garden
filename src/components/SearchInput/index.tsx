import React from 'react';
import classNames from 'classnames';
import SearchSvg from '@icons/search.inline.svg';

type SearchInputProps = {
  className?: string;
};

const SearchInput: React.FC<SearchInputProps> = ({ className }) => {
  return (
    <label
      className={classNames(
        'flex relative items-center w-52 text-neutral-400',
        className,
      )}
    >
      <SearchSvg className="absolute w-9 h-9 left-2" />
      <input
        type="text"
        placeholder="Search"
        className="w-full pl-12 pr-4 font-normal outline-none bg-brand-grey h-9 rounded-3xl"
      />
    </label>
  );
};

export default SearchInput;
