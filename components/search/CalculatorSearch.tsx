"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, Search, X } from "lucide-react";
import { useLocale } from "@/components/i18n/LocaleContext";
import { CALCULATORS } from "@/lib/constants/calculators";
import { getAllLocalizedCalculators } from "@/lib/i18n/calculators-meta";

interface CalculatorSearchProps {
  id?: string;
  placeholder?: string;
  onNavigate?: () => void;
  autoFocus?: boolean;
}

export function CalculatorSearch({
  id = "calculator-search-input",
  placeholder,
  onNavigate,
  autoFocus = false,
}: CalculatorSearchProps) {
  const { locale, ui, lPath } = useLocale();
  const [query, setQuery] = useState("");
  const router = useRouter();

  const localizedList = useMemo(
    () => getAllLocalizedCalculators(locale),
    [locale]
  );

  const matches = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return localizedList
      .filter((calc, idx) => {
        const enFallback = CALCULATORS[idx];
        const haystack = [
          calc.name,
          calc.categoryName,
          calc.shortDescription,
          calc.primaryKeyword,
          ...calc.keywords,
          enFallback.name,
          enFallback.primaryKeyword,
          ...enFallback.keywords,
        ]
          .join(" ")
          .toLowerCase();
        return haystack.includes(q);
      })
      .slice(0, 8);
  }, [query, localizedList]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (matches.length > 0) {
      onNavigate?.();
      router.push(lPath(`/${matches[0].slug}/`));
    }
  };

  return (
    <div className="relative w-full">
      <form onSubmit={handleSubmit} role="search" aria-label={ui.nav.search}>
        <label htmlFor={id} className="sr-only">
          {ui.nav.search}
        </label>
        <div className="relative flex items-center">
          <Search
            className="pointer-events-none absolute left-4 h-5 w-5 text-slate-400"
            aria-hidden="true"
          />
          <input
            id={id}
            type="search"
            value={query}
            autoFocus={autoFocus}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={placeholder || ui.search.placeholder}
            className="w-full rounded-xl border border-slate-300 bg-white py-3.5 pl-12 pr-24 text-sm sm:text-base text-slate-900 placeholder:text-slate-400 shadow-xs focus:border-sky-500 focus:outline-2 focus:outline-offset-0 focus:outline-sky-500"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label={ui.search.clearQuery}
              className="absolute right-20 rounded-md p-1 text-slate-400 hover:text-slate-700 focus-visible:outline-2 focus-visible:outline-sky-600"
            >
              <X className="h-4 w-4" />
            </button>
          )}
          <button
            type="submit"
            className="absolute right-2 rounded-lg bg-[#38BDF8] px-3.5 py-2 text-xs sm:text-sm font-semibold text-slate-950 hover:bg-[#0EA5E9] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 whitespace-nowrap"
          >
            {ui.search.findButton}
          </button>
        </div>
      </form>

      {query.trim().length > 0 && (
        <div
          role="region"
          aria-live="polite"
          aria-label="Calculator search results"
          className="mt-2 rounded-xl border border-slate-200 bg-white text-left shadow-md overflow-hidden"
        >
          {matches.length === 0 ? (
            <div className="px-4 py-4 text-sm text-slate-600">
              {ui.search.noMatchesPrefix} &ldquo;{query}&rdquo;.{" "}
              {ui.search.noMatchesTry}{" "}
              <Link
                href={lPath("/everyday/")}
                onClick={() => onNavigate?.()}
                className="font-medium text-sky-700 underline"
              >
                {ui.nav.everyday}
              </Link>{" "}
              {ui.search.or}{" "}
              <Link
                href={lPath("/health/")}
                onClick={() => onNavigate?.()}
                className="font-medium text-sky-700 underline"
              >
                {ui.nav.health}
              </Link>
              .
            </div>
          ) : (
            <ul className="divide-y divide-slate-100">
              {matches.map((calc) => (
                <li key={calc.slug}>
                  <Link
                    href={lPath(`/${calc.slug}/`)}
                    onClick={() => onNavigate?.()}
                    className="flex items-center justify-between gap-4 px-4 py-3 hover:bg-sky-50/70 focus-visible:bg-sky-50 focus-visible:outline-none"
                  >
                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        {calc.name}
                      </p>
                      <p className="text-xs text-slate-600">
                        {calc.categoryName} · {calc.shortDescription}
                      </p>
                    </div>
                    <ArrowRight
                      className="h-4 w-4 shrink-0 text-sky-600"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
