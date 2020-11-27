import fs from "fs";
import _ from "lodash";
import { MessageDescriptor } from "react-intl";

import { Locale, locales } from "../src/@types/locale";
import base from "../src/translations/base.json";

interface Translations {
  [key: string]: string;
}

type Message = Record<string, Omit<MessageDescriptor, "id">>;

const baseJson: Message = base;

const baseIdArray = Object.entries(baseJson).map((entry) => entry[0]);

function checkLocale(locale: Locale) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const languageJson: Translations = require(`../src/translations/${locale}.json`);

  // set empty finnish translations
  baseIdArray
    .sort((a, b) => (a && b && a < b ? -1 : 1))
    .forEach((id) => {
      if (id && !languageJson[id]) {
        languageJson[id] =
          Locale.EN === locale ? (baseJson[id].defaultMessage as string) : "";
      }
    });

  const raw = JSON.stringify(
    _(languageJson)
      .toPairs()
      // filter out translations that don't exist in base anymore
      .filter(([key]) => baseIdArray.some((id) => id === key))
      .sort((a, b) => (a < b ? -1 : 1))
      .fromPairs()
      .value(),
    null,
    2,
  );
  fs.writeFileSync(`src/translations/${locale}.json`, `${raw}\n`);
}

for (const locale of locales) {
  checkLocale(locale);
}
