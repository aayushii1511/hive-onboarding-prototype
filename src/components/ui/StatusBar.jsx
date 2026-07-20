import React from "react";
import { Wifi, Signal, BatteryFull } from "lucide-react";

export function StatusBar() {
  return (
    <div className="flex items-center justify-between px-6 pt-3 pb-1 text-teal-900 text-sm font-semibold select-none">
      <span>11:47</span>
      <div className="flex items-center gap-1.5">
        <Signal className="w-4 h-4" strokeWidth={2.5} />
        <Wifi className="w-4 h-4" strokeWidth={2.5} />
        <BatteryFull className="w-5 h-5" strokeWidth={2} />
      </div>
    </div>
  );
}
