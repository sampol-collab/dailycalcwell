import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CalculatorMeta } from "@/lib/constants/calculators";
import { DEFAULT_LOCALE, Locale, localizePath } from "@/lib/i18n/config";

const OPEN_LABELS: Record<Locale, string> = {
  en: "Open Calculator",
  hi: "कैलकुलेटर खोलें",
  es: "Abrir Calculadora",
  fr: "Ouvrir le Calculateur",
  de: "Rechner öffnen",
  pt: "Abrir Calculadora",
};

interface CalculatorCardProps {
  calculator: CalculatorMeta;
  locale?: Locale;
}

export function CalculatorCard({
  calculator,
  locale = DEFAULT_LOCALE,
}: CalculatorCardProps) {
  return (
    <Link
      href={localizePath(`/${calculator.slug}/`, locale)}
      className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 transition-colors hover:border-sky-400 hover:bg-sky-50/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
    >
      <div>
        <p className="text-xs font-medium text-slate-500">
          {calculator.categoryName}
        </p>
        <h3 className="mt-1.5 text-base font-bold text-slate-900 group-hover:text-sky-800">
          {calculator.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          {calculator.shortDescription}
        </p>
      </div>
      <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-sky-700 group-hover:text-sky-900">
        <span>{OPEN_LABELS[locale]}</span>
        <ArrowRight
          className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </div>
    </Link>
  );
}
