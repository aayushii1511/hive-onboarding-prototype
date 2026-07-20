import React from "react";
import { ShieldCheck } from "lucide-react";

export function ReadOnlyField({ icon: Icon, label, value }) {
  return (
    <div className="mb-4">
      <label className="block text-teal-900 font-semibold mb-1.5 text-sm">
        {label}
      </label>
      <div className="flex items-center gap-3 bg-gray-50 border border-green-100 rounded-2xl px-4 py-3.5">
        <Icon className="w-4 h-4 text-green-600 flex-shrink-0" strokeWidth={2.25} />
        <span className="text-teal-900 text-sm font-medium truncate">{value}</span>
        <ShieldCheck className="w-4 h-4 text-green-500 flex-shrink-0 ml-auto" strokeWidth={2.25} />
      </div>
    </div>
  );
}
