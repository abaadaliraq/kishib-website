"use client";

import { Download, Menu, X } from "lucide-react";
import { useState } from "react";

import type { NavItem } from "@/data/kishibContent";

type TopBarProps = {
  nav: NavItem[];
  langLabel: string;
  onToggleLang: () => void;
  brandHref?: string;
  hideLanguage?: boolean;
};

export default function TopBar({
  nav,
  langLabel,
  onToggleLang,
  brandHref = "#home",
  hideLanguage = false,
}: TopBarProps) {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);
  const downloadItem = nav.find((item) => item.key === "download");

  return (
    <header className="topbarWrap">
      <div className="topbar">
        <a className="brand" href={brandHref} onClick={closeMenu}>
          <span>KISHIB</span>
        </a>

        <nav className="desktopNav" aria-label="KISHIB navigation">
          {nav.map((item) => (
            <a key={item.key} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        {!hideLanguage && (
          <button
            className="langBtn desktopLang"
            type="button"
            onClick={onToggleLang}
            aria-label="Toggle language"
          >
            {langLabel}
          </button>
        )}

        {downloadItem && (
          <a
            className="downloadTopBtn"
            href="#"
            aria-label={downloadItem.label}
            onClick={(event) => event.preventDefault()}
          >
            <Download size={15} />
            {downloadItem.label}
          </a>
        )}

        <button
          className="menuBtn"
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
        >
          <Menu size={20} />
        </button>
      </div>

      <div className={`sidebarBackdrop ${open ? "show" : ""}`} onClick={closeMenu} />

      <aside className={`mobileSidebar ${open ? "show" : ""}`} aria-hidden={!open}>
        <div className="sidebarHead">
          <span>KISHIB</span>
          <button type="button" onClick={closeMenu} aria-label="Close menu">
            <X size={19} />
          </button>
        </div>

        <nav className="mobileLinks" aria-label="Mobile navigation">
          {nav.map((item) => (
            <a key={`mobile-${item.key}`} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
        </nav>

        {!hideLanguage && (
          <button
            className="langBtn mobileLang"
            type="button"
            onClick={() => {
              onToggleLang();
              closeMenu();
            }}
            aria-label="Toggle language"
          >
            {langLabel}
          </button>
        )}

        {downloadItem && (
          <a
            className="mobileDownload"
            href="#"
            aria-label={downloadItem.label}
            onClick={(event) => event.preventDefault()}
          >
            <Download size={16} />
            {downloadItem.label}
          </a>
        )}
      </aside>

      <style jsx>{`
        .topbarWrap {
          position: fixed;
          inset: 0 0 auto;
          z-index: 50;
          padding: 10px 14px 0;
          pointer-events: none;
        }

        .topbar {
          width: min(1180px, 100%);
          height: 58px;
          margin: 0 auto;
          padding: 0 12px 0 18px;
          display: grid;
          grid-template-columns: 150px 1fr auto auto;
          align-items: center;
          gap: 12px;
          border: 1px solid rgba(216, 182, 106, 0.24);
          background: rgba(5, 5, 5, 0.94);
          color: #ffffff;
          box-shadow: 0 12px 34px rgba(0, 0, 0, 0.18);
          pointer-events: auto;
        }

        .brand {
          width: fit-content;
          color: #d8b66a;
          text-decoration: none;
        }

        .brand span {
          font-size: 14px;
          font-weight: 900;
          letter-spacing: 0.18em;
          text-shadow: 0 0 18px rgba(216, 100, 34, 0.2);
        }

        .desktopNav {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 2px;
          min-width: 0;
        }

        .desktopNav a {
          padding: 9px 11px;
          color: rgba(255, 255, 255, 0.72);
          font-size: 13px;
          font-weight: 700;
          line-height: 1;
          text-decoration: none;
          white-space: nowrap;
        }

        .desktopNav a:hover {
          color: #d8b66a;
        }

        .langBtn,
        .menuBtn,
        .sidebarHead button {
          border: 1px solid rgba(216, 182, 106, 0.34);
          background: #111111;
          color: #ffffff;
        }

        .langBtn {
          min-height: 38px;
          padding: 0 14px;
          font-size: 12px;
          font-weight: 850;
        }

        .desktopLang {
          justify-self: end;
        }

        .downloadTopBtn {
          min-height: 38px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 0 14px;
          border: 1px solid rgba(216, 182, 106, 0.58);
          background: #d8b66a;
          color: #050505;
          font-size: 12px;
          font-weight: 900;
          text-decoration: none;
          white-space: nowrap;
        }

        .menuBtn {
          display: none;
          width: 40px;
          height: 40px;
          place-items: center;
          justify-self: end;
        }

        .sidebarBackdrop,
        .mobileSidebar {
          display: none;
        }

        @media (max-width: 860px) {
          .topbarWrap {
            padding: 8px 10px 0;
          }

          .topbar {
            height: 52px;
            display: flex;
            justify-content: space-between;
            padding: 0 10px 0 14px;
          }

          .desktopNav,
          .desktopLang,
          .downloadTopBtn {
            display: none;
          }

          .brand span {
            font-size: 12px;
            letter-spacing: 0.16em;
          }

          .menuBtn {
            display: grid;
          }

          .sidebarBackdrop {
            position: fixed;
            inset: 0;
            display: block;
            background: rgba(0, 0, 0, 0.42);
            opacity: 0;
            pointer-events: none;
            transition: opacity 160ms ease;
          }

          .sidebarBackdrop.show {
            opacity: 1;
            pointer-events: auto;
          }

          .mobileSidebar {
            position: fixed;
            top: 0;
            bottom: 0;
            right: 10px;
            left: auto;
            width: min(292px, calc(100vw - 20px));
            display: flex;
            flex-direction: column;
            gap: 18px;
            padding: 18px;
            border-inline-start: 1px solid rgba(216, 182, 106, 0.28);
            border-inline-end: 1px solid rgba(216, 182, 106, 0.12);
            background:
              linear-gradient(180deg, rgba(216, 100, 34, 0.14), transparent 36%),
              #050505;
            color: #ffffff;
            pointer-events: none;
            visibility: hidden;
            transform: translate3d(calc(100% + 18px), 0, 0);
            transition: transform 190ms ease;
          }

          [dir="rtl"] .mobileSidebar {
            right: 10px;
            left: auto;
            transform: translate3d(calc(100% + 18px), 0, 0);
          }

          .mobileSidebar.show,
          [dir="rtl"] .mobileSidebar.show {
            pointer-events: auto;
            visibility: visible;
            transform: translate3d(0, 0, 0);
          }

          .sidebarHead {
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: #f2eee6;
            font-size: 13px;
            font-weight: 900;
            letter-spacing: 0.16em;
          }

          .sidebarHead button {
            width: 38px;
            height: 38px;
            display: grid;
            place-items: center;
          }

          .mobileLinks {
            display: flex;
            flex-direction: column;
            gap: 4px;
          }

          .mobileLinks a {
            padding: 12px 2px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            color: rgba(255, 255, 255, 0.76);
            font-size: 14px;
            font-weight: 750;
            text-decoration: none;
          }

          .mobileLang {
            width: 100%;
            margin-top: auto;
          }

          .mobileDownload {
            min-height: 42px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 9px;
            border: 1px solid rgba(216, 182, 106, 0.58);
            background: #d8b66a;
            color: #050505;
            font-size: 13px;
            font-weight: 900;
            text-decoration: none;
          }
        }
      `}</style>
    </header>
  );
}
