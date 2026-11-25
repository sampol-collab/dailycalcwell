"use client";

import { usePathname } from "next/navigation";
import { NotFoundView } from "@/components/pages/PolicyPagesView";
import { parseLocaleFromPathname } from "@/lib/i18n/config";

export function LocalizedNotFoundClient() {
  const pathname = usePathname() || "/";
  const { locale } = parseLocaleFromPathname(pathname);
  return <NotFoundView locale={locale} />;
}
