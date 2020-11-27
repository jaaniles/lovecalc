import { FC, useCallback, useMemo } from "react";
import { defineMessages, FormattedMessage } from "react-intl";

import { Locale } from "~/@types/locale";
import { Button } from "~/atoms/Button";

const messages = defineMessages({
  fi: {
    id: "languages.fi",
    defaultMessage: "Finnish",
  },
  en: {
    id: "languages.en",
    defaultMessage: "English",
  },
});

const getLocaleMessage = (locale: Locale) => {
  switch (locale) {
    case Locale.FI:
      return messages.fi;

    case Locale.EN:
    default:
      return messages.en;
  }
};

interface Props {
  locale: Locale;
  onLocale: (
    locale: Locale,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
}

export const LanguageButton: FC<Props> = ({ locale, onLocale }) => {
  const handleLanguageSelect = useCallback(
    (e) => {
      onLocale(locale, e);
    },
    [locale, onLocale],
  );

  const localeMessage = useMemo(() => getLocaleMessage(locale), [locale]);

  return (
    <Button type="button" onClick={handleLanguageSelect}>
      <FormattedMessage {...localeMessage} />
    </Button>
  );
};
