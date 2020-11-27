import { FC } from "react";
import { IntlProvider as IntlProviderReact } from "react-intl";

import { Locale } from "~/@types/locale";
import { useLocale } from "~/providers/LocaleProvider";
import messagesEN from "~/translations/en.json";
import messagesFI from "~/translations/fi.json";

const loadLocaleData = (locale: Locale) => {
  switch (locale) {
    case Locale.FI:
      return messagesFI;

    case Locale.EN:
    default:
      return messagesEN;
  }
};

export const IntlProvider: FC = ({ children }) => {
  const locale = useLocale();

  return (
    <IntlProviderReact
      locale={locale}
      messages={loadLocaleData(locale)}
      defaultLocale={Locale.EN}
      wrapRichTextChunksInFragment
    >
      {children}
    </IntlProviderReact>
  );
};
