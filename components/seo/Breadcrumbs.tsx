import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { BreadcrumbItem, buildBreadcrumbSchema } from "@/lib/seo/structured-data";
import { JsonLd } from "./JsonLd";

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <>
      <JsonLd data={buildBreadcrumbSchema(items)} />
      <nav aria-label="Breadcrumb" className="mb-5 text-sm text-slate-600">
        <ol className="flex flex-wrap items-center gap-1.5">
          {items.map((item, idx) => {
            const isLast = idx === items.length - 1;
            return (
              <li key={item.path} className="flex items-center gap-1.5">
                {idx > 0 && (
                  <ChevronRight
                    className="h-3.5 w-3.5 text-slate-400 shrink-0"
                    aria-hidden="true"
                  />
                )}
                {isLast ? (
                  <span
                    className="font-medium text-slate-900"
                    aria-current="page"
                  >
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.path}
                    className="hover:text-sky-700 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 rounded-sm"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
