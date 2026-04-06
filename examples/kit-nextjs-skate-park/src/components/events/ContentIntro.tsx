import { Text, Image } from "@sitecore-content-sdk/nextjs";
import { ComponentProps } from "lib/component-props";
import { EventRouteData } from "lib/component-props/events";
import { JSX } from "react";

export const Default = ({ params, page }: ComponentProps): JSX.Element => {
  const id = params?.RenderingIdentifier;
  const event = page?.layout?.sitecore?.route as EventRouteData;

  if (!(event?.fields && event?.fields.Title && event?.fields.Intro)) {
    return (
      <div
        className={`component content ${params?.styles}`}
        id={id ? id : undefined}
      >
        <section>[Content Intro]</section>
      </div>
    );
  }
  return (
    <div
      className={`component content ${params?.styles}`}
      id={id ? id : undefined}
    >
      <section>
        <h1>
          <Text field={event.fields.Title}></Text>
        </h1>

        <div className="lead">
          <Text field={event.fields.Intro}></Text>
        </div>
        <div>
          <Image
            field={event.fields.ContentImage}
            className="img-fluid"
            imageParams={{ mw: 1000, mh: 568 }}
          ></Image>
        </div>
      </section>
    </div>
  );
};
