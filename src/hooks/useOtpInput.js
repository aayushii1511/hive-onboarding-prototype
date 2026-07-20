import { useEffect, useRef, useState } from "react";

/**
 * Encapsulates the state and behavior for a segmented OTP input:
 * digit values, auto-advance/backspace focus handling, error state,
 * and the resend countdown timer.
 */
export function useOtpInput(length = 6, resendSeconds = 30) {
  const [digits, setDigits] = useState(Array(length).fill(""));
  const [timer, setTimer] = useState(resendSeconds);
  const [error, setError] = useState(false);
  const inputsRef = useRef([]);

  useEffect(() => {
    if (timer === 0) return;
    const id = setInterval(() => setTimer((t) => Math.max(0, t - 1)), 1000);
    return () => clearInterval(id);
  }, [timer]);

  const handleChange = (i, val) => {
    if (!/^[0-9]?$/.test(val)) return;
    const next = [...digits];
    next[i] = val;
    setDigits(next);
    setError(false);
    if (val && i < length - 1) inputsRef.current[i + 1]?.focus();
  };

  const handleKeyDown = (i, e) => {
    if (e.key === "Backspace" && !digits[i] && i > 0) {
      inputsRef.current[i - 1]?.focus();
    }
  };

  const resendCode = () => setTimer(resendSeconds);

  const code = digits.join("");
  const complete = code.length === length;

  return {
    digits,
    timer,
    error,
    setError,
    inputsRef,
    handleChange,
    handleKeyDown,
    resendCode,
    code,
    complete,
  };
}
