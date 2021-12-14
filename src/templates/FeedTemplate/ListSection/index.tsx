import React from 'react';
import classNames from 'classnames';
import ListCard from '../../../components/cards/ListCard';
import SectionHeader from '../../../components/SectionHeader';

type ListSectionProps = {
  className?: string;
  title?: string;
  notes: Array<{ id: string; title: string; url: string }>;
};

export default function ListSection({ notes, className, title }: ListSectionProps) {
  return (
    <section className={classNames(className)}>
      {title && <SectionHeader title={title} className="mb-10" />}
      <div className="space-y-16">
        {notes.map(({ id, title, url }) => {
          return (
            <ListCard
              key={id}
              url={url}
              // title="5 tips to create a modern app UI5 tips to create a modern app UI"
              title={title}
              description="Voluptate sunt do magna ad esse laborum fugiat. Labore ex mollit eiusmod Lorem commodo dolore et adipisicing elit. Lorem et sit nisi nostrud fugiat duis. Amet adipisicing qui adipisicing culpa anim ullamco consequat eiusmod cillum laboris eu enim. Sunt labore et cupidatat cillum cupidatat duis Lorem occaecat proident. Ut quis proident nostrud ullamco ea. Est amet sint non Lorem enim eiusmod adipisicing in dolor do.
Laborum do non commodo ipsum adipisicing elit. Incididunt Lorem velit aute sint elit amet veniam sint. Excepteur ipsum esse consectetur elit nulla reprehenderit incididunt do veniam eiusmod consectetur do voluptate Lorem. Enim aliquip cillum cillum ex ut commodo sint anim excepteur. Consequat enim occaecat non qui ipsum in ea commodo ad aute esse."
              coverImage="https://images.unsplash.com/photo-1564760055775-d63b17a55c44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1477&q=80"
              tags={[
                { name: 'elephant' },
                { name: 'animal' },
                { name: 'animal' },
                { name: 'animal' },
                { name: 'animal' },
                { name: 'animal' },
                { name: 'animal' },
                { name: 'animal' },
                { name: 'animal' },
                { name: 'animal' },
              ]}
              contributors={[
                {
                  name: 'Jonathan',
                  imageUrl:
                    'https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
                },
                {
                  name: 'Robert',
                  imageUrl:
                    'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
                },
                {
                  name: 'Mishale',
                  imageUrl:
                    'https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                },
                {
                  name: 'Bozo',
                  imageUrl:
                    'https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
                },
                {
                  name: 'Natacha',
                  imageUrl:
                    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
                },
                {
                  name: 'Robert',
                  imageUrl:
                    'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
                },
              ]}
              publishedAt="Aug 20, 2021"
            />
          );
        })}
      </div>
    </section>
  );
}
