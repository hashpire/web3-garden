import React, { ReactElement, useCallback } from 'react';
import Pane from '@/components/Pane';
import classNames from 'classnames';

type LinksPaneProps = {
  title: string;
  links: Array<{ title: string; url: string }>;
  onLinkClick?: (url: string) => void;
  className?: string;
  icon: ReactElement;
};

type ReferenceLinkProps = {
  title: string;
  url: string;
  onClick?: (url: string) => void;
};

const ReferenceLink = ({ url, title, onClick }: ReferenceLinkProps) => {
  const handleClick = useCallback(() => {
    onClick && onClick(url);
  }, [onClick, url]);

  return (
    <span
      onClick={handleClick}
      className={classNames(
        'text-sm font-normal  text-neutral-400',
        onClick && 'cursor-pointer hover:text-primary',
      )}
    >
      {title}
    </span>
  );
};

export default function LinksPane({
  title,
  links,
  className,
  icon,
  onLinkClick,
}: LinksPaneProps) {
  return (
    <Pane title={title} className={className} icon={icon}>
      <ul className="flex flex-col space-y-3">
        {links.map((link, index) => {
          return (
            <li key={index}>
              <ReferenceLink {...link} onClick={onLinkClick} />
            </li>
          );
        })}
      </ul>
    </Pane>
  );
}
