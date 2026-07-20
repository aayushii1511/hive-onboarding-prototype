import React from "react";
import { PartyPopper } from "lucide-react";
import { ModalOverlay, Card } from "../../ui/Modal";

export function CompletionModal({ onFinish }) {
  return (
    <ModalOverlay>
      <Card>
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <PartyPopper className="w-8 h-8 text-green-600" strokeWidth={2} />
        </div>
        <h2 className="text-lg font-extrabold text-teal-900 mb-2">You&apos;re all set! 🎉</h2>
        <p className="text-gray-500 text-sm leading-relaxed mb-6">Enjoy exploring Hive.</p>
        <button
          onClick={onFinish}
          className="w-full rounded-full py-3.5 font-bold text-sm bg-green-600 text-white hover:bg-green-700 active:scale-[0.98] transition-all"
        >
          Start Using Hive
        </button>
      </Card>
    </ModalOverlay>
  );
}
