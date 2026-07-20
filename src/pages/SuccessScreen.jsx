import React from "react";
import { CheckCircle2 } from "lucide-react";
import { PrimaryButton } from "../components/ui/Button";
import { VerifiedBadge } from "../components/ui/VerifiedBadge";
import { STUDENT } from "../data/constants";

export function SuccessScreen({ onGoToHive }) {
  return (
    <div className="flex flex-col min-h-full px-7 pt-16 pb-8 items-center text-center">
      <div className="relative mb-8">
        <div className="absolute inset-0 rounded-full bg-green-100 animate-ping opacity-40" />
        <div className="relative w-24 h-24 rounded-full bg-green-500 flex items-center justify-center shadow-lg shadow-green-200">
          <CheckCircle2 className="w-12 h-12 text-white" strokeWidth={2} />
        </div>
      </div>

      <h1 className="text-2xl font-extrabold text-teal-900 mb-3 leading-snug">
        Your account has been
        <br /> successfully activated.
      </h1>
      <p className="text-gray-500 text-sm mb-6 leading-relaxed max-w-xs">
        You&apos;re all set, {STUDENT.name.split(" ")[0]}. Use your new
        password to sign in to Hive from now on.
      </p>

      <VerifiedBadge />

      <div className="w-full mt-auto pt-10">
        <PrimaryButton onClick={onGoToHive}>Go to Hive</PrimaryButton>
      </div>
    </div>
  );
}
