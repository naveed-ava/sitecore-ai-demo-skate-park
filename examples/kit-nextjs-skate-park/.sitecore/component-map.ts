// Below are built-in components that are available in the app, it's recommended to keep them as is

import { BYOCServerWrapper, NextjsContentSdkComponent, FEaaSServerWrapper } from '@sitecore-content-sdk/nextjs';
import { Form } from '@sitecore-content-sdk/nextjs';

// end of built-in components
import * as Title from 'src/components/title/Title';
import * as StructuredData from 'src/components/structured-data/StructuredData';
import * as RowSplitter from 'src/components/row-splitter/RowSplitter';
import * as RichText from 'src/components/rich-text/RichText';
import * as Promo from 'src/components/promo/Promo';
import * as PartialDesignDynamicPlaceholder from 'src/components/partial-design-dynamic-placeholder/PartialDesignDynamicPlaceholder';
import * as PageContent from 'src/components/page-content/PageContent';
import * as Navigation from 'src/components/navigation/Navigation';
import * as LinkList from 'src/components/link-list/LinkList';
import * as Image from 'src/components/image/Image';
import * as RelatedEvent from 'src/components/events/RelatedEvent';
import * as FeaturedEvent from 'src/components/events/FeaturedEvent';
import * as EventPromo from 'src/components/events/EventPromo';
import * as EventInfo from 'src/components/events/EventInfo';
import * as EventDetails from 'src/components/events/EventDetails';
import * as ContentIntro from 'src/components/events/ContentIntro';
import * as SitecoreClientTest from 'src/components/events/layout-data-test/SitecoreClientTest';
import * as LayoutDataTest from 'src/components/events/layout-data-test/LayoutDataTest';
import * as LayoutContextDataUseSitecore from 'src/components/events/layout-data-test/LayoutContextDataUseSitecore';
import * as LayoutContextData from 'src/components/events/layout-data-test/LayoutContextData';
import * as ContentBlock from 'src/components/content-block/ContentBlock';
import * as Container from 'src/components/container/Container';
import * as ColumnSplitter from 'src/components/column-splitter/ColumnSplitter';

export const componentMap = new Map<string, NextjsContentSdkComponent>([
  ['BYOCWrapper', BYOCServerWrapper],
  ['FEaaSWrapper', FEaaSServerWrapper],
  ['Form', { ...Form, componentType: 'client' }],
  ['Title', { ...Title }],
  ['StructuredData', { ...StructuredData }],
  ['RowSplitter', { ...RowSplitter }],
  ['RichText', { ...RichText }],
  ['Promo', { ...Promo }],
  ['PartialDesignDynamicPlaceholder', { ...PartialDesignDynamicPlaceholder }],
  ['PageContent', { ...PageContent }],
  ['Navigation', { ...Navigation, componentType: 'client' }],
  ['LinkList', { ...LinkList }],
  ['Image', { ...Image }],
  ['RelatedEvent', { ...RelatedEvent }],
  ['FeaturedEvent', { ...FeaturedEvent, componentType: 'client' }],
  ['EventPromo', { ...EventPromo }],
  ['EventInfo', { ...EventInfo }],
  ['EventDetails', { ...EventDetails }],
  ['ContentIntro', { ...ContentIntro }],
  ['SitecoreClientTest', { ...SitecoreClientTest }],
  ['LayoutDataTest', { ...LayoutDataTest }],
  ['LayoutContextDataUseSitecore', { ...LayoutContextDataUseSitecore, componentType: 'client' }],
  ['LayoutContextData', { ...LayoutContextData, componentType: 'client' }],
  ['ContentBlock', { ...ContentBlock }],
  ['Container', { ...Container }],
  ['ColumnSplitter', { ...ColumnSplitter }],
]);

export default componentMap;
