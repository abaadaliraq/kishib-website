"use client";

import type { FormEvent } from "react";
import { Mail } from "lucide-react";

import SocialIcon from "@/components/SocialIcon";
import {
  footerUtilityLinks,
  kishibContent,
  officialEmails,
  socialLinks,
  type Lang,
  type KishibContent,
  type NavItem,
} from "@/data/kishibContent";

type SiteFooterProps = {
  nav: NavItem[];
  footer: KishibContent["footer"];
  lang?: Lang;
};

export default function SiteFooter({ nav, footer, lang = "en" }: SiteFooterProps) {
  const footerContent = kishibContent.en.footer;
  const footerNav = nav.map((item) => ({
    ...item,
    label: kishibContent.en.nav.find((navItem) => navItem.key === item.key)?.label ?? item.label,
  }));

  function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const message = String(formData.get("message") ?? "");
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      "",
      "Message:",
      message,
    ].join("\n");

    window.location.href = `mailto:contact@kishibapp.com?subject=${encodeURIComponent(
      "KISHIB Website Contact",
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <footer className="footer" id="contact" dir="ltr">
      <div className="footerInner">
        <div className="footerBrand">
          <strong>KISHIB</strong>
          <p>{footerContent.rights}</p>
        </div>

        <div>
          <h2>{footerContent.linksTitle}</h2>
          <nav className="footerLinks" aria-label="Footer links">
            {footerNav.map((item) => (
              <a key={`footer-${item.key}`} href={item.href}>
                {item.label}
              </a>
            ))}
            {footerUtilityLinks.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label.en}
              </a>
            ))}
          </nav>
        </div>

        <div>
          <h2>{footerContent.contactTitle}</h2>
          <div className="socialLinks">
            {socialLinks.map((item) => {
              return (
                item.href ? (
                  <a key={item.label} href={item.href} aria-label={item.label} title={item.label}>
                    <SocialIcon icon={item.icon} size={17} />
                    <span>{item.label}</span>
                  </a>
                ) : (
                  <span key={item.label} className="socialIcon" aria-label={item.label} title={item.label}>
                    <SocialIcon icon={item.icon} size={17} />
                    <span>{item.label}</span>
                  </span>
                )
              );
            })}
          </div>
          <div className="officialEmails">
            {officialEmails.map((item) => (
              <a key={item.email} href={`mailto:${item.email}`}>
                <Mail size={14} />
                <span>
                  <strong>{item.label}</strong>
                  <em>{item.email}</em>
                </span>
              </a>
            ))}
          </div>
        </div>

        <form className="contactForm" onSubmit={handleContactSubmit}>
          <h2>{footerContent.formTitle}</h2>
          <input name="name" type="text" placeholder={footerContent.name} aria-label={footerContent.name} />
          <input name="email" type="email" placeholder={footerContent.email} aria-label={footerContent.email} />
          <textarea name="message" placeholder={footerContent.message} aria-label={footerContent.message} />
          <button type="submit">
            <Mail size={16} />
            {footerContent.send}
          </button>
        </form>
      </div>

      <style jsx>{`
        .footer {
          padding: 42px 18px 30px;
          background: #050505;
          color: #ffffff;
          border-top: 1px solid rgba(216, 182, 106, 0.18);
        }

        .footerInner {
          width: min(1080px, 100%);
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.2fr 1fr 0.8fr 1.25fr;
          gap: 28px;
          align-items: start;
        }

        .footerBrand strong {
          display: block;
          color: #d8b66a;
          font-size: 16px;
          font-weight: 900;
          letter-spacing: 0.18em;
          text-shadow: 0 0 18px rgba(216, 100, 34, 0.24);
        }

        .footerBrand p {
          margin: 16px 0 0;
          color: rgba(255, 255, 255, 0.58);
          font-size: 13px;
          line-height: 1.6;
        }

        .footer h2 {
          margin: 0 0 12px;
          color: #d8b66a;
          font-size: 13px;
          line-height: 1.2;
          font-weight: 900;
        }

        .footerLinks,
        .socialLinks,
        .officialEmails {
          display: grid;
          gap: 8px;
        }

        .footerLinks {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .socialLinks {
          grid-template-columns: repeat(4, 36px);
        }

        .footerLinks a,
        .socialLinks a,
        .socialIcon,
        .officialEmails a {
          color: rgba(255, 255, 255, 0.68);
          font-size: 13px;
          line-height: 1.35;
          text-decoration: none;
        }

        .socialLinks a,
        .socialIcon {
          width: 36px;
          height: 36px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(216, 182, 106, 0.26);
          background: rgba(255, 255, 255, 0.04);
        }

        .socialIcon {
          opacity: 0.72;
        }

        .socialLinks span span,
        .socialLinks a span {
          position: absolute;
          width: 1px;
          height: 1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
        }

        .footerLinks a:hover,
        .socialLinks a:hover,
        .officialEmails a:hover {
          color: #ffffff;
        }

        .officialEmails {
          margin-top: 14px;
          gap: 7px;
        }

        .officialEmails a {
          display: grid;
          grid-template-columns: 14px auto;
          align-items: center;
          gap: 7px;
          line-height: 1.2;
        }

        .officialEmails span {
          display: grid;
          gap: 2px;
          min-width: 0;
        }

        .officialEmails strong {
          color: rgba(216, 182, 106, 0.76);
          font-size: 12px;
          font-weight: 800;
          font-style: normal;
        }

        .officialEmails em {
          min-width: 0;
          overflow-wrap: anywhere;
          color: rgba(255, 255, 255, 0.68);
          font-style: normal;
          font-size: 12px;
        }

        .contactForm {
          display: grid;
          gap: 8px;
        }

        .contactForm input,
        .contactForm textarea {
          width: 100%;
          min-height: 40px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: #111111;
          color: #ffffff;
          padding: 10px 12px;
          outline: 0;
        }

        .contactForm textarea {
          min-height: 78px;
          resize: vertical;
        }

        .contactForm input::placeholder,
        .contactForm textarea::placeholder {
          color: rgba(255, 255, 255, 0.46);
        }

        .contactForm button {
          width: fit-content;
          min-height: 44px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          margin-top: 2px;
          padding: 0 18px;
          border: 1px solid #d8b66a;
          background: #d8b66a;
          color: #050505;
          font-size: 14px;
          font-weight: 850;
        }

        @media (max-width: 900px) {
          .footer {
            padding: 34px 14px 24px;
          }

          .footerInner {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 18px 16px;
          }
        }
      `}</style>
    </footer>
  );
}
