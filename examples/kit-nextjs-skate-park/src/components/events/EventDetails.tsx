import {
  Item,
  DateField,
  Field,
  Text,
  RouteData,
} from "@sitecore-content-sdk/nextjs";
import { ComponentProps } from "lib/component-props";
import { JSX } from "react";

interface OptionItem extends Item {
  fields: {
    Text: Field<string>;
  };
}

interface Fields {
  EventLocation: OptionItem;
  HolidayTypes: OptionItem[];
  EventDate: Field<string>;
  EventDuration: Field<number>;
  HideEventDate: Field<boolean>;
}

type EventDetailsRouteData = RouteData & {
  fields: Fields;
};

export const Default = ({ page, params }: ComponentProps): JSX.Element => {
  const event = page?.layout?.sitecore?.route as EventDetailsRouteData;
  const id = params?.RenderingIdentifier;
  const fields = event.fields;
  return (
    <div
      className={`component content ${params?.styles}`}
      id={id ? id : undefined}
    >
      <div className="bg-sky-200 text-font-medium">
        <h4>Event details</h4>
        <h5>
          Location:
          {fields?.EventLocation && (
            <Text field={fields.EventLocation.fields.Text} editable={false} />
          )}
        </h5>
        <h5 className="mt-1">Holiday type:</h5>
        {fields?.HolidayTypes && (
          <ul>
            {fields.HolidayTypes.map((value, index) => (
              <li className="small" key={index}>
                {value.displayName}
              </li>
            ))}
          </ul>
        )}
        {fields?.HideEventDate && (
          <h5>
            Date:
            <DateField
              field={fields?.EventDate}
              render={(date) => <span>{date && date.toDateString()}</span>}
            />
          </h5>
        )}
        <h5 className="mt-1">
          Duration:
          <Text field={fields?.EventDuration} /> days
        </h5>
      </div>
    </div>
  );
};
