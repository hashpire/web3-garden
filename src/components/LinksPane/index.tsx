import React from 'react';
import Pane from '@/components/Pane';
import { Link } from 'gatsby';

type LinksPaneProps = {
  title: string;
  links: Array<{ title: string; url: string }>;
};

export default function LinksPane({ title, links }: LinksPaneProps) {
  return (
    <Pane title={title}>
      <ul className="flex flex-col space-y-3">
        {links.map((link, index) => {
          return (
            <li key={index}>
              <Link
                to={link.url}
                className="flex text-sm font-normal text-neutral-400 hover:text-primary"
              >
                {link.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </Pane>
  );
}
