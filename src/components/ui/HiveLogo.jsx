import React from "react";
import { Sparkles } from "lucide-react";

export function HiveLogo({ size = "text-4xl" }) {
  return (
    <div className="flex items-center justify-center gap-2">
      <div className="w-8 h-8 rounded-full bg-amber-300 flex items-center justify-center shadow-sm">
        <Sparkles className="w-4 h-4 text-white" strokeWidth={2.5} />
      </div>
      <span className={`${size} font-extrabold text-green-600 tracking-tight`}>
        hive
      </span>
    </div>
  );
}
