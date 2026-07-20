import { useCallback, useState } from "react";

/**
 * Drives the onboarding step index with a brief fade-out/fade-in so
 * screen changes feel like a transition instead of an instant swap.
 */
export function useStepTransition(initialIndex = 0, transitionMs = 220) {
  const [stepIndex, setStepIndex] = useState(initialIndex);
  const [visible, setVisible] = useState(true);

  const goTo = useCallback(
    (idx) => {
      setVisible(false);
      setTimeout(() => {
        setStepIndex(idx);
        setVisible(true);
      }, transitionMs);
    },
    [transitionMs]
  );

  return { stepIndex, visible, goTo };
}
