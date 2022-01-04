import React from 'react';
import { GatsbyBrowser } from 'gatsby';
import PageLayout from '../layouts/PageLayout';

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({
  element,
  props,
}) => {
  return <PageLayout path={props.path}>{element}</PageLayout>;
};
