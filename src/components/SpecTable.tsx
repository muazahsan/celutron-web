import React from "react";

interface SpecTableProps {
  specs: Record<string, string>;
  title?: string;
}

export default function SpecTable({ specs, title }: SpecTableProps) {
  return (
    <div className="w-full rounded-2xl border border-zinc-200 bg-white overflow-hidden shadow-sm">
      {title && (
        <div className="border-b border-zinc-200 bg-slate-50 px-6 py-4">
          <h3 className="font-mono text-xs font-bold tracking-wider text-teal-800 uppercase">
            {title}
          </h3>
        </div>
      )}
      <div className="divide-y divide-zinc-100">
        {Object.entries(specs).map(([key, value]) => (
          <div key={key} className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-6 py-3.5 hover:bg-slate-50/80 transition-colors">
            <div className="text-sm font-medium text-zinc-600 select-none">
              {key}
            </div>
            <div className="text-sm font-mono text-zinc-950 font-bold break-words">
              {value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
