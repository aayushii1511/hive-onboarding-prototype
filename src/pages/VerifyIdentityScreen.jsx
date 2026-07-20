import React from "react";
import { Mail, Building2, User } from "lucide-react";
import { TopNav } from "../components/ui/TopNav";
import { ProgressDots } from "../components/ui/ProgressDots";
import { ReadOnlyField } from "../components/ui/ReadOnlyField";
import { PrimaryButton } from "../components/ui/Button";
import { NeedHelp } from "../components/ui/NeedHelp";
import { STUDENT } from "../data/constants";

export function VerifyIdentityScreen({ onBack, onSend, sending }) {
  return (
    <div className="flex flex-col min-h-full px-7 pt-6 pb-8">
      <TopNav onBack={onBack} title="Verify Identity" />
      <ProgressDots activeIndex={0} total={4} />

      <p className="text-gray-500 text-sm mb-6 leading-relaxed">
        Here&apos;s what your college shared with us. Confirm it&apos;s you
        to activate your account.
      </p>

      <ReadOnlyField icon={User} label="Name" value={STUDENT.name} />
      <ReadOnlyField icon={Building2} label="College" value={STUDENT.college} />
      <ReadOnlyField icon={Mail} label="College Email" value={STUDENT.email} />

      <p className="text-gray-400 text-xs mb-8 mt-1">
        This information has been provided by your institution.
      </p>

      <div className="mt-auto">
        <PrimaryButton onClick={onSend} disabled={sending}>
          {sending ? "Sending Code…" : "Send Verification Code"}
        </PrimaryButton>
        <NeedHelp />
      </div>
    </div>
  );
}
