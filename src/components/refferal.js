import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ReferralRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get("ref");

    if (userId) {
      const appLink = `mypickup://refer?ref=${userId}`;
      const playStoreLink =
        "https://play.google.com/store/apps/details?id=in.mypickup.mypickup";
      const appStoreLink =
        "https://apps.apple.com/in/app/mypickup/id6737308804";

      // Try opening the app
      window.location.href = appLink;

      setTimeout(() => {
        if (document.hidden || document.webkitHidden) {
          console.log("App opened successfully");
        } else {
          // App is not installed, redirect to the Play Store or App Store
          console.log("window.location.href:", window.location.href);
          if (/android/i.test(navigator.userAgent)) {
            window.location.href = playStoreLink;
            console.log("window.location.href2:", window.location.href);
          } else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
            window.location.href = appStoreLink;
            console.log("window.location.href3:", window.location.href);
          }
        }
      }, 2500);
    } else {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div>
      <h2>Redirecting...</h2>
    </div>
  );
};

export default ReferralRedirect;
