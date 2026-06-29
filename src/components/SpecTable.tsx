import React from "react";

interface SpecTableProps {
  specs: Record<string, string>;
  title?: string;
}

export default function SpecTable({ specs, title }: SpecTableProps) {
  return (
    <div className="w-full border border-clinical-border bg-white overflow-hidden">
      {title && (
        <div className="border-b border-clinical-border bg-clinical-surface px-6 py-4">
          <h3 className="font-mono text-xs font-semibold tracking-wider text-clinical-text/60 uppercase">
            {title}
          </h3>
        </div>
      )}
      <div className="divide-y divide-clinical-border">
        {Object.entries(specs).map(([key, value]) => (
          <div key={key} className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-6 py-3.5 hover:bg-clinical-surface/40 transition-colors">
            <div className="text-sm font-medium text-clinical-text/75 select-none">
              {key}
            </div>
            <div className="text-sm font-mono text-clinical-text font-semibold break-words">
              {value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
