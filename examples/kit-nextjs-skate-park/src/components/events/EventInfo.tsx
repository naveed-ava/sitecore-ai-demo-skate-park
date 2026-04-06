import React, { JSX } from "react";
import {
  RichText as ContentSdkRichText,
  RichTextField,
  Text,
  TextField,
} from "@sitecore-content-sdk/nextjs";
import { ComponentProps } from "lib/component-props";

interface Fields {
  Title: TextField;
  Content: RichTextField;
  Intro: TextField;
}

type EventInfoProps = ComponentProps & {
  fields: Fields;
};

export const Default = ({
  params,
  fields,
  page,
}: EventInfoProps): JSX.Element => {
  const { styles, RenderingIdentifier: id } = params;

  const titleField =
    fields?.Title ?? (page.layout.sitecore.route?.fields?.Title as TextField);

  const contentField =
    fields?.Content ??
    (page.layout.sitecore.route?.fields?.Content as RichTextField);

  const introField =
    fields?.Intro ?? (page.layout.sitecore.route?.fields?.Intro as TextField);

  return (
    <div className={`component content ${styles}`} id={id}>
      <section>
        <h1>{titleField ? <Text field={titleField} /> : ""}</h1>
        <div>
          {contentField ? (
            <ContentSdkRichText field={contentField} />
          ) : (
            "[Event Info]"
          )}
        </div>
        <div>{introField ? <Text field={introField} /> : ""}</div>
      </section>
    </div>
  );
};
