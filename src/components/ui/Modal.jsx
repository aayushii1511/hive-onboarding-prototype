import React from "react";

/** Full-screen dim/blur backdrop that centers its content. */
export function ModalOverlay({ children }) {
  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-6">
      {children}
    </div>
  );
}

/** White rounded card used as the body for centered modals. */
export function Card({ children, className = "" }) {
  return (
    <div className={`w-full max-w-xs bg-white rounded-3xl p-6 text-center shadow-xl ${className}`}>
      {children}
    </div>
  );
}
