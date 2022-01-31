import React from 'react';
import { GatsbyBrowser } from 'gatsby';
import { SidebarProvider } from '../context/sidebar';

export const wrapRootElement: GatsbyBrowser['wrapRootElement'] = ({
  element,
}) => <SidebarProvider>{element}</SidebarProvider>;
