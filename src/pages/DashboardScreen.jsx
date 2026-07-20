import React, { useEffect, useRef, useState } from "react";
import { User, Settings, CheckCircle2 } from "lucide-react";
import { FeedCard } from "../components/dashboard/FeedCard";
import { BottomNav } from "../components/dashboard/BottomNav";
import { WhatsNewPopup } from "../components/dashboard/WhatsNewPopup";
import { WelcomeTourModal } from "../components/dashboard/tour/WelcomeTourModal";
import { TourSpotlight } from "../components/dashboard/tour/TourSpotlight";
import { CompletionModal } from "../components/dashboard/tour/CompletionModal";
import { SettingsScreen } from "./SettingsScreen";
import { useTourSpotlight } from "../hooks/useTourSpotlight";
import { STUDENT, TOUR_STEPS, FEED } from "../data/constants";

export function DashboardScreen() {
  const dashboardRef = useRef(null);
  const navRefs = useRef({});

  const [view, setView] = useState("feed"); // 'feed' | 'settings'
  const [showWelcomeModal, setShowWelcomeModal] = useState(true);
  const [tourStepIndex, setTourStepIndex] = useState(null); // null = not running
  const [showCompletion, setShowCompletion] = useState(false);
  const [whatsNewDismissed, setWhatsNewDismissed] = useState(false);
  const [showWhatsNew, setShowWhatsNew] = useState(false);

  const { spotlightRect, frameWidth } = useTourSpotlight({
    tourStepIndex,
    tourSteps: TOUR_STEPS,
    containerRef: dashboardRef,
    targetRefs: navRefs,
  });

  // Surface the "What's New" popup once, a beat after onboarding settles —
  // never again after it's been dismissed (mocked in-memory, see note below).
  useEffect(() => {
    if (
      !showWelcomeModal &&
      tourStepIndex === null &&
      !showCompletion &&
      !whatsNewDismissed &&
      !showWhatsNew &&
      view === "feed"
    ) {
      const id = setTimeout(() => setShowWhatsNew(true), 1600);
      return () => clearTimeout(id);
    }
  }, [showWelcomeModal, tourStepIndex, showCompletion, whatsNewDismissed, showWhatsNew, view]);

  const startTour = () => {
    setShowWelcomeModal(false);
    setTimeout(() => setTourStepIndex(0), 250);
  };

  const skipWelcome = () => setShowWelcomeModal(false);

  const nextTourStep = () => {
    if (tourStepIndex < TOUR_STEPS.length - 1) {
      setTourStepIndex((i) => i + 1);
    } else {
      setTourStepIndex(null);
      setShowCompletion(true);
    }
  };

  const skipTour = () => setTourStepIndex(null);

  const replayTour = () => {
    setView("feed");
    setTimeout(() => setTourStepIndex(0), 250);
  };

  const dismissWhatsNew = () => {
    setShowWhatsNew(false);
    setWhatsNewDismissed(true);
  };

  return (
    <div ref={dashboardRef} className="relative flex flex-col min-h-full bg-white overflow-hidden">
      {view === "feed" ? (
        <>
          <div className="px-6 pt-6 pb-4">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-11 h-11 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <User className="w-5 h-5 text-green-600" strokeWidth={2.25} />
                </div>
                <h1 className="text-xl font-extrabold text-teal-900 truncate">
                  Hey {STUDENT.name.split(" ")[0]}
                </h1>
              </div>
              <button
                onClick={() => setView("settings")}
                aria-label="Open settings"
                className="w-9 h-9 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center flex-shrink-0"
              >
                <Settings className="w-4 h-4 text-teal-900" strokeWidth={2.25} />
              </button>
            </div>
            <div className="flex items-center gap-6 border-b border-gray-100">
              <span className="text-green-600 font-bold text-sm pb-2.5 border-b-2 border-green-600">All</span>
            </div>
          </div>

          <div className="flex-1 px-6 overflow-y-auto pb-2">
            <div className="bg-green-50 border border-green-100 rounded-2xl p-4 flex items-center gap-3 mb-5">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" strokeWidth={2.25} />
              <p className="text-teal-900 text-xs font-medium leading-relaxed">
                Account activated — welcome to the swarm, {STUDENT.name.split(" ")[0]}!
              </p>
            </div>
            {FEED.map((item, i) => (
              <FeedCard key={i} item={item} />
            ))}
          </div>

          <BottomNav navRefs={navRefs} />
        </>
      ) : (
        <SettingsScreen onBack={() => setView("feed")} onReplayTour={replayTour} />
      )}

      {showWelcomeModal && <WelcomeTourModal onStart={startTour} onSkip={skipWelcome} />}

      {tourStepIndex !== null && spotlightRect && (
        <TourSpotlight
          step={TOUR_STEPS[tourStepIndex]}
          stepIndex={tourStepIndex}
          totalSteps={TOUR_STEPS.length}
          rect={spotlightRect}
          frameWidth={frameWidth}
          onNext={nextTourStep}
          onSkip={skipTour}
        />
      )}

      {showCompletion && <CompletionModal onFinish={() => setShowCompletion(false)} />}

      {showWhatsNew && <WhatsNewPopup onTry={dismissWhatsNew} onLater={dismissWhatsNew} />}
    </div>
  );
}
