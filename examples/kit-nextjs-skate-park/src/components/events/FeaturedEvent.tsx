"use client";
import {
  Text,
  Image,
  withDatasourceCheck,
  Link,
  LinkField,
} from "@sitecore-content-sdk/nextjs";
import { BaseContentFields } from "lib/component-props/events";
import { ComponentProps } from "lib/component-props";
import NextLink from "next/link";
import { JSX } from "react";

type FeaturedEventProps = ComponentProps &
  BaseContentFields & {
    fields: {
      FeaturedLink: LinkField;
    };
    params: {
      cssClass: string;
    };
  };

const NoImageFeatuedEvent = ({
  fields,
  params,
}: FeaturedEventProps): JSX.Element => {
  const id = params?.RenderingIdentifier;
  return (
    <div
      className={`component featured-event ${params?.styles}`}
      id={id ? id : undefined}
    >
      <div className="no-image card">
        <div className="card-body">
          <h5 className="card-title">
            <Text field={fields.Title} />
          </h5>
          <p className="card-text">
            <Text field={fields.Intro} />
          </p>
          <NextLink href="/" className={params.cssClass}>
            {params.message}
          </NextLink>
        </div>
      </div>
    </div>
  );
};
export const NoImage =
  withDatasourceCheck()<FeaturedEventProps>(NoImageFeatuedEvent);

const FeaturedEvent = ({ fields, params }: FeaturedEventProps): JSX.Element => {
  const id = params?.RenderingIdentifier;
  return (
    <div
      className={`component featured-event ${params?.styles}`}
      id={id ? id : undefined}
    >
      <div className="card">
        <Image field={fields.NavigationImage} className="img-fluid" />
        <div className="card-body">
          <h3 className="card-title">
            <Text field={fields.Title} />
          </h3>
          <p className="card-text">
            <Text field={fields.Intro} />
          </p>
          <Link
            field={fields.FeaturedLink || "/"}
            className={params.cssClass}
            editable={false}
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export const Default = withDatasourceCheck()<FeaturedEventProps>(FeaturedEvent);
