"use client";

import { ReactNode, useState } from "react";
import { AlertCircle, Check, Copy, RotateCcw, Share2 } from "lucide-react";
import { useLocale } from "@/components/i18n/LocaleContext";

interface CalculatorShellProps {
  title: string;
  children: ReactNode;
  resultSlot?: ReactNode;
  resultShareText?: string;
  error?: string | null;
  onReset: () => void;
  onCalculate?: () => void;
  calculateLabel?: string;
  showCalculateButton?: boolean;
}

export function CalculatorShell({
  title,
  children,
  resultSlot,
  resultShareText,
  error,
  onReset,
  onCalculate,
  calculateLabel,
  showCalculateButton = true,
}: CalculatorShellProps) {
  const { ui } = useLocale();
  const [copied, setCopied] = useState(false);
  const [shareFeedback, setShareFeedback] = useState<string | null>(null);

  const handleCopy = async () => {
    if (!resultShareText) return;
    try {
      await navigator.clipboard.writeText(resultShareText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setShareFeedback(ui.calculatorShell.copyUnsupported);
      setTimeout(() => setShareFeedback(null), 2500);
    }
  };

  const handleShare = async () => {
    if (!resultShareText) return;
    const url = typeof window !== "undefined" ? window.location.href : "";
    const payload = {
      title,
      text: resultShareText,
      url,
    };

    if (typeof navigator !== "undefined" && typeof navigator.share === "function") {
      try {
        await navigator.share(payload);
        return;
      } catch (err) {
        if (err instanceof Error && err.name === "AbortError") return;
      }
    }

    try {
      await navigator.clipboard.writeText(`${resultShareText}\n${url}`);
      setShareFeedback(ui.calculatorShell.shareCopied);
      setTimeout(() => setShareFeedback(null), 2500);
    } catch {
      setShareFeedback(ui.calculatorShell.shareUnavailable);
      setTimeout(() => setShareFeedback(null), 2500);
    }
  };

  return (
    <section
      aria-label={`${title} interactive tool`}
      className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7 shadow-xs"
    >
      <div className="space-y-5">{children}</div>

      {error && (
        <div
          role="alert"
          className="mt-5 flex items-start gap-2.5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-700" aria-hidden="true" />
          <div>
            <span className="font-semibold">{ui.calculatorShell.inputError}: </span>
            <span>{error}</span>
          </div>
        </div>
      )}

      <div className="mt-6 flex flex-wrap items-center gap-3">
        {showCalculateButton && onCalculate && (
          <button
            type="button"
            onClick={onCalculate}
            className="rounded-lg bg-[#38BDF8] px-5 py-2.5 text-sm font-semibold text-slate-950 hover:bg-[#0EA5E9] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 transition-colors whitespace-nowrap"
          >
            {calculateLabel || ui.calculatorShell.calculate}
          </button>
        )}

        <button
          type="button"
          onClick={onReset}
          className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 transition-colors whitespace-nowrap"
        >
          <RotateCcw className="h-4 w-4" aria-hidden="true" />
          <span>{ui.calculatorShell.reset}</span>
        </button>

        {resultShareText && !error && (
          <>
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 transition-colors whitespace-nowrap"
            >
              {copied ? (
                <Check className="h-4 w-4 text-emerald-700" aria-hidden="true" />
              ) : (
                <Copy className="h-4 w-4" aria-hidden="true" />
              )}
              <span>{copied ? ui.calculatorShell.copied : ui.calculatorShell.copyResult}</span>
            </button>

            <button
              type="button"
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 transition-colors whitespace-nowrap"
            >
              <Share2 className="h-4 w-4" aria-hidden="true" />
              <span>{ui.calculatorShell.share}</span>
            </button>
          </>
        )}
      </div>

      {shareFeedback && (
        <p role="status" className="mt-2 text-xs font-medium text-emerald-800">
          {shareFeedback}
        </p>
      )}

      {resultSlot && !error && (
        <div
          aria-live="polite"
          className="mt-6 rounded-xl border border-sky-200 bg-sky-50/45 p-5"
        >
          {resultSlot}
        </div>
      )}
    </section>
  );
}
