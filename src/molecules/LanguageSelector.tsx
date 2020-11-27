import { FC, useCallback } from "react";

import { Locale, locales } from "~/@types/locale";
import { LanguageButton } from "~/atoms/LanguageButton";
import { useUpdateLocale } from "~/providers/LocaleProvider";

export const LanguageSelector: FC = () => {
  const updateLocale = useUpdateLocale();

  const handleChangeLanguage = useCallback(
    (locale: Locale) => {
      updateLocale(locale);
    },
    [updateLocale],
  );

  return (
    <div
      css={({ scale }) => ({
        marginBottom: scale(3),
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      })}
    >
      {locales.map((locale) => (
        <LanguageButton
          key={locale}
          onLocale={handleChangeLanguage}
          locale={locale}
        />
      ))}
    </div>
  );
};
