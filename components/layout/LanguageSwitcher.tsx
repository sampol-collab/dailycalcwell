"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Check, ChevronDown, Globe } from "lucide-react";
import {
  LOCALE_CONFIG,
  SUPPORTED_LOCALES,
  localizePath,
  parseLocaleFromPathname,
} from "@/lib/i18n/config";
import { useLocale } from "@/components/i18n/LocaleContext";

export function LanguageSwitcher({
  compact = false,
  onSelect,
}: {
  compact?: boolean;
  onSelect?: () => void;
}) {
  const { locale, ui } = useLocale();
  const pathname = usePathname() || "/";
  const { basePath } = parseLocaleFromPathname(pathname);
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onMouseDown = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const current = LOCALE_CONFIG[locale];

  if (compact) {
    return (
      <div className="border-t border-slate-200 pt-3 mt-2">
        <p className="px-3 pb-1.5 text-xs font-semibold uppercase tracking-wide text-slate-500 flex items-center gap-1.5">
          <Globe className="h-3.5 w-3.5 text-sky-600" aria-hidden="true" />
          <span>{ui.nav.language}</span>
        </p>
        <div className="grid grid-cols-2 gap-1.5 px-2">
          {SUPPORTED_LOCALES.map((loc) => {
            const cfg = LOCALE_CONFIG[loc];
            const active = loc === locale;
            return (
              <Link
                key={loc}
                href={localizePath(basePath, loc)}
                hrefLang={cfg.hreflang}
                onClick={() => onSelect?.()}
                className={`flex items-center justify-between rounded-lg px-3 py-2 text-xs font-medium transition-colors ${
                  active
                    ? "bg-sky-50 text-sky-900 font-semibold border border-sky-300"
                    : "border border-slate-200 text-slate-700 hover:bg-slate-50"
                }`}
              >
                <span>{cfg.nativeName}</span>
                <span className="text-[10px] font-mono text-slate-500">
                  {cfg.shortCode}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={`${ui.nav.language}: ${current.nativeName}`}
        className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2.5 py-2 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-slate-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 whitespace-nowrap shrink-0"
      >
        <Globe className="h-4 w-4 text-sky-600 shrink-0" aria-hidden="true" />
        <span className="font-semibold text-slate-800">{current.shortCode}</span>
        <ChevronDown
          className={`h-3.5 w-3.5 text-slate-500 transition-transform ${
            open ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        />
      </button>

      {open && (
        <div
          role="menu"
          aria-label={ui.nav.language}
          className="absolute right-0 z-50 mt-2 w-52 rounded-xl border border-slate-200 bg-white py-1.5 shadow-xl"
        >
          {SUPPORTED_LOCALES.map((loc) => {
            const cfg = LOCALE_CONFIG[loc];
            const active = loc === locale;
            return (
              <Link
                key={loc}
                role="menuitem"
                href={localizePath(basePath, loc)}
                hrefLang={cfg.hreflang}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between px-3.5 py-2 text-sm transition-colors ${
                  active
                    ? "bg-sky-50 font-semibold text-sky-900"
                    : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <span className="flex flex-col">
                  <span>{cfg.nativeName}</span>
                  {cfg.name !== cfg.nativeName && (
                    <span className="text-[11px] text-slate-500">{cfg.name}</span>
                  )}
                </span>
                {active ? (
                  <Check className="h-4 w-4 text-sky-600 shrink-0" aria-hidden="true" />
                ) : (
                  <span className="text-xs font-mono text-slate-400">
                    {cfg.shortCode}
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
