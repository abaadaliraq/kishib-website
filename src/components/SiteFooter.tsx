"use client";

import { Mail } from "lucide-react";

import {
  footerUtilityLinks,
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
  return (
    <footer className="footer" id="contact">
      <div className="footerInner">
        <div className="footerBrand">
          <strong>KISHIB</strong>
          <p>{footer.rights}</p>
        </div>

        <div>
          <h2>{footer.linksTitle}</h2>
          <nav className="footerLinks" aria-label="Footer links">
            {nav.map((item) => (
              <a key={`footer-${item.key}`} href={item.href}>
                {item.label}
              </a>
            ))}
            {footerUtilityLinks.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label[lang]}
              </a>
            ))}
          </nav>
        </div>

        <div>
          <h2>{footer.contactTitle}</h2>
          <div className="socialLinks">
            {socialLinks.map((item) => (
              <a key={item} href="#">
                {item}
              </a>
            ))}
          </div>
        </div>

        <form className="contactForm">
          <h2>{footer.formTitle}</h2>
          <input type="text" placeholder={footer.name} aria-label={footer.name} />
          <input type="email" placeholder={footer.email} aria-label={footer.email} />
          <textarea placeholder={footer.message} aria-label={footer.message} />
          <button type="button">
            <Mail size={16} />
            {footer.send}
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
        .socialLinks {
          display: grid;
          gap: 8px;
        }

        .footerLinks {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .footerLinks a,
        .socialLinks a {
          color: rgba(255, 255, 255, 0.68);
          font-size: 13px;
          line-height: 1.35;
          text-decoration: none;
        }

        .footerLinks a:hover,
        .socialLinks a:hover {
          color: #ffffff;
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
            grid-template-columns: 1fr;
            gap: 22px;
          }
        }
      `}</style>
    </footer>
  );
}
