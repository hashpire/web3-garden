import React from 'react';
import classNames from 'classnames';
import ListCard from '../../../components/cards/ListCard';
import SectionHeader from '../../../components/SectionHeader';
import { ContributorListProps } from '@/components/ContributorList';
import { IGatsbyImageData } from 'gatsby-plugin-image';

type ListSectionProps = {
  className?: string;
  title?: string;
  notes: Array<{
    id: string;
    title: string;
    url: string;
    excerpt: string;
    coverImage?: IGatsbyImageData;
    contributors: ContributorListProps['contributors'];
  }>;
};

export default function ListSection({ notes, className, title }: ListSectionProps) {
  return (
    <section className={classNames(className)}>
      {title && <SectionHeader title={title} className="mb-10" />}
      <div className="space-y-16">
        {notes.map(({ id, title, url, excerpt, coverImage, contributors }) => {
          return (
            <ListCard
              key={id}
              url={url}
              title={title}
              excerpt={excerpt}
              coverImage={coverImage}
              contributors={contributors}
              publishedAt="Aug 20, 2021"
            />
          );
        })}
      </div>
    </section>
  );
}
