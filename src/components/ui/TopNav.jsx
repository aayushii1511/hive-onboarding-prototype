import React from "react";
import { ChevronLeft } from "lucide-react";

export function TopNav({ onBack, title }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <button
        onClick={onBack}
        aria-label="Go back"
        className="w-9 h-9 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center flex-shrink-0"
      >
        <ChevronLeft className="w-4 h-4 text-teal-900" strokeWidth={2.5} />
      </button>
      <h2 className="text-teal-900 font-extrabold text-lg">{title}</h2>
    </div>
  );
}
