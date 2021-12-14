import React from 'react';
import SectionHeader from '../../../components/SectionHeader';
import FeaturedCard from '../../../components/cards/FeaturedCard';
import type { FeaturedCardProps } from '../../../components/cards/FeaturedCard';

type FeaturedSectionProps = {
  notes: Array<FeaturedCardProps>;
};

export default function FeaturedSection({ notes }: FeaturedSectionProps) {
  if (notes.length === 0) return null;

  return (
    <section>
      <SectionHeader title="Featured" />
      <div className="grid grid-cols-1 gap-9 md:grid-cols-2 mt-10">
        {notes.map((note, index) => {
          return <FeaturedCard key={index} {...note} className="m-auto" />;
        })}
      </div>
    </section>
  );
}
