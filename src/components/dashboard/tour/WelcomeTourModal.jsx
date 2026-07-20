import React from "react";
import { Sparkles } from "lucide-react";
import { ModalOverlay, Card } from "../../ui/Modal";

export function WelcomeTourModal({ onStart, onSkip }) {
  return (
    <ModalOverlay>
      <Card>
        <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center mx-auto mb-4">
          <Sparkles className="w-7 h-7 text-green-600" strokeWidth={2} />
        </div>
        <h2 className="text-lg font-extrabold text-teal-900 mb-2">Welcome to Hive! 👋</h2>
        <p className="text-gray-500 text-sm leading-relaxed mb-6">
          Let&apos;s take a quick 60-second tour to help you get started.
        </p>
        <button
          onClick={onStart}
          className="w-full rounded-full py-3.5 font-bold text-sm bg-green-600 text-white hover:bg-green-700 active:scale-[0.98] transition-all mb-2.5"
        >
          Start Tour
        </button>
        <button onClick={onSkip} className="w-full rounded-full py-3 font-bold text-sm text-gray-400">
          Skip for Now
        </button>
      </Card>
    </ModalOverlay>
  );
}
