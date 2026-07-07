import Image from "next/image";
import {
  BadgeCheck,
  CalendarClock,
  FileText,
  Gem,
  MapPin,
  Scale,
} from "lucide-react";
import type { KishibContent, Lang } from "@/data/kishibContent";

type HeroMobileProps = {
  lang: Lang;
  content: Pick<KishibContent, "heroKicker" | "heroTitle" | "heroText" | "heroCards">;
};

const mobileCardMeta = [
  {
    key: "value",
    className: "mobileCardValue",
    title: "Estimated Value",
    value: "$2,800 – $3,600",
    text: "Market-based range",
    icon: Scale,
  },
  {
    key: "period",
    className: "mobileCardPeriod",
    title: "Age & Period",
    value: "Early 20th C.",
    text: "Likely 1900–1920",
    icon: CalendarClock,
  },
  {
    key: "description",
    className: "mobileCardDesc",
    title: "Description",
    value: "Antique Vessel",
    text: "Aged handcrafted form",
    icon: FileText,
  },
  {
    key: "origin",
    className: "mobileCardOrigin",
    title: "Origin",
    value: "Ottoman Influence",
    text: "Regional craft style",
    icon: MapPin,
  },
] as const;

export default function HeroMobile({ lang, content }: HeroMobileProps) {
  const isAr = lang === "ar";
  const mobileCards = mobileCardMeta.map((card) => ({
    ...card,
    ...content.heroCards[card.key],
  }));

  return (
    <section className="mobileHero" id="home-mobile" dir={isAr ? "rtl" : "ltr"}>
      <div className="mobileIntro">
        <div className="mobileKicker">
          <BadgeCheck size={14} />
          <span>{content.heroKicker}</span>
        </div>

        <h1>{content.heroTitle}</h1>

        <p>{content.heroText}</p>
      </div>

      <div className="mobileStage">
        <svg
          className="mobileLines"
          viewBox="0 0 360 500"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path className="mLine lineValue" d="M178 235 C125 190 92 142 54 112" />
          <path className="mLine linePeriod" d="M188 230 C238 184 270 138 316 104" />
          <path className="mLine lineDesc" d="M158 310 C112 338 78 370 44 405" />
          <path className="mLine lineOrigin" d="M205 312 C250 342 285 374 320 410" />

          <circle className="mDot dotValue" cx="54" cy="112" r="3.4" />
          <circle className="mDot dotPeriod" cx="316" cy="104" r="3.4" />
          <circle className="mDot dotDesc" cx="44" cy="405" r="3.4" />
          <circle className="mDot dotOrigin" cx="320" cy="410" r="3.4" />
        </svg>

        <div className="mobilePieceWrap">
          <div className="mobilePieceGlow" />
          <Image
            src="/images/hero.png"
            alt="Antique object evaluated by KISHIB"
            width={430}
            height={430}
            className="mobilePiece"
            priority
          />
        </div>

        {mobileCards.map((card, index) => {
          const Icon = card.icon;

          return (
            <article
              className={`mobileFloatingCard ${card.className}`}
              key={card.key}
              style={{ animationDelay: `${1.05 + index * 0.14}s` }}
            >
              <div className="mobileIcon">
<Icon size={12} />
              </div>

              <div>
                <h3>{card.title}</h3>
                <strong>{card.value}</strong>
                <p>{card.text}</p>
              </div>
            </article>
          );
        })}
      </div>

      <div className="mobileBottomCard">
        <div>
          <Gem size={16} />
          <span>{content.heroCards.material.title}</span>
        </div>
        <strong>{content.heroCards.material.value}</strong>
        <p>{content.heroCards.material.text}</p>
      </div>

      <style jsx>{`
        .mobileHero {
          display: none;
        }

        @media (max-width: 760px) {
          .mobileHero {
            position: relative;
            display: block;
            min-height: 100vh;
            overflow: hidden;
            padding: 112px 14px 34px;
            background:
              radial-gradient(circle at 50% 34%, rgba(166, 120, 68, 0.16), transparent 38%),
              linear-gradient(180deg, #ffffff 0%, #f7f4ef 100%);
            color: #071124;
          }

          .mobileHero::before {
            content: "";
            position: absolute;
            inset: 0;
            background-image:
              linear-gradient(rgba(7, 17, 36, 0.035) 1px, transparent 1px),
              linear-gradient(90deg, rgba(7, 17, 36, 0.035) 1px, transparent 1px);
            background-size: 38px 38px;
            pointer-events: none;
          }

          .mobileIntro {
            position: relative;
            z-index: 5;
            text-align: center;
            animation: introIn 0.7s ease both;
          }

          .mobileKicker {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            margin-bottom: 12px;
            color: #a47743;
            font-size: 11px;
            font-weight: 950;
            letter-spacing: 0.14em;
            text-transform: uppercase;
          }

          .mobileIntro h1 {
            margin: 0 auto;
            max-width: 300px;
            font-family: Georgia, "Times New Roman", serif;
            font-size: 39px;
            line-height: 0.96;
            letter-spacing: -0.045em;
            font-weight: 500;
          }

          .mobileIntro p {
            margin: 14px auto 0;
            max-width: 300px;
            color: rgba(7, 17, 36, 0.66);
            font-size: 13.5px;
            line-height: 1.65;
          }

          .mobileStage {
            position: relative;
            z-index: 3;
            height: 500px;
            margin-top: 10px;
          }

          .mobileLines {
            position: absolute;
            inset: 0;
            z-index: 1;
            width: 100%;
            height: 100%;
            pointer-events: none;
          }

          .mLine {
            fill: none;
            stroke: rgba(150, 108, 60, 0.78);
            stroke-width: 1.15;
            stroke-linecap: round;
            stroke-dasharray: 540;
            stroke-dashoffset: 540;
            animation: drawMobileLine 1.25s cubic-bezier(0.65, 0, 0.2, 1) forwards;
          }

          .lineValue {
            animation-delay: 0.12s;
          }

          .linePeriod {
            animation-delay: 0.24s;
          }

          .lineDesc {
            animation-delay: 0.36s;
          }

          .lineOrigin {
            animation-delay: 0.48s;
          }

          .mDot {
            fill: #a47743;
            opacity: 0;
            transform-origin: center;
            animation: dotIn 0.4s ease forwards;
          }

          .dotValue {
            animation-delay: 1.22s;
          }

          .dotPeriod {
            animation-delay: 1.34s;
          }

          .dotDesc {
            animation-delay: 1.46s;
          }

          .dotOrigin {
            animation-delay: 1.58s;
          }

          .mobilePieceWrap {
            position: absolute;
            left: 50%;
            top: 50%;
            z-index: 2;
            width: min(295px, 86vw);
            transform: translate(-50%, -50%);
            display: grid;
            place-items: center;
            animation: pieceIn 0.85s ease both;
          }

          .mobilePieceGlow {
            position: absolute;
            bottom: 7%;
            width: 76%;
            height: 24%;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(7, 17, 36, 0.22), transparent 68%);
            filter: blur(18px);
          }

          .mobilePiece {
            position: relative;
            z-index: 2;
            width: 100%;
            height: auto;
            object-fit: contain;
            filter: drop-shadow(0 24px 34px rgba(7, 17, 36, 0.24));
          }

         .mobileFloatingCard {
  position: absolute;
  z-index: 6;
  width: 132px;
  min-height: 82px;
  display: grid;
  grid-template-columns: 24px 1fr;
  gap: 7px;
  padding: 10px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.78);
  border: 1px solid rgba(7, 17, 36, 0.055);
  box-shadow: 0 12px 28px rgba(7, 17, 36, 0.075);
  backdrop-filter: blur(14px);
  opacity: 0;
  transform: translateY(10px) scale(0.97);
  animation: cardIn 0.52s ease forwards;
}

         .mobileIcon {
  width: 24px;
  height: 24px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: #071124;
  color: white;
}
         .mobileFloatingCard h3 {
  margin: 0 0 4px;
  color: rgba(7, 17, 36, 0.86);
  font-size: 7.5px;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.mobileFloatingCard strong {
  display: block;
  margin-bottom: 3px;
  color: #071124;
  font-size: 11.5px;
  line-height: 1.15;
  font-weight: 750;
}

.mobileFloatingCard p {
  margin: 0;
  color: rgba(7, 17, 36, 0.5);
  font-size: 9.5px;
  line-height: 1.3;
}

          .mobileFloatingCard strong {
            display: block;
            margin-bottom: 4px;
            color: #071124;
            font-size: 13px;
            line-height: 1.15;
            font-weight: 900;
          }

          .mobileFloatingCard p {
            margin: 0;
            color: rgba(7, 17, 36, 0.62);
            font-size: 10.5px;
            line-height: 1.35;
          }

          .mobileCardValue {
  top: 30px;
  left: 6px;
}

.mobileCardPeriod {
  top: 22px;
  right: 6px;
}

.mobileCardDesc {
  bottom: 50px;
  left: 6px;
}

.mobileCardOrigin {
  bottom: 42px;
  right: 6px;
}

          .mobileBottomCard {
            position: relative;
            z-index: 7;
            margin-top: -4px;
            padding: 16px;
            border-radius: 16px;
            background: rgba(255, 255, 255, 0.92);
            border: 1px solid rgba(7, 17, 36, 0.08);
            box-shadow: 0 18px 42px rgba(7, 17, 36, 0.09);
            animation: cardIn 0.55s ease both;
            animation-delay: 1.72s;
            opacity: 0;
          }

          .mobileBottomCard div {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 8px;
            color: #a47743;
            font-size: 11px;
            font-weight: 950;
            letter-spacing: 0.14em;
            text-transform: uppercase;
          }

          .mobileBottomCard strong {
            display: block;
            color: #071124;
            font-size: 18px;
            line-height: 1.25;
          }

          .mobileBottomCard p {
            margin: 7px 0 0;
            color: rgba(7, 17, 36, 0.62);
            font-size: 12.5px;
            line-height: 1.55;
          }

          @keyframes introIn {
            from {
              opacity: 0;
              transform: translateY(14px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes drawMobileLine {
            to {
              stroke-dashoffset: 0;
            }
          }

          @keyframes dotIn {
            from {
              opacity: 0;
              transform: scale(0.35);
            }

            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          @keyframes pieceIn {
            from {
              opacity: 0;
              transform: translate(-50%, -44%) scale(0.94);
            }

            to {
              opacity: 1;
              transform: translate(-50%, -50%) scale(1);
            }
          }

          @keyframes cardIn {
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
        }
      `}</style>
    </section>
  );
}
