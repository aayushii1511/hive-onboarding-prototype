import React from "react";
import { ArrowRight } from "lucide-react";

export function TourSpotlight({ step, stepIndex, totalSteps, rect, frameWidth, onNext, onSkip }) {
  const pad = 8;
  const highlightStyle = {
    top: rect.top - pad,
    left: rect.left - pad,
    width: rect.width + pad * 2,
    height: rect.height + pad * 2,
  };

  const tooltipWidth = 250;
  const rawLeft = rect.left + rect.width / 2 - tooltipWidth / 2;
  const minLeft = 12;
  const maxLeft = Math.max(minLeft, frameWidth - tooltipWidth - 12);
  const tooltipLeft = Math.min(Math.max(rawLeft, minLeft), maxLeft);
  const arrowOffset = Math.min(
    Math.max(rect.left + rect.width / 2 - tooltipLeft, 24),
    tooltipWidth - 24
  );

  const isLast = stepIndex === totalSteps - 1;

  return (
    <div className="absolute inset-0 z-50">
      <div
        className="absolute rounded-2xl transition-all duration-300 ease-out pointer-events-none"
        style={{ ...highlightStyle, boxShadow: "0 0 0 9999px rgba(15, 23, 42, 0.72)" }}
      />
      <div
        className="absolute rounded-2xl ring-2 ring-amber-300 pointer-events-none transition-all duration-300 ease-out"
        style={highlightStyle}
      />

      <div
        className="absolute transition-all duration-300 ease-out"
        style={{ left: tooltipLeft, top: rect.top - 176, width: tooltipWidth }}
      >
        <div className="bg-white rounded-2xl p-4 shadow-xl">
          <div className="flex items-center gap-1.5 mb-3">
            {Array.from({ length: totalSteps }).map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === stepIndex ? "w-5 bg-green-600" : i < stepIndex ? "w-1.5 bg-green-300" : "w-1.5 bg-gray-200"
                }`}
              />
            ))}
          </div>
          <h3 className="text-teal-900 font-extrabold text-sm mb-1.5">{step.title}</h3>
          <p className="text-gray-500 text-xs leading-relaxed mb-4">{step.description}</p>
          <div className="flex items-center justify-between">
            <button onClick={onSkip} className="text-gray-400 font-semibold text-xs">
              Skip tour
            </button>
            <button
              onClick={onNext}
              className="flex items-center gap-1 bg-green-600 hover:bg-green-700 text-white font-bold text-xs px-4 py-2.5 rounded-full transition-colors"
            >
              {isLast ? "Finish" : "Next"}
              <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.5} />
            </button>
          </div>
        </div>
        <div
          className="w-3 h-3 bg-white rotate-45 -mt-1.5"
          style={{ marginLeft: arrowOffset - 6 }}
        />
      </div>
    </div>
  );
}
