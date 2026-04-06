import { LayoutService } from "@sitecore-content-sdk/nextjs";
import { createGraphQLClientFactory } from "@sitecore-content-sdk/nextjs/client";
import sitecoreConfig from "sitecore.config";

export const layoutService = new LayoutService({
  clientFactory: createGraphQLClientFactory({
    api: sitecoreConfig.api,
  }),
});