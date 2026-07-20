import React from "react";
import { TopNav } from "../components/ui/TopNav";
import { ProgressDots } from "../components/ui/ProgressDots";
import { PrimaryButton } from "../components/ui/Button";
import { NeedHelp } from "../components/ui/NeedHelp";
import { OtpInput } from "../components/otp/OtpInput";
import { useOtpInput } from "../hooks/useOtpInput";
import { STUDENT } from "../data/constants";

export function OtpScreen({ onBack, onVerify }) {
  const {
    digits,
    timer,
    error,
    setError,
    inputsRef,
    handleChange,
    handleKeyDown,
    resendCode,
    complete,
  } = useOtpInput(6, 30);

  const handleVerify = () => {
    if (!complete) return;
    setError(false);
    onVerify();
  };

  return (
    <div className="flex flex-col min-h-full px-7 pt-6 pb-8">
      <TopNav onBack={onBack} title="Enter Code" />
      <ProgressDots activeIndex={1} total={4} />

      <p className="text-gray-500 text-sm mb-1 leading-relaxed">
        We sent a 6-digit code to
      </p>
      <p className="text-teal-900 font-bold text-sm mb-7">{STUDENT.email}</p>

      <OtpInput
        digits={digits}
        error={error}
        inputsRef={inputsRef}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />

      {error && (
        <p className="text-red-500 text-xs mb-2 font-medium">
          That code didn&apos;t work. Please try again.
        </p>
      )}

      <div className="mb-8 mt-1">
        {timer > 0 ? (
          <p className="text-gray-400 text-sm">
            Resend code in{" "}
            <span className="text-teal-900 font-bold">0:{String(timer).padStart(2, "0")}</span>
          </p>
        ) : (
          <button onClick={resendCode} className="text-green-600 font-bold text-sm">
            Resend Code
          </button>
        )}
      </div>

      <div className="mt-auto">
        <PrimaryButton onClick={handleVerify} disabled={!complete}>
          Verify
        </PrimaryButton>
        <NeedHelp />
      </div>
    </div>
  );
}
