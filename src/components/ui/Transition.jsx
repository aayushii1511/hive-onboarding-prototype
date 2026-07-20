import React from "react";

/** Wrapper that gives every onboarding step the same slide + fade transition */
export function Transition({ visible, children }) {
  return (
    <div
      className={`transition-all duration-300 ease-out ${
        visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-3"
      }`}
    >
      {children}
    </div>
  );
}
