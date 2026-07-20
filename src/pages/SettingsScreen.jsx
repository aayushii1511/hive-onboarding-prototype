import React from "react";
import { RotateCcw, HelpCircle, ChevronRight } from "lucide-react";
import { TopNav } from "../components/ui/TopNav";
import { STUDENT } from "../data/constants";

export function SettingsScreen({ onBack, onReplayTour }) {
  return (
    <div className="flex flex-col min-h-full px-6 pt-6 pb-8">
      <TopNav onBack={onBack} title="Settings" />

      <p className="text-gray-400 text-xs font-bold uppercase tracking-wide mb-3 mt-2">Account</p>
      <div className="bg-gray-50 border border-gray-100 rounded-2xl p-4 mb-6">
        <p className="text-teal-900 font-bold text-sm">{STUDENT.name}</p>
        <p className="text-gray-400 text-xs mt-0.5">{STUDENT.email}</p>
      </div>

      <p className="text-gray-400 text-xs font-bold uppercase tracking-wide mb-3">Help</p>

      <button
        onClick={onReplayTour}
        className="w-full flex items-center gap-3 bg-white border border-gray-100 rounded-2xl px-4 py-3.5 mb-2.5 text-left hover:border-green-200 transition-colors"
      >
        <div className="w-9 h-9 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
          <RotateCcw className="w-4 h-4 text-green-600" strokeWidth={2.25} />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-teal-900 font-bold text-sm">Replay App Tour</p>
          <p className="text-gray-400 text-xs">Take the guided tour again</p>
        </div>
        <ChevronRight className="w-4 h-4 text-gray-300 flex-shrink-0" strokeWidth={2.25} />
      </button>

      <button className="w-full flex items-center gap-3 bg-white border border-gray-100 rounded-2xl px-4 py-3.5 text-left">
        <div className="w-9 h-9 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
          <HelpCircle className="w-4 h-4 text-green-600" strokeWidth={2.25} />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-teal-900 font-bold text-sm">Contact College Administrator</p>
          <p className="text-gray-400 text-xs">Get help with your account</p>
        </div>
        <ChevronRight className="w-4 h-4 text-gray-300 flex-shrink-0" strokeWidth={2.25} />
      </button>
    </div>
  );
}
