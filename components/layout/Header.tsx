"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Search, X } from "lucide-react";
import { useLocale } from "@/components/i18n/LocaleContext";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { CalculatorSearch } from "@/components/search/CalculatorSearch";
import { trackEvent } from "@/lib/analytics/ga4";

export function Header() {
  const { ui, lPath } = useLocale();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const navLinks = [
    { label: ui.nav.home, baseHref: "/" },
    { label: ui.nav.everyday, baseHref: "/everyday/", category: "everyday" },
    { label: ui.nav.health, baseHref: "/health/", category: "health" },
    { label: ui.nav.about, baseHref: "/about/" },
    { label: ui.nav.contact, baseHref: "/contact/" },
  ];

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6 lg:grid lg:grid-cols-[1fr_auto_1fr]">
        {/* Zone 1: Brand logo and name */}
        <Link
          href={lPath("/")}
          className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 justify-self-start focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 rounded-md"
        >
          <img
            src="/logo/dailycalcwell-logo.svg"
            alt="DailyCalcWell logo"
            width={30}
            height={30}
            className="h-7 w-7 shrink-0 rounded-md"
          />
          <span>DailyCalcWell</span>
        </Link>

        {/* Zone 2: Centered single-line navigation links */}
        <nav
          aria-label="Primary navigation"
          className="hidden lg:flex items-center justify-center justify-self-center gap-5 text-sm font-medium text-slate-700"
        >
          {navLinks.map((item) => (
            <Link
              key={item.baseHref}
              href={lPath(item.baseHref)}
              onClick={() => {
                if (item.category) {
                  trackEvent("category_navigation", {
                    category: item.category,
                    source: "header",
                  });
                }
              }}
              className="whitespace-nowrap shrink-0 py-1 hover:text-sky-700 hover:underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 rounded-sm"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Zone 3: Language switcher + Accessible Search button + Mobile Menu toggle */}
        <div className="flex items-center gap-2 shrink-0 justify-self-end">
          <div className="hidden sm:block">
            <LanguageSwitcher />
          </div>

          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            aria-label={ui.nav.search}
            className="inline-flex items-center gap-2 rounded-lg bg-[#38BDF8] px-3.5 py-2 text-xs sm:text-sm font-semibold text-slate-950 hover:bg-[#0EA5E9] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 whitespace-nowrap shrink-0"
          >
            <Search className="h-4 w-4" aria-hidden="true" />
            <span>{ui.nav.search}</span>
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={mobileOpen ? ui.nav.closeMenu : ui.nav.openMenu}
            className="inline-flex lg:hidden items-center justify-center rounded-lg border border-slate-200 bg-white p-2 text-slate-700 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <nav
          id="mobile-nav-drawer"
          aria-label="Mobile navigation"
          className="border-t border-slate-200 bg-white px-4 py-4 lg:hidden"
        >
          <ul className="space-y-1">
            {navLinks.map((item) => (
              <li key={item.baseHref}>
                <Link
                  href={lPath(item.baseHref)}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-800 hover:bg-slate-50 hover:text-sky-700 focus-visible:outline-2 focus-visible:outline-sky-600"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <LanguageSwitcher compact onSelect={() => setMobileOpen(false)} />
        </nav>
      )}

      {/* Search Modal Overlay */}
      {searchOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={ui.search.modalTitle}
          className="fixed inset-0 z-50 flex items-start justify-center bg-slate-900/50 p-4 pt-16 sm:pt-24"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSearchOpen(false);
          }}
        >
          <div className="w-full max-w-2xl rounded-2xl border border-slate-200 bg-white p-5 shadow-xl">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-base font-bold text-slate-900">
                {ui.search.modalTitle}
              </h2>
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                aria-label={ui.search.closeSearch}
                className="rounded-lg p-1.5 text-slate-500 hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-sky-600"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <CalculatorSearch
              id="header-modal-search"
              autoFocus
              onNavigate={() => setSearchOpen(false)}
            />
          </div>
        </div>
      )}
    </header>
  );
}
