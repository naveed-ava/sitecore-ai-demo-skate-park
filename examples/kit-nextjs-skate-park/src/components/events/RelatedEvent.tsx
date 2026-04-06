import { Text, Item, RouteData } from "@sitecore-content-sdk/nextjs";
import { ComponentProps } from "lib/component-props";
import { BaseContentFields } from "lib/component-props/events";
import NextLink from "next/link";
import { JSX } from "react";

type RelatedEventItem = Item &
  BaseContentFields & {
    url: string;
  };

interface Fields {
  RelatedEvents: RelatedEventItem[];
}

type RelatedEventsFields = {
  fields: Fields;
};

type EventRouteData = RouteData & RelatedEventsFields;

export const Default = ({ page, params }: ComponentProps): JSX.Element => {
  const fields = (page?.layout?.sitecore?.route as EventRouteData).fields;
  const id = params?.RenderingIdentifier;

  return (
    <div
      className={`component related-events ${params?.styles}`}
      id={id ? id : undefined}
    >
      <div className="component-content">
        <div className="bg-rose-100 text-font-medium">
          <h4>Related events:</h4>
          <ul>
            {fields?.RelatedEvents?.map((value, index) => (
              <li key={index}>
                <NextLink href={value.url} className="alert-link">
                  <Text field={value.fields.Title} editable={false} />
                </NextLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
