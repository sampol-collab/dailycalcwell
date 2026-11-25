"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { useLocale } from "@/components/i18n/LocaleContext";
import { LOCALE_CONFIG } from "@/lib/i18n/config";
import {
  daysInMonth,
  formatISODateUTC,
  parseISODateUTC,
} from "@/lib/validation/inputs";

function getTodayUTC(): { year: number; month0: number; day: number; iso: string } {
  const now = new Date();
  const year = now.getUTCFullYear();
  const month0 = now.getUTCMonth();
  const day = now.getUTCDate();
  const iso = formatISODateUTC(new Date(Date.UTC(year, month0, day)));
  return { year, month0, day, iso };
}

export interface DateQuickPreset {
  label: string;
  iso: string;
}

interface DatePickerProps {
  id: string;
  value: string;
  onChange: (nextIso: string) => void;
  minYear?: number;
  maxYear?: number;
  presets?: DateQuickPreset[];
  ariaLabel?: string;
}

export function DatePicker({
  id,
  value,
  onChange,
  minYear = 1900,
  maxYear = 2100,
  presets,
  ariaLabel,
}: DatePickerProps) {
  const { locale, ui } = useLocale();
  const intlLocale = LOCALE_CONFIG[locale].intlLocale;
  const monthNames = ui.datePicker.months;
  const weekdays = ui.datePicker.weekdays;

  const dialogId = useId();
  const containerRef = useRef<HTMLDivElement>(null);
  const today = useMemo(() => getTodayUTC(), []);

  const parsedValue = useMemo(() => parseISODateUTC(value), [value]);
  const selectedDate = parsedValue.ok ? parsedValue.value : null;

  const [open, setOpen] = useState(false);
  const [viewYear, setViewYear] = useState<number>(() =>
    selectedDate ? selectedDate.getUTCFullYear() : today.year
  );
  const [viewMonth0, setViewMonth0] = useState<number>(() =>
    selectedDate ? selectedDate.getUTCMonth() : today.month0
  );
  const [textDraft, setTextDraft] = useState<string>(value);

  useEffect(() => {
    setTextDraft(value);
    const p = parseISODateUTC(value);
    if (p.ok) {
      setViewYear(p.value.getUTCFullYear());
      setViewMonth0(p.value.getUTCMonth());
    }
  }, [value]);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const years = useMemo(() => {
    const list: number[] = [];
    for (let y = maxYear; y >= minYear; y -= 1) {
      list.push(y);
    }
    return list;
  }, [minYear, maxYear]);

  const calendarCells = useMemo(() => {
    const firstWeekday = new Date(Date.UTC(viewYear, viewMonth0, 1)).getUTCDay();
    const currentMonthDays = daysInMonth(viewYear, viewMonth0);
    const prevMonthYear = viewMonth0 === 0 ? viewYear - 1 : viewYear;
    const prevMonth0 = viewMonth0 === 0 ? 11 : viewMonth0 - 1;
    const prevMonthDays = daysInMonth(prevMonthYear, prevMonth0);

    const cells: {
      iso: string;
      day: number;
      inCurrentMonth: boolean;
      readableLabel: string;
    }[] = [];

    for (let i = firstWeekday - 1; i >= 0; i -= 1) {
      const d = prevMonthDays - i;
      const dt = new Date(Date.UTC(prevMonthYear, prevMonth0, d));
      cells.push({
        iso: formatISODateUTC(dt),
        day: d,
        inCurrentMonth: false,
        readableLabel: `${monthNames[prevMonth0]} ${d}, ${prevMonthYear}`,
      });
    }

    for (let d = 1; d <= currentMonthDays; d += 1) {
      const dt = new Date(Date.UTC(viewYear, viewMonth0, d));
      cells.push({
        iso: formatISODateUTC(dt),
        day: d,
        inCurrentMonth: true,
        readableLabel: `${monthNames[viewMonth0]} ${d}, ${viewYear}`,
      });
    }

    const nextMonthYear = viewMonth0 === 11 ? viewYear + 1 : viewYear;
    const nextMonth0 = viewMonth0 === 11 ? 0 : viewMonth0 + 1;
    const remaining = 42 - cells.length;
    for (let d = 1; d <= remaining; d += 1) {
      const dt = new Date(Date.UTC(nextMonthYear, nextMonth0, d));
      cells.push({
        iso: formatISODateUTC(dt),
        day: d,
        inCurrentMonth: false,
        readableLabel: `${monthNames[nextMonth0]} ${d}, ${nextMonthYear}`,
      });
    }

    return cells;
  }, [viewYear, viewMonth0, monthNames]);

  const goPrevMonth = () => {
    if (viewMonth0 === 0) {
      if (viewYear > minYear) {
        setViewYear(viewYear - 1);
        setViewMonth0(11);
      }
    } else {
      setViewMonth0(viewMonth0 - 1);
    }
  };

  const goNextMonth = () => {
    if (viewMonth0 === 11) {
      if (viewYear < maxYear) {
        setViewYear(viewYear + 1);
        setViewMonth0(0);
      }
    } else {
      setViewMonth0(viewMonth0 + 1);
    }
  };

  const selectDateIso = (iso: string, closeAfter = true) => {
    setTextDraft(iso);
    onChange(iso);
    const p = parseISODateUTC(iso);
    if (p.ok) {
      setViewYear(p.value.getUTCFullYear());
      setViewMonth0(p.value.getUTCMonth());
    }
    if (closeAfter) {
      setOpen(false);
    }
  };

  const displayLabel = selectedDate
    ? selectedDate.toLocaleDateString(intlLocale, {
        timeZone: "UTC",
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : ui.datePicker.selectDate;

  const weekdayLabel = selectedDate
    ? selectedDate.toLocaleDateString(intlLocale, {
        timeZone: "UTC",
        weekday: "short",
      })
    : null;

  return (
    <div ref={containerRef} className="relative mt-1.5">
      <button
        id={id}
        type="button"
        aria-label={ariaLabel}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls={open ? dialogId : undefined}
        onClick={() => setOpen((prev) => !prev)}
        className={`flex w-full items-center justify-between gap-3 rounded-lg border px-3.5 py-2.5 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-sky-500 ${
          open
            ? "border-sky-500 bg-sky-50/40 ring-1 ring-sky-500"
            : "border-slate-300 bg-white hover:border-slate-400"
        }`}
      >
        <div className="flex items-center gap-2.5 min-w-0">
          <span className="text-base font-medium text-slate-900 truncate tabular-nums">
            {displayLabel}
          </span>
          {weekdayLabel && (
            <span className="rounded bg-slate-100 px-1.5 py-0.5 text-xs font-medium text-slate-600 shrink-0">
              {weekdayLabel}
            </span>
          )}
        </div>
        <Calendar
          className={`h-4 w-4 shrink-0 ${
            open ? "text-sky-600" : "text-slate-500"
          }`}
          aria-hidden="true"
        />
      </button>

      {open && (
        <div
          id={dialogId}
          role="dialog"
          aria-modal="false"
          aria-label={ui.datePicker.chooseDate}
          className="absolute left-0 right-0 sm:right-auto sm:w-[328px] z-30 mt-2 rounded-xl border border-slate-200 bg-white p-3.5 shadow-xl"
        >
          <div className="mb-3 flex items-center gap-2">
            <label htmlFor={`${id}-iso-input`} className="sr-only">
              YYYY-MM-DD
            </label>
            <input
              id={`${id}-iso-input`}
              type="text"
              inputMode="numeric"
              placeholder="YYYY-MM-DD"
              value={textDraft}
              onChange={(e) => {
                const next = e.target.value;
                setTextDraft(next);
                const p = parseISODateUTC(next);
                if (p.ok) {
                  const y = p.value.getUTCFullYear();
                  if (y >= minYear && y <= maxYear) {
                    setViewYear(y);
                    setViewMonth0(p.value.getUTCMonth());
                    onChange(formatISODateUTC(p.value));
                  }
                }
              }}
              className="w-full rounded-lg border border-slate-300 bg-slate-50/70 px-2.5 py-1.5 font-mono text-xs text-slate-900 tabular-nums focus:border-sky-500 focus:bg-white focus:outline-2 focus:outline-sky-500"
            />
            <button
              type="button"
              onClick={() => selectDateIso(today.iso)}
              className="rounded-lg border border-sky-200 bg-sky-50 px-2.5 py-1.5 text-xs font-semibold text-sky-800 hover:bg-sky-100 focus-visible:outline-2 focus-visible:outline-sky-600 whitespace-nowrap"
            >
              {ui.datePicker.today}
            </button>
          </div>

          <div className="mb-3 flex items-center justify-between gap-1.5">
            <button
              type="button"
              onClick={goPrevMonth}
              aria-label={ui.datePicker.prevMonth}
              className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-sky-600"
            >
              <ChevronLeft className="h-4 w-4" aria-hidden="true" />
            </button>

            <div className="flex flex-1 items-center gap-1.5 min-w-0">
              <label htmlFor={`${id}-month-select`} className="sr-only">
                Month
              </label>
              <select
                id={`${id}-month-select`}
                value={viewMonth0}
                onChange={(e) => setViewMonth0(Number(e.target.value))}
                className="flex-1 min-w-0 rounded-lg border border-slate-200 bg-white px-2 py-1.5 text-xs font-semibold text-slate-900 focus:border-sky-500 focus:outline-2 focus:outline-sky-500"
              >
                {monthNames.map((name, idx) => (
                  <option key={idx} value={idx}>
                    {name}
                  </option>
                ))}
              </select>

              <label htmlFor={`${id}-year-select`} className="sr-only">
                Year
              </label>
              <select
                id={`${id}-year-select`}
                value={viewYear}
                onChange={(e) => setViewYear(Number(e.target.value))}
                className="w-[82px] shrink-0 rounded-lg border border-slate-200 bg-white px-2 py-1.5 text-xs font-semibold text-slate-900 tabular-nums focus:border-sky-500 focus:outline-2 focus:outline-sky-500"
              >
                {years.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="button"
              onClick={goNextMonth}
              aria-label={ui.datePicker.nextMonth}
              className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-sky-600"
            >
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>

          <div className="grid grid-cols-7 gap-1 text-center text-[11px] font-semibold text-slate-500 mb-1">
            {weekdays.map((dayName, idx) => (
              <div key={idx} className="py-1">
                {dayName}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1 tabular-nums">
            {calendarCells.map((cell) => {
              const isSelected = cell.iso === value;
              const isToday = cell.iso === today.iso;
              return (
                <button
                  key={cell.iso}
                  type="button"
                  onClick={() => selectDateIso(cell.iso)}
                  aria-label={cell.readableLabel}
                  aria-pressed={isSelected}
                  className={`h-8 w-full rounded-lg text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-sky-600 ${
                    isSelected
                      ? "bg-[#38BDF8] font-bold text-slate-950 hover:bg-[#0EA5E9]"
                      : isToday
                        ? "border border-sky-400 bg-sky-50 font-semibold text-sky-900 hover:bg-sky-100"
                        : cell.inCurrentMonth
                          ? "text-slate-800 hover:bg-slate-100"
                          : "text-slate-400 hover:bg-slate-50 hover:text-slate-600"
                  }`}
                >
                  {cell.day}
                </button>
              );
            })}
          </div>

          {presets && presets.length > 0 && (
            <div className="mt-3 border-t border-slate-100 pt-2.5 flex flex-wrap items-center gap-1.5">
              {presets.map((preset) => (
                <button
                  key={preset.label}
                  type="button"
                  onClick={() => selectDateIso(preset.iso)}
                  className="rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-[11px] font-medium text-slate-700 hover:border-sky-300 hover:bg-sky-50 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-sky-600"
                >
                  {preset.label}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
