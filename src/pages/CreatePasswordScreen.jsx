import React, { useState } from "react";
import { Lock, Eye, EyeOff } from "lucide-react";
import { TopNav } from "../components/ui/TopNav";
import { ProgressDots } from "../components/ui/ProgressDots";
import { PrimaryButton } from "../components/ui/Button";
import { NeedHelp } from "../components/ui/NeedHelp";
import { PasswordStrengthIndicator } from "../components/password/PasswordStrengthIndicator";
import { PasswordRulesChecklist } from "../components/password/PasswordRulesChecklist";
import { usePasswordRules } from "../hooks/usePasswordRules";

export function CreatePasswordScreen({ onBack, onDone }) {
  const [pw, setPw] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const { rules, score } = usePasswordRules(pw);
  const match = confirm.length > 0 && pw === confirm;
  const allGood = score === 4 && match;

  return (
    <div className="flex flex-col min-h-full px-7 pt-6 pb-8">
      <TopNav onBack={onBack} title="Create Password" />
      <ProgressDots activeIndex={2} total={4} />

      <p className="text-gray-500 text-sm mb-6 leading-relaxed">
        Choose a password only you know. You&apos;ll use it to sign in from
        now on.
      </p>

      <div className="mb-4">
        <label className="block text-teal-900 font-semibold mb-1.5 text-sm">Password</label>
        <div className="flex items-center gap-3 bg-gray-50 border border-green-100 rounded-2xl px-4 py-3.5 focus-within:border-green-400 transition-colors">
          <Lock className="w-4 h-4 text-teal-900 flex-shrink-0" strokeWidth={2.25} />
          <input
            type={showPw ? "text" : "password"}
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            placeholder="Enter your password"
            className="flex-1 bg-transparent text-sm text-teal-900 placeholder-gray-400 focus:outline-none min-w-0"
          />
          <button type="button" onClick={() => setShowPw((s) => !s)} aria-label={showPw ? "Hide password" : "Show password"}>
            {showPw ? <EyeOff className="w-4 h-4 text-gray-400" strokeWidth={2.25} /> : <Eye className="w-4 h-4 text-gray-400" strokeWidth={2.25} />}
          </button>
        </div>
      </div>

      {pw.length > 0 && <PasswordStrengthIndicator score={score} />}

      <div className="mb-5">
        <label className="block text-teal-900 font-semibold mb-1.5 text-sm">Confirm Password</label>
        <div
          className={`flex items-center gap-3 bg-gray-50 border rounded-2xl px-4 py-3.5 transition-colors ${
            confirm.length > 0 && !match ? "border-red-300" : "border-green-100 focus-within:border-green-400"
          }`}
        >
          <Lock className="w-4 h-4 text-teal-900 flex-shrink-0" strokeWidth={2.25} />
          <input
            type={showConfirm ? "text" : "password"}
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            placeholder="Re-enter your password"
            className="flex-1 bg-transparent text-sm text-teal-900 placeholder-gray-400 focus:outline-none min-w-0"
          />
          <button type="button" onClick={() => setShowConfirm((s) => !s)} aria-label={showConfirm ? "Hide password" : "Show password"}>
            {showConfirm ? <EyeOff className="w-4 h-4 text-gray-400" strokeWidth={2.25} /> : <Eye className="w-4 h-4 text-gray-400" strokeWidth={2.25} />}
          </button>
        </div>
        {confirm.length > 0 && !match && (
          <p className="text-red-500 text-xs mt-1.5 font-medium">Passwords don&apos;t match</p>
        )}
      </div>

      <PasswordRulesChecklist rules={rules} />

      <div className="mt-auto">
        <PrimaryButton onClick={onDone} disabled={!allGood}>
          Continue
        </PrimaryButton>
        <NeedHelp />
      </div>
    </div>
  );
}
