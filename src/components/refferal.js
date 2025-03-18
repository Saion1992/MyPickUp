import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ReferralRedirect = () => {
  const navigate = useNavigate();
  const [redirectLink, setRedirectLink] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get("referral_code");

    if (userId) {
      const playStoreLink = `https://play.google.com/store/apps/details?id=in.mypickup.mypickup&referrer=${userId}`;
      const appStoreLink = `https://apps.apple.com/in/app/mypickup/id6737308804?referrer=${userId}`;

      if (/android/i.test(navigator.userAgent)) {
        setRedirectLink(playStoreLink);
      } else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        setRedirectLink(appStoreLink);
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
      {redirectLink ? (
        <a href={redirectLink}>
          Click here if you are not redirected automatically.
        </a>
      ) : (
        <p>
          Invalid referral code or unsupported platform. Redirecting to the
          homepage...
        </p>
      )}
    </div>
  );
};

export default ReferralRedirect;
