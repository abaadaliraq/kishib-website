"use client";

import SiteFooter from "@/components/SiteFooter";
import TopBar from "@/components/TopBar";
import { kishibContent } from "@/data/kishibContent";
import type { LegalPageContent } from "@/data/legalPages";

type LegalPageProps = {
  page: LegalPageContent;
};

export default function LegalPage({ page }: LegalPageProps) {
  const content = kishibContent.en;
  const homeNav = content.nav.map((item) => ({
    ...item,
    href: item.href.startsWith("#") ? `/${item.href}` : item.href,
  }));

  return (
    <main className="legalSite" dir="ltr">
      <TopBar
        nav={homeNav}
        langLabel=""
        brandHref="/#home"
        hideLanguage
        onToggleLang={() => undefined}
      />

      <section className="legalHero">
        <div className="legalHeroInner">
          <span>KISHIB Legal</span>
          <h1>{page.title}</h1>
        </div>
      </section>

      <section className="legalBody">
        <article className="legalArticle">
          {page.blocks.map((block, index) => {
            if (block.type === "heading") {
              return <h2 key={`${block.text}-${index}`}>{block.text}</h2>;
            }

            if (block.type === "subheading") {
              return <h3 key={`${block.text}-${index}`}>{block.text}</h3>;
            }

            if (block.type === "list") {
              return (
                <ul key={`list-${index}`}>
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              );
            }

            return <p key={`${block.text}-${index}`}>{block.text}</p>;
          })}
        </article>
      </section>

      <SiteFooter nav={homeNav} footer={content.footer} />

      <style jsx>{`
        .legalSite {
          min-height: 100vh;
          overflow-x: hidden;
          background: #050505;
          color: #ffffff;
        }

        .legalHero {
          padding: 150px 18px 70px;
          background:
            linear-gradient(180deg, rgba(5, 5, 5, 0.22), #050505 100%),
            radial-gradient(circle at 18% 22%, rgba(216, 100, 34, 0.24), transparent 30%),
            radial-gradient(circle at 82% 18%, rgba(216, 182, 106, 0.18), transparent 30%),
            #111111;
          border-bottom: 1px solid rgba(216, 182, 106, 0.18);
        }

        .legalHeroInner,
        .legalArticle {
          width: min(920px, 100%);
          margin: 0 auto;
        }

        .legalHero span {
          display: inline-block;
          color: #d8b66a;
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        h1,
        h2,
        h3,
        p {
          margin: 0;
        }

        h1 {
          margin-top: 16px;
          color: #ffffff;
          font-size: clamp(42px, 7vw, 76px);
          line-height: 1;
          font-weight: 850;
          letter-spacing: 0;
        }

        .legalBody {
          padding: 64px 18px 78px;
          background:
            linear-gradient(135deg, rgba(216, 182, 106, 0.08), transparent 34%),
            #f2eee6;
          color: #111111;
        }

        .legalArticle {
          padding: 42px;
          border: 1px solid rgba(5, 5, 5, 0.1);
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.58);
          box-shadow: 0 22px 54px rgba(5, 5, 5, 0.1);
        }

        .legalArticle h2 {
          margin-top: 30px;
          color: #050505;
          font-size: 23px;
          line-height: 1.25;
          font-weight: 900;
        }

        .legalArticle h2:first-child {
          margin-top: 0;
        }

        .legalArticle h3 {
          margin-top: 22px;
          color: #6b3a22;
          font-size: 17px;
          line-height: 1.35;
          font-weight: 900;
        }

        .legalArticle p {
          margin-top: 14px;
          color: rgba(17, 17, 17, 0.75);
          font-size: 15.5px;
          line-height: 1.78;
        }

        .legalArticle ul {
          margin: 14px 0 0;
          padding-left: 22px;
          color: rgba(17, 17, 17, 0.75);
          font-size: 15.5px;
          line-height: 1.72;
        }

        .legalArticle li + li {
          margin-top: 7px;
        }

        .legalArticle p:first-child {
          margin-top: 0;
          color: #8f3518;
          font-weight: 850;
        }

        @media (max-width: 760px) {
          .legalHero {
            padding: 116px 14px 44px;
          }

          h1 {
            font-size: 40px;
          }

          .legalBody {
            padding: 38px 14px 52px;
          }

          .legalArticle {
            padding: 22px;
          }

          .legalArticle h2 {
            margin-top: 26px;
            font-size: 20px;
          }

          .legalArticle h3 {
            font-size: 16px;
          }

          .legalArticle p,
          .legalArticle ul {
            font-size: 14.5px;
            line-height: 1.68;
          }
        }
      `}</style>
    </main>
  );
}
