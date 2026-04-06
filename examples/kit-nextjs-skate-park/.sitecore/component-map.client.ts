// Client-safe component map for App Router

import { BYOCClientWrapper, NextjsContentSdkComponent, FEaaSClientWrapper } from '@sitecore-content-sdk/nextjs';
import { Form } from '@sitecore-content-sdk/nextjs';

import * as Navigation from 'src/components/navigation/Navigation';
import * as FeaturedEvent from 'src/components/events/FeaturedEvent';
import * as LayoutContextDataUseSitecore from 'src/components/events/layout-data-test/LayoutContextDataUseSitecore';
import * as LayoutContextData from 'src/components/events/layout-data-test/LayoutContextData';

export const componentMap = new Map<string, NextjsContentSdkComponent>([
  ['BYOCWrapper', BYOCClientWrapper],
  ['FEaaSWrapper', FEaaSClientWrapper],
  ['Form', Form],
  ['Navigation', { ...Navigation }],
  ['FeaturedEvent', { ...FeaturedEvent }],
  ['LayoutContextDataUseSitecore', { ...LayoutContextDataUseSitecore }],
  ['LayoutContextData', { ...LayoutContextData }],
]);

export default componentMap;
