"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const COOKIE_CONSENT_KEY = "kishib_cookie_consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const storedChoice = window.localStorage.getItem(COOKIE_CONSENT_KEY);
    setVisible(storedChoice !== "accepted" && storedChoice !== "rejected");
  }, []);

  const saveChoice = (choice: "accepted" | "rejected") => {
    window.localStorage.setItem(COOKIE_CONSENT_KEY, choice);
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <section className="cookieBanner" aria-label="Cookie consent">
      <div className="cookieInner">
        <p>
          KISHIB uses cookies to improve your experience, remember preferences, and analyze
          website performance. By continuing or clicking "Accept", you agree to our Cookie
          Policy.
        </p>

        <div className="cookieActions">
          <button type="button" className="acceptBtn" onClick={() => saveChoice("accepted")}>
            Accept
          </button>
          <button type="button" className="rejectBtn" onClick={() => saveChoice("rejected")}>
            Reject
          </button>
          <Link href="/cookies" className="policyLink">
            Cookie Policy
          </Link>
        </div>
      </div>

      <style jsx>{`
        .cookieBanner {
          position: fixed;
          right: 18px;
          bottom: 18px;
          left: 18px;
          z-index: 90;
          pointer-events: none;
        }

        .cookieInner {
          width: min(1080px, 100%);
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: center;
          gap: 18px;
          padding: 18px;
          border: 1px solid rgba(216, 182, 106, 0.34);
          border-radius: 8px;
          background:
            linear-gradient(135deg, rgba(216, 100, 34, 0.14), transparent 42%),
            rgba(5, 5, 5, 0.96);
          color: #ffffff;
          box-shadow: 0 22px 60px rgba(0, 0, 0, 0.34);
          pointer-events: auto;
        }

        p {
          margin: 0;
          color: rgba(255, 255, 255, 0.76);
          font-size: 14px;
          line-height: 1.65;
        }

        .cookieActions {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 9px;
          flex-wrap: wrap;
        }

        button,
        .policyLink {
          min-height: 40px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0 15px;
          border-radius: 0;
          font-size: 13px;
          font-weight: 900;
          line-height: 1;
          text-decoration: none;
          white-space: nowrap;
        }

        .acceptBtn {
          border: 1px solid #d8b66a;
          background: #d8b66a;
          color: #050505;
        }

        .rejectBtn {
          border: 1px solid rgba(255, 255, 255, 0.18);
          background: #111111;
          color: #ffffff;
        }

        .policyLink {
          border: 1px solid rgba(216, 182, 106, 0.38);
          color: #d8b66a;
        }

        @media (max-width: 760px) {
          .cookieBanner {
            right: 10px;
            bottom: 10px;
            left: 10px;
          }

          .cookieInner {
            grid-template-columns: 1fr;
            gap: 14px;
            padding: 14px;
          }

          p {
            font-size: 13px;
            line-height: 1.55;
          }

          .cookieActions {
            justify-content: stretch;
          }

          button,
          .policyLink {
            flex: 1 1 auto;
          }
        }
      `}</style>
    </section>
  );
}
