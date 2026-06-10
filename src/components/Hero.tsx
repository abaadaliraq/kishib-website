import Image from "next/image";
import HeroMobile from "@/components/mobile/HeroMobile";
import {
  ArrowRight,
  BadgeCheck,
  CalendarClock,
  FileText,
  Gem,
  Landmark,
  MapPin,
  Scale,
  ShieldCheck,
} from "lucide-react";
import type { Lang } from "@/data/kishibContent";

type HeroProps = {
  lang?: Lang;
  kicker?: string;
  title?: string;
  text?: string;
  primary?: string;
  secondary?: string;
  stats?: [string, string][];
};

const cards = [
  {
    key: "value",
    className: "valueCard",
    title: "Estimated Value",
    value: "$2,800 – $3,600 USD",
    text: "Based on condition, rarity, market demand, and comparable records.",
    icon: Scale,
  },
  {
    key: "period",
    className: "periodCard",
    title: "Age & Period",
    value: "Early 20th Century",
    text: "Likely produced between 1900–1920.",
    icon: CalendarClock,
  },
  {
    key: "description",
    className: "descriptionCard",
    title: "Description",
    value: "Decorative antique vessel",
    text: "Aged surface, balanced form, and preserved handcrafted details.",
    icon: FileText,
  },
  {
    key: "material",
    className: "materialCard",
    title: "Material",
    value: "Silver-plated metal",
    text: "Visual tone and wear indicate plated antique metal.",
    icon: Gem,
  },
  {
    key: "origin",
    className: "originCard",
    title: "Origin",
    value: "Ottoman Influence",
    text: "Regional craftsmanship with Ottoman-era design language.",
    icon: MapPin,
  },
  {
    key: "authenticity",
    className: "authCard",
    title: "Authenticity",
    value: "Visually consistent",
    text: "Age marks and construction details support antique character.",
    icon: ShieldCheck,
  },
];

export default function Hero(_: HeroProps) {
  return (
    <>
      <HeroMobile />

      <section className="kishibHero" id="home">
        <div className="brandPanel">
          <div className="brandMark">
            <Landmark size={20} />
            <span>KISHIB</span>
          </div>

          <div className="heroButtons" />
        </div>

        <div className="topStatement">
          <BadgeCheck size={16} />
          <span>Trusted Appraisals. Timeless Value.</span>
        </div>

        <div className="stage">
          <svg
            className="connectorLayer"
            viewBox="0 0 1280 720"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              className="line line1"
              d="M610 270 C510 230 430 170 310 150 L235 150"
            />
            <path
              className="line line2"
              d="M665 250 C755 185 835 130 970 125 L1080 125"
            />
            <path
              className="line line3"
              d="M575 360 C445 350 350 385 235 390 L150 390"
            />
            <path
              className="line line4"
              d="M705 360 C820 350 910 385 1030 390 L1135 390"
            />
            <path
              className="line line5"
              d="M585 480 C475 530 380 565 255 560 L165 560"
            />
            <path
              className="line line6"
              d="M695 485 C805 535 895 565 1020 560 L1115 560"
            />

            <circle className="dot dot1" cx="235" cy="150" r="4" />
            <circle className="dot dot2" cx="1080" cy="125" r="4" />
            <circle className="dot dot3" cx="150" cy="390" r="4" />
            <circle className="dot dot4" cx="1135" cy="390" r="4" />
            <circle className="dot dot5" cx="165" cy="560" r="4" />
            <circle className="dot dot6" cx="1115" cy="560" r="4" />
          </svg>

          <div className="pieceWrap">
            <div className="pieceShadow" />
            <Image
              src="/images/hero.png"
              alt="Antique object evaluated by KISHIB"
              width={620}
              height={620}
              className="pieceImage"
              priority
            />
          </div>

          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <article
                key={card.key}
                className={`infoCard ${card.className}`}
                style={{ animationDelay: `${1.2 + index * 0.16}s` }}
              >
                <div className="iconCircle">
                  <Icon size={17} />
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

        <div className="bottomFeatures">
          <div>
            <ShieldCheck size={26} />
            <span>Expert Evaluation</span>
          </div>

          <div>
            <Scale size={26} />
            <span>Market-Based Pricing</span>
          </div>

          <div>
            <FileText size={26} />
            <span>Detailed Reports</span>
          </div>

          <div>
            <Gem size={26} />
            <span>Material Insight</span>
          </div>
        </div>

        <style jsx>{`
          .kishibHero {
            position: relative;
            min-height: 100vh;
            overflow: hidden;
            padding: 132px 4vw 34px;
            background:
              radial-gradient(
                circle at 50% 44%,
                rgba(175, 135, 88, 0.16),
                transparent 34%
              ),
              linear-gradient(180deg, #ffffff 0%, #f7f4ef 100%);
            color: #071124;
          }

          .kishibHero::before {
            content: "";
            position: absolute;
            inset: 0;
            background-image:
              linear-gradient(rgba(7, 17, 36, 0.035) 1px, transparent 1px),
              linear-gradient(90deg, rgba(7, 17, 36, 0.035) 1px, transparent 1px);
            background-size: 54px 54px;
            mask-image: radial-gradient(circle at 54% 44%, black 0%, transparent 72%);
            pointer-events: none;
          }

          .brandPanel {
            position: absolute;
            z-index: 10;
            top: 158px;
            left: 4vw;
            width: min(410px, 31vw);
          }

          .brandMark {
            display: inline-flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 82px;
            color: #071124;
          }

          .brandMark span {
            font-size: 32px;
            letter-spacing: 0.22em;
            font-family: Georgia, "Times New Roman", serif;
            font-weight: 500;
          }

          .heroButtons {
            margin-top: 36px;
            display: flex;
            align-items: center;
            gap: 12px;
            flex-wrap: wrap;
          }

          .topStatement {
            position: absolute;
            z-index: 10;
            top: 180px;
            right: 8vw;
            display: inline-flex;
            align-items: center;
            gap: 10px;
            color: #a47743;
            font-size: 14px;
            font-weight: 950;
            letter-spacing: 0.16em;
            text-transform: uppercase;
          }

          .stage {
            position: relative;
            z-index: 3;
            width: min(1320px, 100%);
            height: 720px;
            margin: 48px auto 0;
          }

          .connectorLayer {
            position: absolute;
            inset: 0;
            z-index: 1;
            overflow: visible;
            pointer-events: none;
          }

          .line {
            fill: none;
            stroke: rgba(150, 108, 60, 0.78);
            stroke-width: 1.25;
            stroke-linecap: round;
            stroke-dasharray: 1200;
            stroke-dashoffset: 1200;
            animation: drawLine 1.55s cubic-bezier(0.65, 0, 0.2, 1) forwards;
          }

          .line1 {
            animation-delay: 0.1s;
          }

          .line2 {
            animation-delay: 0.22s;
          }

          .line3 {
            animation-delay: 0.34s;
          }

          .line4 {
            animation-delay: 0.46s;
          }

          .line5 {
            animation-delay: 0.58s;
          }

          .line6 {
            animation-delay: 0.7s;
          }

          .dot {
            fill: #a47743;
            opacity: 0;
            transform-origin: center;
            animation: dotIn 0.42s ease forwards;
          }

          .dot1 {
            animation-delay: 1.35s;
          }

          .dot2 {
            animation-delay: 1.47s;
          }

          .dot3 {
            animation-delay: 1.59s;
          }

          .dot4 {
            animation-delay: 1.71s;
          }

          .dot5 {
            animation-delay: 1.83s;
          }

          .dot6 {
            animation-delay: 1.95s;
          }

          .pieceWrap {
            position: absolute;
            z-index: 3;
            left: 50%;
            top: 53%;
            width: min(560px, 42vw);
            transform: translate(-50%, -50%);
            display: grid;
            place-items: center;
            animation: pieceReveal 0.9s cubic-bezier(0.2, 0.8, 0.2, 1) both;
          }

          .pieceShadow {
            position: absolute;
            z-index: 1;
            bottom: 4%;
            width: 78%;
            height: 26%;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(7, 17, 36, 0.22), transparent 68%);
            filter: blur(20px);
          }

          .pieceImage {
            position: relative;
            z-index: 2;
            width: 100%;
            height: auto;
            object-fit: contain;
            filter: drop-shadow(0 34px 50px rgba(7, 17, 36, 0.26));
          }

          .infoCard {
            position: absolute;
            z-index: 6;
            width: 255px;
            min-height: 126px;
            display: grid;
            grid-template-columns: 42px 1fr;
            gap: 14px;
            padding: 18px;
            border-radius: 10px;
            background: rgba(255, 255, 255, 0.9);
            border: 1px solid rgba(7, 17, 36, 0.075);
            box-shadow: 0 24px 62px rgba(7, 17, 36, 0.11);
            backdrop-filter: blur(18px);
            opacity: 0;
            transform: translateY(16px) scale(0.96);
            animation: cardIn 0.58s ease forwards;
          }

          .iconCircle {
            width: 38px;
            height: 38px;
            display: grid;
            place-items: center;
            border-radius: 50%;
            background: #071124;
            color: #ffffff;
          }

          .infoCard h3 {
            margin: 0 0 8px;
            color: #071124;
            font-size: 12px;
            font-weight: 950;
            line-height: 1;
            letter-spacing: 0.15em;
            text-transform: uppercase;
          }

          .infoCard strong {
            display: block;
            margin-bottom: 7px;
            color: #071124;
            font-size: 17px;
            line-height: 1.35;
            font-weight: 900;
          }

          .infoCard p {
            margin: 0;
            color: rgba(7, 17, 36, 0.64);
            font-size: 12.5px;
            line-height: 1.55;
          }

          .valueCard {
            top: 72px;
            left: 200px;
          }

          .periodCard {
            top: 45px;
            right: 82px;
          }

          .descriptionCard {
            top: 285px;
            left: 78px;
          }

          .materialCard {
            top: 285px;
            right: 42px;
          }

          .originCard {
            bottom: 42px;
            left: 35px;
          }

          .authCard {
            bottom: 42px;
            right: 134px;
          }

          .bottomFeatures {
            position: relative;
            z-index: 5;
            width: min(1180px, 100%);
            margin: -10px auto 0;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            border-top: 1px solid rgba(7, 17, 36, 0.12);
          }

          .bottomFeatures div {
            min-height: 86px;
            display: flex;
            align-items: center;
            gap: 14px;
            padding: 18px 28px;
            color: #a47743;
            border-left: 1px solid rgba(7, 17, 36, 0.1);
          }

          .bottomFeatures div:first-child {
            border-left: 0;
          }

          .bottomFeatures span {
            color: #071124;
            font-size: 14px;
            font-weight: 850;
          }

          @keyframes drawLine {
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

          @keyframes cardIn {
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          @keyframes pieceReveal {
            from {
              opacity: 0;
              transform: translate(-50%, -46%) scale(0.94);
            }

            to {
              opacity: 1;
              transform: translate(-50%, -50%) scale(1);
            }
          }

          @media (max-width: 760px) {
            .kishibHero {
              display: none;
            }
          }

          @media (min-width: 761px) and (max-width: 1120px) {
            .kishibHero {
              padding: 128px 18px 40px;
            }

            .brandPanel,
            .topStatement {
              position: relative;
              inset: auto;
              width: 100%;
              max-width: 680px;
              margin: 0 auto;
              text-align: center;
            }

            .brandMark {
              justify-content: center;
              margin-bottom: 28px;
            }

            .heroButtons {
              justify-content: center;
            }

            .topStatement {
              justify-content: center;
              margin-top: 42px;
            }

            .stage {
              height: auto;
              margin-top: 34px;
              display: grid;
              gap: 16px;
            }

            .connectorLayer {
              display: none;
            }

            .pieceWrap {
              position: relative;
              left: auto;
              top: auto;
              width: min(460px, 88vw);
              margin: 0 auto 12px;
              transform: none;
              animation: none;
            }

            .infoCard {
              position: relative;
              inset: auto;
              width: 100%;
              max-width: 540px;
              margin: 0 auto;
            }

            .valueCard,
            .periodCard,
            .descriptionCard,
            .materialCard,
            .originCard,
            .authCard {
              top: auto;
              right: auto;
              bottom: auto;
              left: auto;
            }

            .bottomFeatures {
              margin-top: 30px;
              grid-template-columns: 1fr 1fr;
            }

            .bottomFeatures div {
              border-left: 0;
              border-top: 1px solid rgba(7, 17, 36, 0.1);
            }
          }
        `}</style>
      </section>
    </>
  );
}