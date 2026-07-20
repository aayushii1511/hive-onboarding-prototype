import React from "react";
import { ShieldCheck } from "lucide-react";

export function VerifiedBadge() {
  return (
    <div className="inline-flex items-center gap-1.5 bg-green-50 border border-green-200 text-green-700 text-xs font-bold px-3 py-1.5 rounded-full">
      <ShieldCheck className="w-3.5 h-3.5" strokeWidth={2.5} />
      Verified by Padre Conceicao College
    </div>
  );
}
