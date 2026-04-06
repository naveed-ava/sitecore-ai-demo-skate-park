"use client";
import { useSitecore } from "@sitecore-content-sdk/nextjs";
import { ComponentWithContextProps } from "lib/component-props";
import { JSX } from "react";

const LayoutContextData = (props: ComponentWithContextProps): JSX.Element => {
  const { page } = useSitecore();
  const sitecoreContext = page?.layout?.sitecore?.context;
  const sitecoreRoute = page?.layout?.sitecore?.route;

  const id = props.params?.RenderingIdentifier;

  return (
    <div
      className={`component layout-context-data ${props.params?.styles}`}
      id={id ? id : undefined}
    >
      <div className="component-content">
        <div>
          <h2>Layout Context Data useSitecore</h2>
          <ul>
            <li>Language:{sitecoreContext.language}</li>
            <li>Page Editing:{sitecoreContext.pageEditing?.toString()}</li>
            <li>Page State:{sitecoreContext.pageState}</li>
            <li>Site:{sitecoreContext.site?.name}</li>
          </ul>
          <pre style={{ maxHeight: "400px", overflow: "scroll" }}>
            {JSON.stringify(sitecoreRoute, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default LayoutContextData;