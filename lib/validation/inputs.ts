export interface ValidationResult<T> {
  ok: true;
  value: T;
}

export interface ValidationError {
  ok: false;
  error: string;
}

export type ParseOutcome<T> = ValidationResult<T> | ValidationError;

export function parseNumberInput(
  raw: string | number,
  label: string,
  options?: {
    min?: number;
    max?: number;
    allowZero?: boolean;
    allowNegative?: boolean;
    integer?: boolean;
  }
): ParseOutcome<number> {
  if (typeof raw === "string" && raw.trim() === "") {
    return { ok: false, error: `Please enter a value for ${label}.` };
  }
  const num = typeof raw === "number" ? raw : Number(raw.trim());
  if (!Number.isFinite(num)) {
    return { ok: false, error: `${label} must be a valid number.` };
  }
  if (options?.integer && !Number.isInteger(num)) {
    return { ok: false, error: `${label} must be a whole number.` };
  }
  if (options?.allowNegative === false && num < 0) {
    return { ok: false, error: `${label} cannot be negative.` };
  }
  if (options?.allowZero === false && num === 0) {
    return { ok: false, error: `${label} cannot be zero.` };
  }
  if (options?.min !== undefined && num < options.min) {
    return {
      ok: false,
      error: `${label} must be at least ${options.min}.`,
    };
  }
  if (options?.max !== undefined && num > options.max) {
    return {
      ok: false,
      error: `${label} must be ${options.max} or less.`,
    };
  }
  return { ok: true, value: num };
}

export function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

export function daysInMonth(year: number, monthIndex0: number): number {
  return new Date(Date.UTC(year, monthIndex0 + 1, 0)).getUTCDate();
}

/**
 * Parses a YYYY-MM-DD date string strictly in UTC midnight to avoid timezone shifts.
 */
export function parseISODateUTC(
  raw: string,
  label = "Date"
): ParseOutcome<Date> {
  const trimmed = raw.trim();
  if (!trimmed) {
    return { ok: false, error: `Please select a valid ${label.toLowerCase()}.` };
  }
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(trimmed);
  if (!match) {
    return {
      ok: false,
      error: `${label} must follow the YYYY-MM-DD format.`,
    };
  }
  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  if (month < 1 || month > 12) {
    return { ok: false, error: `${label} has an invalid month.` };
  }
  const maxDay = daysInMonth(year, month - 1);
  if (day < 1 || day > maxDay) {
    return { ok: false, error: `${label} has an invalid day for that month.` };
  }
  const date = new Date(Date.UTC(year, month - 1, day));
  return { ok: true, value: date };
}

export function formatISODateUTC(date: Date): string {
  const y = date.getUTCFullYear();
  const m = String(date.getUTCMonth() + 1).padStart(2, "0");
  const d = String(date.getUTCDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export function formatReadableDateUTC(date: Date): string {
  return date.toLocaleDateString("en-US", {
    timeZone: "UTC",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function roundTo(value: number, decimals = 4): number {
  const factor = Math.pow(10, decimals);
  return Math.round((value + Number.EPSILON) * factor) / factor;
}

export function gcd(a: number, b: number): number {
  let x = Math.abs(Math.round(a));
  let y = Math.abs(Math.round(b));
  while (y !== 0) {
    const t = y;
    y = x % y;
    x = t;
  }
  return x === 0 ? 1 : x;
}
