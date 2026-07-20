import React from "react";
import { ChecklistItem } from "./ChecklistItem";

export function PasswordRulesChecklist({ rules }) {
  return (
    <div className="bg-green-50 border border-green-100 rounded-2xl p-4 grid grid-cols-2 gap-y-3 gap-x-2 mb-8">
      <ChecklistItem ok={rules.length}>Minimum 8 characters</ChecklistItem>
      <ChecklistItem ok={rules.upper}>Uppercase letter</ChecklistItem>
      <ChecklistItem ok={rules.number}>Number</ChecklistItem>
      <ChecklistItem ok={rules.special}>Special character</ChecklistItem>
    </div>
  );
}
