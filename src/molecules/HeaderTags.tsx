import Head from "next/head";
import React, { FunctionComponent } from "react";
import { defineMessages, useIntl } from "react-intl";

const messages = defineMessages({
  titleFix: {
    id: "head.title.fix",
    defaultMessage: "{title} - Next.js Rest Boilerplate",
  },
});

const formatImageUrl = (url: string): string => {
  // This is for Gatsby
  if (url.startsWith("https:")) {
    return url;
  }

  return `https:${url}`;
};

type TagsLocation = {
  lon: number;
  lat: number;
};

export interface HeaderTagsType {
  title: string;
  description: string;
  image?: string;
  location?: TagsLocation;
  placename?: string;
  lang?: string;
  keywords?: string[];
  hideFix?: boolean;
}

export const HeaderTags: FunctionComponent<HeaderTagsType> = ({
  title,
  description,
  image,
  location,
  placename,
  keywords,
  hideFix,
}) => {
  const intl = useIntl();

  const formattedTitle = hideFix
    ? title
    : intl.formatMessage(messages.titleFix, { title });

  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta property="og:type" key="og:type" content="website" />
      <meta
        name="viewport"
        key="viewport"
        content="initial-scale=1.0, width=device-width"
      />

      <title>{formattedTitle}</title>
      <meta name="title" key="title" content={formattedTitle} />
      <meta property="og:title" key="og:title" content={formattedTitle} />

      <meta name="description" key="description" content={description} />
      <meta
        property="og:description"
        key="og:description"
        content={description}
      />

      {image && (
        <meta
          property="og:image"
          key="og:image"
          content={formatImageUrl(image)}
        />
      )}

      {keywords && (
        <meta name="keywords" key="keywords" content={keywords?.join(", ")} />
      )}
      {location && (
        <meta
          property="geo.position"
          key="geo.position"
          content={`${location?.lat}; ${location?.lon}`}
        />
      )}
      {placename && (
        <meta name="geo.placename" key="geo.placename" content={placename} />
      )}
    </Head>
  );
};
