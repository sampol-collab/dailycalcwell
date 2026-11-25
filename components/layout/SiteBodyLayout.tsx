import { ReactNode } from "react";
import { LocaleProvider } from "@/components/i18n/LocaleContext";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ConsentAndAnalytics } from "@/components/privacy/ConsentAndAnalytics";
import { JsonLd } from "@/components/seo/JsonLd";
import { Locale } from "@/lib/i18n/config";
import { getUiDictionary } from "@/lib/i18n/ui";
import {
  buildOrganizationSchema,
  buildWebSiteSchema,
} from "@/lib/seo/structured-data";

interface SiteBodyLayoutProps {
  locale: Locale;
  children: ReactNode;
}

export function SiteBodyLayout({ locale, children }: SiteBodyLayoutProps) {
  const ui = getUiDictionary(locale);

  return (
    <body className="min-h-screen flex flex-col bg-white text-slate-900">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-[#38BDF8] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-slate-950"
      >
        {ui.skipToContent}
      </a>
      <JsonLd data={buildWebSiteSchema(locale)} />
      <JsonLd data={buildOrganizationSchema()} />
      <LocaleProvider locale={locale}>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <ConsentAndAnalytics />
      </LocaleProvider>
    </body>
  );
}
