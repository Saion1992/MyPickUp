import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const ReferralRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get("referral_code");

    if (userId) {
      const playStoreLink = `https://play.google.com/store/apps/details?id=in.mypickup.mypickup&referrer=${userId}`;
      const appStoreLink = `https://apps.apple.com/in/app/mypickup/id6737308804?referrer=${userId}`;

      if (/android/i.test(navigator.userAgent)) {
        window.location.replace(playStoreLink);
      } else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        window.location.replace(appStoreLink);
      } else {
        navigate("/");
      }
    } else {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div>
      <h2>Redirecting...</h2>
      <p>
        If the redirection does not work,
        <a href="https://play.google.com/store/apps/details?id=in.mypickup.mypickup">
          click here for Play Store
        </a>
        or
        <a href="https://apps.apple.com/in/app/mypickup/id6737308804">
          click here for App Store
        </a>
      </p>
    </div>
  );
};

export default ReferralRedirect;
