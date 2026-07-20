import React from "react";
import { Check } from "lucide-react";

export function ChecklistItem({ ok, children }) {
  return (
    <div className="flex items-center gap-2">
      <div
        className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-200 ${
          ok ? "bg-green-500" : "bg-gray-200"
        }`}
      >
        {ok && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
      </div>
      <span className={`text-xs font-medium ${ok ? "text-teal-900" : "text-gray-400"}`}>
        {children}
      </span>
    </div>
  );
}
