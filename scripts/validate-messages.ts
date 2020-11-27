import { MessageDescriptor } from "react-intl";

import { locales } from "../src/@types/locale";
import base from "../src/translations/base.json";

type Message = Record<string, Omit<MessageDescriptor, "id">>;

const baseJson: Message = base;

const baseIdArray = Object.entries(baseJson).map((entry) => {
  const [id] = entry;

  return id;
});

for (const locale of locales) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const messages = require(`../src/translations/${locale}.json`);

  baseIdArray.forEach((id) => {
    if (id && !messages[id]) {
      throw new Error(`Missing translation for ${id}`);
    }
  });
}
