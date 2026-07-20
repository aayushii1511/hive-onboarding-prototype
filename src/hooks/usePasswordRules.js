function checkRules(pw) {
  return {
    length: pw.length >= 8,
    upper: /[A-Z]/.test(pw),
    number: /[0-9]/.test(pw),
    special: /[^A-Za-z0-9]/.test(pw),
  };
}

/**
 * Derives password validation rules and a 0-4 strength score from a
 * raw password string. Pure derived state — no side effects.
 */
export function usePasswordRules(pw) {
  const rules = checkRules(pw);
  const score = Object.values(rules).filter(Boolean).length;
  return { rules, score };
}
