"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Check, ChevronDown, Coins, Search, X } from "lucide-react";
import { useLocale } from "@/components/i18n/LocaleContext";
import {
  getWorldCurrencyOptions,
  QUICK_PICK_CURRENCIES,
} from "@/lib/constants/currencies";
import { getPriceUi } from "@/lib/i18n/price-ui";

interface CurrencySelectProps {
  value: string;
  onChange: (nextCurrency: string) => void;
  id?: string;
}

export function CurrencySelect({
  value,
  onChange,
  id = "currency-select",
}: CurrencySelectProps) {
  const { locale } = useLocale();
  const priceUi = getPriceUi(locale).currencySelect;

  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const allOptions = useMemo(() => getWorldCurrencyOptions(locale), [locale]);
  const selectedOption = useMemo(
    () => allOptions.find((c) => c.code === value) || allOptions[0],
    [allOptions, value]
  );

  const quickOptions = useMemo(
    () =>
      QUICK_PICK_CURRENCIES.map((code) =>
        allOptions.find((c) => c.code === code)
      ).filter((c): c is NonNullable<typeof c> => Boolean(c)),
    [allOptions]
  );

  const filteredOptions = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return allOptions;
    return allOptions.filter(
      (opt) =>
        opt.code.toLowerCase().includes(q) ||
        opt.name.toLowerCase().includes(q) ||
        opt.symbol.toLowerCase().includes(q)
    );
  }, [allOptions, query]);

  useEffect(() => {
    if (!open) return;
    const handleOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  useEffect(() => {
    if (open) {
      const idTimer = setTimeout(() => {
        searchInputRef.current?.focus();
      }, 20);
      return () => clearTimeout(idTimer);
    }
  }, [open]);

  const handleSelect = (code: string) => {
    onChange(code);
    setOpen(false);
    setQuery("");
  };

  return (
    <div ref={containerRef} className="space-y-2">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <label
          htmlFor={id}
          className="block text-sm font-semibold text-slate-800"
        >
          {priceUi.label}
        </label>
        <span className="text-xs text-slate-500">{priceUi.worldCountLabel}</span>
      </div>

      <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
        {/* Quick-pick popular world currencies */}
        <div
          className="inline-flex flex-wrap rounded-lg border border-slate-200 bg-slate-50 p-1 gap-0.5"
          role="group"
          aria-label={priceUi.popularLabel}
        >
          {quickOptions.map((opt) => {
            const active = opt.code === value;
            return (
              <button
                key={opt.code}
                type="button"
                onClick={() => handleSelect(opt.code)}
                className={`rounded-md px-2.5 py-1.5 text-xs sm:text-sm font-medium whitespace-nowrap shrink-0 transition-colors focus-visible:outline-2 focus-visible:outline-sky-600 ${
                  active
                    ? "bg-white text-slate-900 shadow-xs font-semibold"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {opt.code} ({opt.symbol})
              </button>
            );
          })}
        </div>

        {/* Full 156 world currencies searchable dropdown */}
        <div className="relative flex-1 min-w-[220px]">
          <button
            id={id}
            type="button"
            aria-haspopup="listbox"
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
            className="flex w-full items-center justify-between gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-left text-sm text-slate-900 hover:border-sky-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
          >
            <span className="flex items-center gap-2 truncate">
              <Coins className="h-4 w-4 shrink-0 text-sky-600" aria-hidden="true" />
              <span className="font-semibold shrink-0">{selectedOption.code}</span>
              <span className="truncate text-slate-600">
                — {selectedOption.name} ({selectedOption.symbol})
              </span>
            </span>
            <ChevronDown
              className={`h-4 w-4 shrink-0 text-slate-500 transition-transform ${
                open ? "rotate-180" : ""
              }`}
              aria-hidden="true"
            />
          </button>

          {open && (
            <div className="absolute right-0 left-0 z-40 mt-1.5 rounded-xl border border-slate-200 bg-white shadow-lg">
              <div className="flex items-center gap-2 border-b border-slate-200 px-3 py-2">
                <Search className="h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" />
                <input
                  ref={searchInputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={priceUi.searchPlaceholder}
                  className="w-full bg-transparent text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
                />
                {query ? (
                  <button
                    type="button"
                    onClick={() => setQuery("")}
                    aria-label={priceUi.closeList}
                    className="rounded p-0.5 text-slate-400 hover:text-slate-700"
                  >
                    <X className="h-3.5 w-3.5" aria-hidden="true" />
                  </button>
                ) : null}
              </div>

              <ul
                role="listbox"
                aria-label={priceUi.allCurrenciesPlaceholder}
                className="max-h-64 overflow-y-auto py-1 divide-y divide-slate-100"
              >
                {filteredOptions.length === 0 ? (
                  <li className="px-3.5 py-3 text-sm text-slate-500">
                    {priceUi.noResults}
                  </li>
                ) : (
                  filteredOptions.map((opt) => {
                    const isSelected = opt.code === value;
                    return (
                      <li key={opt.code}>
                        <button
                          type="button"
                          role="option"
                          aria-selected={isSelected}
                          onClick={() => handleSelect(opt.code)}
                          className={`flex w-full items-center justify-between gap-2 px-3.5 py-2 text-left text-sm transition-colors ${
                            isSelected
                              ? "bg-sky-50 text-sky-900 font-semibold"
                              : "text-slate-700 hover:bg-slate-50"
                          }`}
                        >
                          <span className="flex items-center gap-2 min-w-0">
                            <span className="font-mono text-xs font-semibold text-slate-900 w-9 shrink-0">
                              {opt.code}
                            </span>
                            <span className="truncate">{opt.name}</span>
                          </span>
                          <span className="flex items-center gap-2 shrink-0 text-xs text-slate-500">
                            <span className="font-medium text-slate-700">
                              {opt.symbol}
                            </span>
                            {isSelected && (
                              <Check
                                className="h-4 w-4 text-sky-600"
                                aria-hidden="true"
                              />
                            )}
                          </span>
                        </button>
                      </li>
                    );
                  })
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
