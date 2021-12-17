import React from 'react';
import classNames from 'classnames';
import ListCard from '../../../components/cards/ListCard';
import SectionHeader from '../../../components/SectionHeader';
import { ContributorListProps } from '@/components/ContributorList';

type ListSectionProps = {
  className?: string;
  title?: string;
  notes: Array<{
    id: string;
    title: string;
    url: string;
    excerpt: string;
    coverImage?: string;
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
              coverImage={
                coverImage ||
                'https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80'
              }
              contributors={contributors}
              publishedAt="Aug 20, 2021"
            />
          );
        })}
      </div>
    </section>
  );
}
