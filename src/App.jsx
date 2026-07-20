import React, { useState } from "react";
import { StatusBar } from "./components/ui/StatusBar";
import { Transition } from "./components/ui/Transition";
import { WelcomeScreen } from "./pages/WelcomeScreen";
import { VerifyIdentityScreen } from "./pages/VerifyIdentityScreen";
import { OtpScreen } from "./pages/OtpScreen";
import { CreatePasswordScreen } from "./pages/CreatePasswordScreen";
import { SuccessScreen } from "./pages/SuccessScreen";
import { DashboardScreen } from "./pages/DashboardScreen";
import { useStepTransition } from "./hooks/useStepTransition";
import { STEPS } from "./data/constants";

export default function App() {
  const { stepIndex, visible, goTo } = useStepTransition(0);
  const [sending, setSending] = useState(false);
  const step = STEPS[stepIndex];

  const handleSendCode = () => {
    setSending(true);
    setTimeout(() => {
      setSending(false);
      goTo(2);
    }, 900);
  };

  const isDashboard = step === "dashboard";

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-6 px-3 font-sans">
      <div
        className="w-full max-w-sm bg-white rounded-[2.5rem] shadow-xl overflow-hidden border-8 border-gray-900 flex flex-col"
        style={{ height: "812px" }}
      >
        {!isDashboard && <StatusBar />}
        <div className="flex-1 overflow-y-auto relative">
          <Transition visible={visible}>
            {step === "welcome" && <WelcomeScreen onContinue={() => goTo(1)} />}
            {step === "verify" && (
              <VerifyIdentityScreen onBack={() => goTo(0)} onSend={handleSendCode} sending={sending} />
            )}
            {step === "otp" && <OtpScreen onBack={() => goTo(1)} onVerify={() => goTo(3)} />}
            {step === "password" && <CreatePasswordScreen onBack={() => goTo(2)} onDone={() => goTo(4)} />}
            {step === "success" && <SuccessScreen onGoToHive={() => goTo(5)} />}
            {step === "dashboard" && <DashboardScreen />}
          </Transition>
        </div>
      </div>
    </div>
  );
}
