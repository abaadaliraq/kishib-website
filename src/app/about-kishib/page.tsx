"use client";

import Image from "next/image";
import {
  Mail,
  Quote,
} from "lucide-react";
import type { FormEvent } from "react";
import { useMemo, useState } from "react";

import SocialIcon from "@/components/SocialIcon";
import TopBar from "@/components/TopBar";
import {
  footerUtilityLinks,
  kishibContent,
  officialEmails,
  socialLinks,
  type Lang,
} from "@/data/kishibContent";

export default function AboutKishibPage() {
  const [lang, setLang] = useState<Lang>("ar");
  const isAr = lang === "ar";
  const dir = useMemo(() => (isAr ? "rtl" : "ltr"), [isAr]);
  const t = kishibContent[lang];
  const footerContent = kishibContent.en.footer;
  const homeNav = t.nav.map((item) => ({
    ...item,
    href: item.href.startsWith("#") ? `/${item.href}` : item.href,
  }));
  const footerNav = kishibContent.en.nav.map((item) => ({
    ...item,
    href: item.href.startsWith("#") ? `/${item.href}` : item.href,
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
    <main className="aboutSite" dir={dir}>
      <TopBar
        nav={homeNav}
        langLabel={t.langLabel}
        brandHref="/#home"
        onToggleLang={() => setLang(isAr ? "en" : "ar")}
      />

      <section className="aboutHero">
        <div className="heroInner">
          <span className="heroKicker">KISHIB</span>
          <h1>{t.aboutPage.title}</h1>
        </div>
      </section>

      <div className="aboutSections">
        {t.aboutPage.sections.map((section, index) => (
          <section className="storySection" key={section.title}>
            <div className={`storyGrid ${index % 2 === 1 ? "reverse" : ""}`}>
              <div className="storyMedia">
                <Image
                  src={section.image}
                  alt={section.imageLabel}
                  width={760}
                  height={560}
                  className={section.image.includes("logo") ? "containImage" : "coverImage"}
                  sizes="(max-width: 900px) 100vw, 44vw"
                />
              </div>

              <div className="storyCopy">
                <span className="sectionNumber">{String(index + 1).padStart(2, "0")}</span>
                <h2>{section.title}</h2>
                <div className="storyText">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="quoteSection">
        <div className="quoteInner">
          <Quote size={32} />
          <p>{t.aboutPage.quote}</p>
        </div>
      </section>

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
      </footer>

      <style jsx>{`
        .aboutSite {
          min-height: 100vh;
          overflow-x: hidden;
          background: #050505;
          color: #ffffff;
        }

        .aboutHero {
          min-height: 72vh;
          display: grid;
          align-items: end;
          padding: 150px 18px 72px;
          background:
            linear-gradient(180deg, rgba(5, 5, 5, 0.36), #050505 100%),
            radial-gradient(circle at 22% 20%, rgba(216, 100, 34, 0.26), transparent 32%),
            radial-gradient(circle at 82% 18%, rgba(216, 182, 106, 0.2), transparent 30%),
            #111111;
          border-bottom: 1px solid rgba(216, 182, 106, 0.2);
        }

        .heroInner,
        .storyGrid,
        .quoteInner,
        .footerInner {
          width: min(1080px, 100%);
          margin: 0 auto;
        }

        .heroKicker,
        .sectionNumber {
          display: inline-block;
          color: #d8b66a;
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 0.18em;
        }

        h1,
        h2,
        p {
          margin: 0;
        }

        h1 {
          margin-top: 18px;
          max-width: 760px;
          color: #ffffff;
          font-size: clamp(44px, 8vw, 88px);
          line-height: 0.98;
          font-weight: 850;
          letter-spacing: 0;
        }

        .aboutSections {
          background: #050505;
        }

        .storySection {
          padding: 74px 18px;
          border-bottom: 1px solid rgba(216, 182, 106, 0.14);
        }

        .storySection:nth-child(even) {
          background:
            linear-gradient(135deg, rgba(216, 182, 106, 0.1), transparent 36%),
            #f2eee6;
          color: #111111;
        }

        .storyGrid {
          display: grid;
          grid-template-columns: minmax(0, 0.92fr) minmax(0, 1fr);
          align-items: center;
          gap: 48px;
        }

        .storyGrid.reverse .storyMedia {
          order: 2;
        }

        .storyMedia {
          position: relative;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          border: 1px solid rgba(216, 182, 106, 0.24);
          border-radius: 8px;
          background:
            linear-gradient(135deg, rgba(216, 182, 106, 0.18), rgba(216, 100, 34, 0.12)),
            #151515;
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.24);
        }

        .storySection:nth-child(even) .storyMedia {
          background:
            linear-gradient(135deg, rgba(5, 5, 5, 0.08), rgba(216, 100, 34, 0.1)),
            #ffffff;
          box-shadow: 0 22px 54px rgba(5, 5, 5, 0.12);
        }

        .storyMedia :global(img) {
          width: 100%;
          height: 100%;
        }

        .coverImage {
          object-fit: cover;
        }

        .containImage {
          object-fit: contain;
          padding: 42px;
        }

        .storyCopy {
          min-width: 0;
        }

        .storyCopy h2 {
          margin-top: 12px;
          color: inherit;
          font-size: clamp(30px, 4vw, 52px);
          line-height: 1.12;
          font-weight: 850;
          letter-spacing: 0;
        }

        .storyText {
          margin-top: 22px;
          display: grid;
          gap: 13px;
          color: rgba(255, 255, 255, 0.76);
          font-size: 16.5px;
          line-height: 1.85;
        }

        .storySection:nth-child(even) .storyText {
          color: rgba(17, 17, 17, 0.72);
        }

        .quoteSection {
          padding: 74px 18px;
          background:
            radial-gradient(circle at 50% 0%, rgba(216, 100, 34, 0.22), transparent 34%),
            linear-gradient(135deg, #111111 0%, #3b1d12 54%, #050505 100%);
        }

        .quoteInner {
          display: grid;
          gap: 18px;
          justify-items: center;
          text-align: center;
          color: #f2eee6;
        }

        .quoteInner svg {
          color: #d8b66a;
        }

        .quoteInner p {
          max-width: 820px;
          font-size: clamp(24px, 4vw, 44px);
          line-height: 1.35;
          font-weight: 800;
        }

        .footer {
          padding: 42px 18px 30px;
          background: #050505;
          color: #ffffff;
          border-top: 1px solid rgba(216, 182, 106, 0.18);
        }

        .footerInner {
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
          margin-top: 16px;
          color: rgba(255, 255, 255, 0.58);
          font-size: 13px;
          line-height: 1.6;
        }

        .footer h2 {
          margin-bottom: 12px;
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
          .aboutHero {
            min-height: 58vh;
            padding: 118px 14px 46px;
          }

          h1 {
            font-size: 42px;
          }

          .storySection {
            padding: 46px 14px;
          }

          .storyGrid,
          .storyGrid.reverse {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .storyGrid.reverse .storyMedia {
            order: 0;
          }

          .storyCopy h2 {
            font-size: 29px;
          }

          .storyText {
            margin-top: 16px;
            gap: 10px;
            font-size: 15px;
            line-height: 1.72;
          }

          .containImage {
            padding: 28px;
          }

          .quoteSection {
            padding: 52px 14px;
          }

          .quoteInner p {
            font-size: 25px;
          }

          .footer {
            padding: 34px 14px 24px;
          }

          .footerInner {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 18px 16px;
          }
        }
      `}</style>
    </main>
  );
}
