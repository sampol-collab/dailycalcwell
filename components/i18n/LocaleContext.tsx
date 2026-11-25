"use client";

import { createContext, ReactNode, useContext } from "react";
import { DEFAULT_LOCALE, Locale, localizePath } from "@/lib/i18n/config";
import { UiDictionary, getUiDictionary } from "@/lib/i18n/ui";

interface LocaleContextValue {
  locale: Locale;
  ui: UiDictionary;
  lPath: (basePath: string) => string;
}

const LocaleContext = createContext<LocaleContextValue>({
  locale: DEFAULT_LOCALE,
  ui: getUiDictionary(DEFAULT_LOCALE),
  lPath: (basePath: string) => localizePath(basePath, DEFAULT_LOCALE),
});

export function LocaleProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  const value: LocaleContextValue = {
    locale,
    ui: getUiDictionary(locale),
    lPath: (basePath: string) => localizePath(basePath, locale),
  };

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale(): LocaleContextValue {
  return useContext(LocaleContext);
}
