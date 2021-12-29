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
      <ul className="flex flex-col space-y-2">
        {links.map((link, index) => {
          return (
            <li key={index}>
              <Link
                to={link.url}
                className="flex items-center h-full text-neutral-400 hover:text-primary"
                activeClassName="navbar-active"
              >
                <span className="text-sm font-normal"> {link.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </Pane>
  );
}
