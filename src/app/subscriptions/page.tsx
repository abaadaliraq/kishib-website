"use client";

import Link from "next/link";
import { BadgeCheck, Check, Crown, ShieldCheck } from "lucide-react";
import { useMemo, useState } from "react";

import SiteFooter from "@/components/SiteFooter";
import TopBar from "@/components/TopBar";
import { kishibContent, type Lang } from "@/data/kishibContent";
import { subscriptionContent } from "@/data/subscriptionContent";

export default function SubscriptionsPage() {
  const [lang, setLang] = useState<Lang>("ar");
  const isAr = lang === "ar";
  const dir = useMemo(() => (isAr ? "rtl" : "ltr"), [isAr]);
  const siteContent = kishibContent[lang];
  const pageContent = subscriptionContent[lang];
  const homeNav = siteContent.nav.map((item) => ({
    ...item,
    href: item.href.startsWith("#") ? `/${item.href}` : item.href,
  }));

  return (
    <main className="subscriptionsSite" dir={dir}>
      <TopBar
        nav={homeNav}
        langLabel={siteContent.langLabel}
        brandHref="/#home"
        onToggleLang={() => setLang(isAr ? "en" : "ar")}
      />

      <section className="pricingHero">
        <div className="sealPattern" aria-hidden="true">
          𒀭 𒆠 𒈗
        </div>
        <div className="heroInner">
          <span className="heroKicker">
            <Crown size={15} />
            KISHIB
          </span>
          <h1>{pageContent.heroTitle}</h1>
          <p>{pageContent.heroSubtitle}</p>
          <div className="heroNote">
            <ShieldCheck size={17} />
            <span>{pageContent.note}</span>
          </div>
        </div>
      </section>

      <section className="pricingSection">
        <div className="tabletDivider" aria-hidden="true" />
        <div className="pricingGrid">
          {pageContent.plans.map((plan) => {
            const Icon = plan.icon;

            return (
              <article
                className={`pricingCard ${plan.recommended ? "recommended" : ""}`}
                key={plan.title}
              >
                <div className="cardTop">
                  <span className="planIcon">
                    <Icon size={20} />
                  </span>
                  <span className="badge">{plan.badge}</span>
                </div>

                <h2>{plan.title}</h2>
                <div className="priceRow">
                  <strong>{plan.price}</strong>
                  <span>{plan.billing}</span>
                </div>
                <p className="planDescription">{plan.description}</p>

                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <Check size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link className="planCta" href="/#download">
                  {plan.cta}
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      <section className="upcomingSection">
        <div className="upcomingInner">
          <div className="sectionHead">
            <BadgeCheck size={18} />
            <h2>{pageContent.upcomingTitle}</h2>
          </div>

          <div className="upcomingGrid">
            {pageContent.upcoming.map((item, index) => {
              const Icon = item.icon;

              return (
                <article className="upcomingItem" key={item.title}>
                  <span className="upcomingNumber">{String(index + 1).padStart(2, "0")}</span>
                  <Icon size={22} />
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              );
            })}
          </div>

          <p className="closingLine">{pageContent.closing}</p>
        </div>
      </section>

      <SiteFooter nav={homeNav} footer={siteContent.footer} lang={lang} />

      <style jsx>{`
        .subscriptionsSite {
          min-height: 100vh;
          overflow-x: hidden;
          background: #050505;
          color: #ffffff;
        }

        .pricingHero {
          position: relative;
          min-height: 68vh;
          display: grid;
          align-items: end;
          padding: 150px 18px 70px;
          overflow: hidden;
          background:
            linear-gradient(180deg, rgba(5, 5, 5, 0.18), #050505 100%),
            radial-gradient(circle at 18% 26%, rgba(216, 100, 34, 0.26), transparent 32%),
            radial-gradient(circle at 82% 16%, rgba(216, 182, 106, 0.18), transparent 30%),
            #111111;
          border-bottom: 1px solid rgba(216, 182, 106, 0.18);
        }

        .pricingHero::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(216, 182, 106, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(216, 182, 106, 0.035) 1px, transparent 1px);
          background-size: 56px 56px;
          mask-image: radial-gradient(circle at 50% 42%, black 0%, transparent 72%);
          pointer-events: none;
        }

        .sealPattern {
          position: absolute;
          inset-inline-end: 7vw;
          bottom: 42px;
          color: rgba(216, 182, 106, 0.1);
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(72px, 12vw, 154px);
          line-height: 1;
          letter-spacing: 0.08em;
          pointer-events: none;
          user-select: none;
        }

        .heroInner,
        .pricingGrid,
        .upcomingInner {
          position: relative;
          z-index: 2;
          width: min(1120px, 100%);
          margin: 0 auto;
        }

        .heroKicker {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          color: #d8b66a;
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 0.18em;
        }

        h1,
        h2,
        h3,
        p {
          margin: 0;
        }

        h1 {
          margin-top: 18px;
          max-width: 820px;
          font-size: clamp(43px, 7vw, 82px);
          line-height: 0.98;
          font-weight: 850;
          letter-spacing: 0;
        }

        .heroInner > p {
          margin-top: 22px;
          max-width: 790px;
          color: rgba(255, 255, 255, 0.74);
          font-size: 18px;
          line-height: 1.75;
        }

        .heroNote {
          width: fit-content;
          max-width: 760px;
          margin-top: 22px;
          display: inline-flex;
          align-items: flex-start;
          gap: 10px;
          padding: 12px 14px;
          border: 1px solid rgba(216, 182, 106, 0.24);
          border-radius: 8px;
          background: rgba(5, 5, 5, 0.36);
          color: rgba(255, 255, 255, 0.72);
          font-size: 14px;
          line-height: 1.55;
        }

        .heroNote svg {
          flex: 0 0 auto;
          margin-top: 2px;
          color: #d8b66a;
        }

        .pricingSection {
          position: relative;
          padding: 72px 18px;
          background:
            radial-gradient(circle at 50% 0%, rgba(216, 182, 106, 0.16), transparent 32%),
            #050505;
        }

        .tabletDivider {
          width: min(1120px, calc(100% - 36px));
          height: 12px;
          margin: 0 auto 26px;
          border: 1px solid rgba(216, 182, 106, 0.18);
          border-radius: 999px;
          background:
            repeating-linear-gradient(
              90deg,
              rgba(216, 182, 106, 0.28) 0 14px,
              transparent 14px 28px
            ),
            rgba(216, 100, 34, 0.08);
        }

        .pricingGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
          align-items: stretch;
        }

        .pricingCard {
          position: relative;
          min-height: 100%;
          display: flex;
          flex-direction: column;
          padding: 24px;
          border: 1px solid rgba(216, 182, 106, 0.18);
          border-radius: 8px;
          background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.075), rgba(255, 255, 255, 0.03)),
            #111111;
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.24);
        }

        .pricingCard.recommended {
          border-color: rgba(216, 182, 106, 0.58);
          background:
            linear-gradient(180deg, rgba(216, 182, 106, 0.2), rgba(216, 100, 34, 0.07)),
            #111111;
          transform: translateY(-10px);
        }

        .cardTop {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }

        .planIcon {
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          border: 1px solid rgba(216, 182, 106, 0.28);
          border-radius: 50%;
          background: #050505;
          color: #d8b66a;
        }

        .badge {
          padding: 8px 10px;
          border: 1px solid rgba(216, 182, 106, 0.24);
          border-radius: 999px;
          color: #d8b66a;
          font-size: 11px;
          font-weight: 900;
          line-height: 1;
          white-space: nowrap;
        }

        .pricingCard h2 {
          margin-top: 22px;
          color: #ffffff;
          font-size: 24px;
          line-height: 1.2;
          font-weight: 900;
        }

        .priceRow {
          margin-top: 18px;
          display: flex;
          align-items: baseline;
          gap: 9px;
        }

        .priceRow strong {
          color: #ffffff;
          font-size: 50px;
          line-height: 0.95;
          font-weight: 950;
        }

        .priceRow span {
          color: rgba(255, 255, 255, 0.62);
          font-size: 14px;
          font-weight: 800;
        }

        .planDescription {
          min-height: 76px;
          margin-top: 16px;
          color: rgba(255, 255, 255, 0.68);
          font-size: 14.5px;
          line-height: 1.65;
        }

        .pricingCard ul {
          margin: 20px 0 0;
          padding: 0;
          display: grid;
          gap: 10px;
          list-style: none;
        }

        .pricingCard li {
          display: grid;
          grid-template-columns: 18px 1fr;
          gap: 9px;
          color: rgba(255, 255, 255, 0.78);
          font-size: 14px;
          line-height: 1.45;
        }

        .pricingCard li svg {
          color: #d8b66a;
          margin-top: 2px;
        }

        .planCta {
          min-height: 46px;
          margin-top: auto;
          transform: translateY(18px);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0 16px;
          border: 1px solid rgba(216, 182, 106, 0.44);
          border-radius: 4px;
          background: #d8b66a;
          color: #050505;
          font-size: 13px;
          font-weight: 950;
          line-height: 1;
          text-decoration: none;
          text-align: center;
        }

        .pricingCard:not(.recommended) .planCta {
          background: #050505;
          color: #ffffff;
        }

        .upcomingSection {
          padding: 72px 18px;
          background:
            linear-gradient(135deg, rgba(216, 182, 106, 0.18), transparent 34%),
            #f2eee6;
          color: #111111;
        }

        .sectionHead {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #8f3518;
        }

        .sectionHead h2 {
          color: #050505;
          font-size: clamp(30px, 4vw, 48px);
          line-height: 1.12;
          font-weight: 900;
        }

        .upcomingGrid {
          margin-top: 28px;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1px;
          border: 1px solid rgba(5, 5, 5, 0.14);
          background: rgba(5, 5, 5, 0.14);
        }

        .upcomingItem {
          min-height: 218px;
          padding: 22px;
          background: rgba(255, 255, 255, 0.6);
        }

        .upcomingNumber {
          display: inline-block;
          margin-bottom: 14px;
          color: #d86422;
          font-size: 13px;
          font-weight: 950;
          letter-spacing: 0.16em;
        }

        .upcomingItem svg {
          color: #6b3a22;
        }

        .upcomingItem h3 {
          margin-top: 14px;
          color: #050505;
          font-size: 18px;
          line-height: 1.35;
          font-weight: 900;
        }

        .upcomingItem p {
          margin-top: 10px;
          color: rgba(17, 17, 17, 0.68);
          font-size: 14px;
          line-height: 1.65;
        }

        .closingLine {
          margin-top: 28px;
          padding-inline-start: 16px;
          border-inline-start: 4px solid #d8b66a;
          color: rgba(17, 17, 17, 0.76);
          font-size: 17px;
          line-height: 1.75;
          font-weight: 750;
        }

        @media (max-width: 980px) {
          .pricingGrid,
          .upcomingGrid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .pricingCard.recommended {
            transform: none;
          }
        }

        @media (max-width: 760px) {
          .pricingHero {
            min-height: auto;
            padding: 116px 14px 44px;
          }

          .sealPattern {
            inset-inline-end: 10px;
            bottom: 16px;
            font-size: 74px;
          }

          h1 {
            font-size: 40px;
          }

          .heroInner > p {
            margin-top: 16px;
            font-size: 15px;
            line-height: 1.65;
          }

          .heroNote {
            margin-top: 16px;
            font-size: 13px;
          }

          .pricingSection,
          .upcomingSection {
            padding: 42px 14px;
          }

          .tabletDivider {
            width: 100%;
            margin-bottom: 18px;
          }

          .pricingGrid,
          .upcomingGrid {
            grid-template-columns: 1fr;
            gap: 12px;
            border: 0;
            background: transparent;
          }

          .pricingCard {
            padding: 18px;
          }

          .pricingCard h2 {
            margin-top: 18px;
            font-size: 21px;
          }

          .priceRow strong {
            font-size: 42px;
          }

          .planDescription {
            min-height: auto;
            font-size: 13.5px;
          }

          .pricingCard ul {
            margin-top: 16px;
            gap: 8px;
          }

          .pricingCard li {
            font-size: 13.5px;
          }

          .planCta {
            width: 100%;
            margin-top: 18px;
            transform: none;
          }

          .upcomingItem {
            min-height: auto;
            padding: 18px;
          }

          .closingLine {
            margin-top: 22px;
            font-size: 15px;
            line-height: 1.65;
          }
        }
      `}</style>
    </main>
  );
}
