"use client";

import type { FormEvent } from "react";
import { useMemo, useState } from "react";
import {
  Apple,
  ArrowUpRight,
  Crown,
  Mail,
  Play,
} from "lucide-react";

import Hero from "@/components/Hero";
import SocialIcon from "@/components/SocialIcon";
import TopBar from "@/components/TopBar";
import {
  footerUtilityLinks,
  kishibContent,
  officialEmails,
  socialLinks,
  type Lang,
} from "@/data/kishibContent";

export default function Home() {
  const [lang, setLang] = useState<Lang>("ar");
  const isAr = lang === "ar";
  const dir = useMemo(() => (isAr ? "rtl" : "ltr"), [isAr]);
  const t = kishibContent[lang];
  const footerContent = kishibContent.en.footer;

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
    <main className="site" dir={dir}>
      <TopBar
        nav={t.nav}
        langLabel={t.langLabel}
        onToggleLang={() => setLang(isAr ? "en" : "ar")}
      />

      <Hero
        lang={lang}
        kicker={t.heroKicker}
        title={t.heroTitle}
        text={t.heroText}
        primary={t.primary}
        secondary={t.secondary}
        stats={t.stats}
      />

      <section className="section aboutSection" id="about">
        <div className="cuneiformMark markOne" aria-hidden="true">
          𒀭 𒆠 𒈗
        </div>
        <div className="sectionInner narrow">
          <h2>{t.about.title}</h2>
          <div className="aboutLines">
            {t.about.lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <a className="aboutReadMore" href="/about-kishib">
            {t.about.readMore}
            <ArrowUpRight size={17} />
          </a>
        </div>
      </section>

      <section className="section useSection" id="how-to-use">
        <div className="cuneiformMark markTwo" aria-hidden="true">
          𒁹 𒊹 𒂍
        </div>
        <div className="sectionInner">
          <h2>{t.usage.title}</h2>
          <div className="stepsGrid">
            {t.usage.steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <article className="simpleItem" key={step.title}>
                  <span className="itemIcon">
                    <Icon size={18} />
                  </span>
                  <span className="itemNumber">{index + 1}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              );
            })}
          </div>
          <div className="tips">
            {t.usage.tips.map((tip) => (
              <p key={tip}>{tip}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section featuresSection" id="features">
        <div className="cuneiformStrip" aria-hidden="true">
          𒀭 𒆠 𒈗 𒁹 𒊹 𒂍 𒀭 𒆠
        </div>
        <div className="sectionInner">
          <h2>{t.features.title}</h2>
          <div className="featuresGrid">
            {t.features.items.map((feature) => {
              const Icon = feature.icon;

              return (
                <article className="featureItem" key={feature.title}>
                  <span className="itemIcon">
                    <Icon size={17} />
                  </span>
                  <div>
                    <h3>{feature.title}</h3>
                    <p>{feature.text}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section downloadSection" id="download">
        <div className="sectionInner downloadInner">
          <div>
            <h2>{t.download.title}</h2>
            <p>{t.download.text}</p>
          </div>
          <div className="downloadBtns">
            <a className="storeBadge" href="#" aria-label={t.download.iphone}>
              <Apple size={30} />
              <span>
                <small>Download on the</small>
                <strong>App Store</strong>
              </span>
            </a>
            <a className="storeBadge" href="#" aria-label={t.download.android}>
              <Play size={28} />
              <span>
                <small>Android app on</small>
                <strong>Google Play</strong>
              </span>
            </a>
            <a className="subscriptionsBtn" href="/subscriptions">
              <Crown size={18} />
              {t.download.subscriptions}
            </a>
          </div>
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
              {kishibContent.en.nav.map((item) => (
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
        .site {
          background: #050505;
          color: #ffffff;
        }

        .section {
          position: relative;
          scroll-margin-top: 78px;
          padding: 72px 18px;
          overflow: hidden;
        }

        .sectionInner,
        .footerInner {
          width: min(1080px, 100%);
          margin: 0 auto;
        }

        .narrow {
          width: min(860px, 100%);
        }

        h2 {
          margin: 0;
          color: inherit;
          font-size: clamp(30px, 4vw, 52px);
          line-height: 1.12;
          font-weight: 850;
          letter-spacing: 0;
        }

        h3,
        p {
          margin: 0;
        }

        .aboutSection {
          background:
            radial-gradient(circle at 12% 18%, rgba(216, 100, 34, 0.2), transparent 28%),
            radial-gradient(circle at 86% 18%, rgba(216, 182, 106, 0.13), transparent 28%),
            #050505;
          border-top: 1px solid rgba(216, 182, 106, 0.18);
        }

        .cuneiformMark {
          position: absolute;
          pointer-events: none;
          color: rgba(216, 182, 106, 0.14);
          font-family: "Times New Roman", serif;
          font-size: clamp(54px, 10vw, 128px);
          line-height: 1;
          letter-spacing: 0.08em;
          user-select: none;
        }

        .markOne {
          top: 24px;
          inset-inline-end: 8vw;
        }

        .markTwo {
          bottom: 18px;
          inset-inline-start: 7vw;
          color: rgba(143, 53, 24, 0.16);
        }

        .aboutLines {
          margin-top: 24px;
          display: grid;
          gap: 9px;
          color: rgba(255, 255, 255, 0.78);
          font-size: 17px;
          line-height: 1.75;
        }

        .aboutReadMore {
          width: fit-content;
          min-height: 46px;
          margin-top: 28px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          padding: 0 18px;
          border: 1px solid rgba(216, 182, 106, 0.58);
          background: linear-gradient(135deg, #d8b66a 0%, #d86422 100%);
          color: #050505;
          font-size: 14px;
          font-weight: 900;
          line-height: 1;
          text-decoration: none;
          box-shadow: 0 18px 38px rgba(216, 100, 34, 0.2);
          transition:
            transform 160ms ease,
            box-shadow 160ms ease;
        }

        .aboutReadMore:hover {
          transform: translateY(-2px);
          box-shadow: 0 22px 46px rgba(216, 100, 34, 0.28);
        }

        .useSection {
          background:
            linear-gradient(135deg, rgba(216, 182, 106, 0.2), transparent 34%),
            #f2eee6;
          color: #111111;
        }

        .stepsGrid {
          margin-top: 28px;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1px;
          border: 1px solid rgba(5, 5, 5, 0.14);
          background: rgba(5, 5, 5, 0.14);
        }

        .simpleItem {
          min-height: 170px;
          padding: 22px;
          background: rgba(255, 255, 255, 0.58);
        }

        .itemIcon {
          width: 34px;
          height: 34px;
          display: inline-grid;
          place-items: center;
          margin-bottom: 14px;
          background: #050505;
          color: #d8b66a;
        }

        .itemNumber {
          display: inline-block;
          margin-inline-start: 10px;
          color: #d86422;
          font-size: 14px;
          font-weight: 900;
        }

        .simpleItem h3 {
          color: #050505;
          font-size: 18px;
          line-height: 1.3;
          font-weight: 850;
        }

        .simpleItem p {
          margin-top: 8px;
          color: rgba(17, 17, 17, 0.68);
          font-size: 14px;
          line-height: 1.65;
        }

        .tips {
          margin-top: 18px;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px;
          color: rgba(17, 17, 17, 0.78);
          font-size: 14px;
          line-height: 1.55;
        }

        .tips p {
          border-inline-start: 3px solid #d8b66a;
          padding-inline-start: 12px;
        }

        .featuresSection {
          background:
            linear-gradient(135deg, #111111 0%, #3b1d12 52%, #050505 100%);
          color: #ffffff;
        }

        .cuneiformStrip {
          position: absolute;
          top: 0;
          inset-inline: 0;
          padding: 10px 18px;
          border-bottom: 1px solid rgba(216, 182, 106, 0.18);
          background: rgba(107, 58, 34, 0.45);
          color: rgba(216, 182, 106, 0.72);
          font-size: 18px;
          line-height: 1;
          letter-spacing: 0.22em;
          white-space: nowrap;
          overflow: hidden;
        }

        .featuresGrid {
          margin-top: 28px;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1px;
          border: 1px solid rgba(216, 182, 106, 0.18);
          background: rgba(216, 182, 106, 0.18);
        }

        .featureItem {
          min-height: 128px;
          display: grid;
          grid-template-columns: 42px 1fr;
          gap: 12px;
          padding: 20px;
          background: rgba(17, 17, 17, 0.78);
        }

        .featureItem h3 {
          color: #ffffff;
          font-size: 16px;
          line-height: 1.35;
          font-weight: 850;
        }

        .featureItem p {
          margin-top: 6px;
          color: rgba(255, 255, 255, 0.66);
          font-size: 13px;
          line-height: 1.55;
        }

        .downloadSection {
          background:
            radial-gradient(circle at 12% 20%, rgba(216, 100, 34, 0.28), transparent 32%),
            linear-gradient(135deg, #f2eee6 0%, #dfc58b 100%);
          color: #050505;
        }

        .downloadInner {
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: center;
          gap: 28px;
        }

        .downloadInner p {
          margin-top: 14px;
          max-width: 650px;
          color: rgba(5, 5, 5, 0.7);
          font-size: 16px;
          line-height: 1.75;
        }

        .downloadBtns {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .storeBadge,
        .subscriptionsBtn,
        .contactForm button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
        }

        .storeBadge {
          min-width: 205px;
          min-height: 68px;
          gap: 14px;
          padding: 10px 18px;
          border: 1px solid rgba(216, 182, 106, 0.36);
          border-radius: 10px;
          background: #050505;
          color: #ffffff;
          box-shadow: 0 16px 34px rgba(5, 5, 5, 0.18);
        }

        .storeBadge span {
          display: grid;
          gap: 2px;
          line-height: 1;
        }

        .storeBadge small {
          color: rgba(255, 255, 255, 0.76);
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
        }

        .storeBadge strong {
          color: #ffffff;
          font-size: 25px;
          font-weight: 900;
          letter-spacing: 0;
        }

        .storeBadge:last-child svg {
          color: #d86422;
          fill: rgba(216, 100, 34, 0.2);
        }

        .subscriptionsBtn {
          min-width: 205px;
          min-height: 68px;
          gap: 10px;
          padding: 10px 18px;
          border: 1px solid rgba(5, 5, 5, 0.18);
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.72);
          color: #050505;
          font-size: 14px;
          font-weight: 900;
          box-shadow: 0 16px 34px rgba(5, 5, 5, 0.12);
        }

        .subscriptionsBtn svg {
          color: #d86422;
        }

        .contactForm button {
          min-height: 44px;
          gap: 9px;
          padding: 0 18px;
          border: 1px solid #d8b66a;
          background: #050505;
          color: #ffffff;
          font-size: 14px;
          font-weight: 850;
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
          margin-top: 2px;
          background: #d8b66a;
          color: #050505;
        }

        @media (max-width: 900px) {
          .section {
            padding: 46px 14px;
            scroll-margin-top: 66px;
          }

          h2 {
            font-size: 29px;
          }

          .aboutLines {
            margin-top: 18px;
            gap: 7px;
            font-size: 15px;
            line-height: 1.65;
          }

          .aboutReadMore {
            width: 100%;
            margin-top: 22px;
          }

          .stepsGrid,
          .featuresGrid {
            margin-top: 20px;
            grid-template-columns: 1fr;
          }

          .simpleItem {
            min-height: auto;
            padding: 16px;
          }

          .featureItem {
            min-height: auto;
            padding: 15px;
          }

          .tips {
            grid-template-columns: 1fr;
            gap: 8px;
          }

          .downloadInner {
            grid-template-columns: 1fr;
            gap: 18px;
          }

          .downloadInner p {
            font-size: 14px;
            line-height: 1.65;
          }

          .downloadBtns a {
            flex: 1 1 100%;
          }

          .storeBadge {
            min-width: 0;
            min-height: 62px;
          }

          .storeBadge strong {
            font-size: 22px;
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
