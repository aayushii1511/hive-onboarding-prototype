import { useEffect, useState } from "react";

/**
 * Measures the target nav item every time the active tour step changes,
 * so the spotlight and tooltip line up with the real rendered layout
 * (this is what makes it work on both narrow and wide viewports).
 */
export function useTourSpotlight({ tourStepIndex, tourSteps, containerRef, targetRefs }) {
  const [spotlightRect, setSpotlightRect] = useState(null);
  const [frameWidth, setFrameWidth] = useState(0);

  useEffect(() => {
    if (tourStepIndex === null) {
      setSpotlightRect(null);
      return;
    }
    const measure = () => {
      const key = tourSteps[tourStepIndex].key;
      const el = targetRefs.current[key];
      const container = containerRef.current;
      if (el && container) {
        const elRect = el.getBoundingClientRect();
        const contRect = container.getBoundingClientRect();
        setFrameWidth(contRect.width);
        setSpotlightRect({
          top: elRect.top - contRect.top,
          left: elRect.left - contRect.left,
          width: elRect.width,
          height: elRect.height,
        });
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tourStepIndex]);

  return { spotlightRect, frameWidth };
}
