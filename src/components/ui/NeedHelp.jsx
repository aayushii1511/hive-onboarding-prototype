import React from "react";
import { HelpCircle } from "lucide-react";

export function NeedHelp() {
  return (
    <button className="flex items-center justify-center gap-1.5 w-full text-green-600 font-semibold text-sm mt-2">
      <HelpCircle className="w-4 h-4" strokeWidth={2.25} />
      Need Help? Contact College Administrator
    </button>
  );
}
