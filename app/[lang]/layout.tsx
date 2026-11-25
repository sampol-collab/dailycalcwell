import type { Metadata, Viewport } from "next";
import { DM_Sans, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import { notFound } from "next/navigation";
import { SiteBodyLayout } from "@/components/layout/SiteBodyLayout";
import { isNonDefaultLocale, NON_DEFAULT_LOCALES } from "@/lib/i18n/config";
import { ROOT_METADATA, ROOT_VIEWPORT } from "@/lib/seo/root-config";
import "../globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const dynamicParams = false;

export function generateStaticParams() {
  return NON_DEFAULT_LOCALES.map((lang) => ({ lang }));
}

export const viewport: Viewport = ROOT_VIEWPORT;
export const metadata: Metadata = ROOT_METADATA;

export default async function LocalizedRootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  if (!isNonDefaultLocale(lang)) {
    notFound();
  }

  return (
    <html
      lang={lang}
      className={`${jakarta.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <SiteBodyLayout locale={lang}>{children}</SiteBodyLayout>
    </html>
  );
}
