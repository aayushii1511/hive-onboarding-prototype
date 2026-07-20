import React from "react";
import { Sparkles } from "lucide-react";
import { NEW_FEATURE } from "../../data/constants";

export function WhatsNewPopup({ onTry, onLater }) {
  return (
    <div className="absolute inset-x-4 bottom-24 z-50 transition-all duration-300 ease-out">
      <div className="bg-white rounded-3xl p-5 shadow-2xl border border-green-100">
        <div className="flex items-start gap-3 mb-4">
          <div className="w-11 h-11 rounded-2xl bg-amber-100 flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-5 h-5 text-amber-500" strokeWidth={2.25} />
          </div>
          <div className="min-w-0">
            <p className="text-amber-600 font-bold text-[11px] uppercase tracking-wide mb-1">
              ✨ New Feature Available
            </p>
            <h3 className="text-teal-900 font-extrabold text-sm mb-1">{NEW_FEATURE.title}</h3>
            <p className="text-gray-500 text-xs leading-relaxed">{NEW_FEATURE.description}</p>
          </div>
        </div>
        <div className="flex items-center gap-2.5">
          <button onClick={onLater} className="flex-1 rounded-full py-3 font-bold text-xs text-gray-500 bg-gray-50">
            Maybe Later
          </button>
          <button
            onClick={onTry}
            className="flex-1 rounded-full py-3 font-bold text-xs text-white bg-green-600 hover:bg-green-700"
          >
            Try Now
          </button>
        </div>
      </div>
    </div>
  );
}
