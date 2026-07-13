import type { ReactNode } from "react";

export interface DataTableColumn<Row> {
  key: string;
  header: string;
  align?: "start" | "end";
  /** When true (and a `sort` prop is provided), the header becomes a sort button. */
  sortable?: boolean;
  render: (row: Row) => ReactNode;
}

export interface DataTableSort {
  /** Currently sorted column key, or null when unsorted. */
  activeKey: string | null;
  direction: "asc" | "desc";
  onSort: (key: string) => void;
  /** Localized aria-label builder for the sort button, e.g. "Sort by {column}". */
  label: (header: string) => string;
}

export interface DataTableProps<Row> {
  caption: string;
  columns: DataTableColumn<Row>[];
  rows: Row[];
  getRowKey: (row: Row) => string;
  empty?: string;
  /** Optional sorting behaviour. Columns opt in via `sortable`. */
  sort?: DataTableSort;
}

function SortGlyph({ state }: { state: "asc" | "desc" | "none" }) {
  return (
    <svg className={`th-sort-glyph is-${state}`} viewBox="0 0 12 16" width="10" height="13" aria-hidden="true">
      <path className="th-up" d="M6 1.5 9 5H3z" />
      <path className="th-down" d="M6 14.5 3 11h6z" />
    </svg>
  );
}

/**
 * Reusable table with a sticky header, semantic column headers, a
 * keyboard-reachable horizontal-scroll region for small screens, and optional
 * keyboard-accessible column sorting via aria-sort + header buttons.
 */
export function DataTable<Row>({ caption, columns, rows, getRowKey, empty, sort }: DataTableProps<Row>) {
  return (
    <div className="table-scroll" role="region" aria-label={caption} tabIndex={0}>
      <table className="data-table">
        <caption className="sr-only">{caption}</caption>
        <thead>
          <tr>
            {columns.map((column) => {
              const isSortable = Boolean(sort && column.sortable);
              const isActive = isSortable && sort!.activeKey === column.key;
              const ariaSort = !isSortable
                ? undefined
                : isActive
                  ? sort!.direction === "asc"
                    ? "ascending"
                    : "descending"
                  : "none";
              const thClass = [column.align === "end" ? "align-end" : "", isSortable ? "is-sortable" : ""]
                .filter(Boolean)
                .join(" ");
              return (
                <th key={column.key} scope="col" className={thClass || undefined} aria-sort={ariaSort}>
                  {isSortable ? (
                    <button
                      type="button"
                      className={`th-sort${isActive ? " is-active" : ""}`}
                      onClick={() => sort!.onSort(column.key)}
                      aria-label={sort!.label(column.header)}
                    >
                      <span>{column.header}</span>
                      <SortGlyph state={isActive ? sort!.direction : "none"} />
                    </button>
                  ) : (
                    column.header
                  )}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 ? (
            <tr>
              <td className="table-empty" colSpan={columns.length}>
                {empty}
              </td>
            </tr>
          ) : (
            rows.map((row) => (
              <tr key={getRowKey(row)}>
                {columns.map((column) => (
                  <td key={column.key} className={column.align === "end" ? "align-end" : undefined}>
                    {column.render(row)}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
