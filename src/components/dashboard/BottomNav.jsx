import React from "react";
import { NAV_ITEMS } from "../../data/constants";

export function BottomNav({ navRefs }) {
  return (
    <div className="flex items-center justify-between px-5 pt-3 pb-4 border-t border-gray-100 bg-white relative">
      {NAV_ITEMS.map(({ key, icon: Icon, label }) => {
        const active = key === "buzz";
        return (
          <button
            key={key}
            ref={(el) => (navRefs.current[key] = el)}
            className="flex flex-col items-center gap-1 flex-1"
          >
            <Icon className={`w-5 h-5 ${active ? "text-green-600" : "text-gray-300"}`} strokeWidth={2} />
            <span className={`text-[11px] font-semibold ${active ? "text-green-600" : "text-gray-300"}`}>
              {label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
