import React from "react";

export function PrimaryButton({ children, onClick, disabled, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`w-full rounded-full py-4 font-bold text-base transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-green-200 ${
        disabled
          ? "bg-gray-200 text-gray-400 cursor-not-allowed"
          : "bg-green-600 text-white hover:bg-green-700 active:scale-[0.98] shadow-sm"
      }`}
    >
      {children}
    </button>
  );
}
