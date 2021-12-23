import React from 'react';
import { GatsbyBrowser } from 'gatsby';
import PageLayout from '../layouts/PageLayout';

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({ element }) => {
  return <PageLayout>{element}</PageLayout>;
};
