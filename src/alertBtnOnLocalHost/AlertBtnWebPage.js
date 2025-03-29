import React, { useEffect, useState } from "react";

function AlertBtnWebPage() {
  const [showInstallBtn, setShowInstallBtn] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallBtn(true); // Show install button
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = () => {
    if (!deferredPrompt) {
      alert("Install prompt not available. Ensure app is PWA-compatible.");
      return;
    }

    deferredPrompt.prompt();

    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the install prompt");
      } else {
        console.log("User dismissed the install prompt");
      }
      setDeferredPrompt(null);
      setShowInstallBtn(false);
    });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "120px" }}>
      <h3>PWA Install Prompt Example</h3>
      {showInstallBtn ? (
        <button id="install-btn" onClick={handleInstallClick}>Install App</button>
      ) : (
        <p>Install button will appear when available.</p>
      )}
    </div>
  );
}

export default AlertBtnWebPage;
