import React from "react";
import { User } from "lucide-react";
import { HiveLogo } from "../components/ui/HiveLogo";
import { PrimaryButton } from "../components/ui/Button";
import { STUDENT } from "../data/constants";

export function WelcomeScreen({ onContinue }) {
  return (
    <div className="flex flex-col min-h-full px-7 pt-10 pb-8">
      <div className="relative mb-10">
        <div className="absolute -top-4 -left-2 w-24 h-24 border-2 border-dashed border-amber-300 rounded-full opacity-60" />
        <div className="relative flex justify-center pt-6">
          <HiveLogo size="text-5xl" />
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center">
        <h1 className="text-3xl font-extrabold text-teal-900 mb-3 leading-snug">
          Welcome to Hive 👋
        </h1>
        <p className="text-gray-500 text-[15px] leading-relaxed mb-8">
          Your college has already created your Hive account. Let&apos;s
          verify your identity to activate your account.
        </p>

        <div className="bg-green-50 border border-green-100 rounded-2xl p-4 flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0">
            <User className="w-5 h-5 text-green-600" strokeWidth={2.25} />
          </div>
          <div className="min-w-0">
            <p className="text-teal-900 font-bold text-sm truncate">{STUDENT.name}</p>
            <p className="text-gray-500 text-xs truncate">{STUDENT.college}</p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <PrimaryButton onClick={onContinue}>Continue</PrimaryButton>
      </div>
    </div>
  );
}
