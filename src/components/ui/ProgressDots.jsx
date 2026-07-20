import React from "react";

export function ProgressDots({ activeIndex, total }) {
  return (
    <div className="flex items-center justify-center gap-2 mb-8">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={`h-1.5 rounded-full transition-all duration-300 ${
            i === activeIndex
              ? "w-6 bg-green-600"
              : i < activeIndex
              ? "w-1.5 bg-green-300"
              : "w-1.5 bg-gray-200"
          }`}
        />
      ))}
    </div>
  );
}
