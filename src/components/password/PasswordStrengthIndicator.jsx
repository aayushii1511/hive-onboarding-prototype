import React from "react";

const LABELS = ["Too weak", "Weak", "Fair", "Good", "Strong"];
const COLORS = ["bg-gray-200", "bg-red-400", "bg-amber-400", "bg-amber-400", "bg-green-500"];

export function PasswordStrengthIndicator({ score }) {
  return (
    <div className="mb-5">
      <div className="flex gap-1.5 mb-1.5">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${
              i < score ? COLORS[score] : "bg-gray-200"
            }`}
          />
        ))}
      </div>
      <p className="text-xs font-semibold text-gray-400">{LABELS[score]}</p>
    </div>
  );
}
