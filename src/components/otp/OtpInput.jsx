import React from "react";

/**
 * Renders a row of single-digit boxes. All state lives in the caller
 * (see useOtpInput) — this component is purely presentational so it
 * can be reused anywhere a segmented code input is needed.
 */
export function OtpInput({ digits, error, inputsRef, onChange, onKeyDown }) {
  return (
    <div className="flex justify-between gap-2 mb-4">
      {digits.map((d, i) => (
        <input
          key={i}
          ref={(el) => (inputsRef.current[i] = el)}
          value={d}
          onChange={(e) => onChange(i, e.target.value)}
          onKeyDown={(e) => onKeyDown(i, e)}
          inputMode="numeric"
          maxLength={1}
          aria-label={`Digit ${i + 1}`}
          className={`w-full aspect-square text-center text-xl font-bold rounded-2xl border-2 bg-gray-50 text-teal-900 focus:outline-none focus:ring-4 focus:ring-green-100 transition-colors ${
            error ? "border-red-300" : d ? "border-green-500" : "border-green-100"
          }`}
        />
      ))}
    </div>
  );
}
