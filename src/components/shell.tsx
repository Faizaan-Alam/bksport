"use client";

import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";
import { INSTAGRAM, navLinks, PHONE_DISPLAY, PHONE_TEL, WA_GENERAL } from "@/lib/site";

function closeDrawer() {
  const input = document.getElementById("nav-drawer") as HTMLInputElement | null;
  if (input) input.checked = false;
  document.body.classList.remove("overflow-hidden");
}

export function Shell({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const input = document.getElementById("nav-drawer") as HTMLInputElement | null;
    const onToggle = () => {
      const open = Boolean(input?.checked);
      document.body.classList.toggle("overflow-hidden", open);
      document.querySelector(".nav-burger")?.setAttribute("aria-label", open ? "Close menu" : "Menu");
    };
    input?.addEventListener("change", onToggle);

    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setProgress(max > 0 ? (doc.scrollTop / max) * 100 : 0);
      setScrolled(doc.scrollTop > 12);
    };
    onScroll();
    document.addEventListener("scroll", onScroll, { passive: true });

    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((node): node is Element => Boolean(node));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -48% 0px", threshold: 0.01 },
    );
    sections.forEach((section) => observer.observe(section));

    return () => {
      input?.removeEventListener("change", onToggle);
      document.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="drawer">
      <input id="nav-drawer" type="checkbox" className="drawer-toggle" />
      <div
        className="progress fixed top-0 left-0 z-[80] h-0.5 bg-primary"
        style={{ width: `${progress}%` }}
        aria-hidden="true"
      />
      <svg className="grain hidden md:block" aria-hidden="true" focusable="false">
        <filter id="grain-filter">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain-filter)" />
      </svg>

      <div className="drawer-content">
        <header
          className={`navbar fixed top-0 z-50 px-4 transition-all lg:px-7 ${
            scrolled ? "h-16 border-b border-white/10 bg-base-100/90 backdrop-blur-lg" : "h-[76px] bg-gradient-to-b from-base-100/90 to-transparent"
          }`}
        >
          <div className="navbar-start">
            <Link href="#top" className="flex items-center gap-2.5" onClick={closeDrawer}>
              <span className="grid h-[42px] w-[42px] place-items-center bg-primary font-display text-xl font-extrabold text-primary-content [clip-path:polygon(8px_0,100%_0,calc(100%-8px)_100%,0_100%)]">
                BK
              </span>
              <span className="flex flex-col leading-none">
                <strong className="text-sm font-semibold tracking-[0.12em] uppercase">BK Sports</strong>
                <em className="text-[0.68rem] tracking-[0.18em] text-base-content/60 uppercase not-italic">&amp; Fitness</em>
              </span>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal gap-1 px-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={active === link.href ? "text-base-content" : "text-base-content/60"}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="navbar-end gap-2">
            <a href={`tel:${PHONE_TEL}`} className="btn btn-ghost hidden font-semibold tracking-wide lg:inline-flex">
              {PHONE_DISPLAY}
            </a>
            <a href={WA_GENERAL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm rounded-full">
              WhatsApp
            </a>
            <label htmlFor="nav-drawer" className="nav-burger btn btn-ghost btn-square relative lg:hidden" aria-label="Menu">
              <span className="absolute top-3.5 right-2.5 left-2.5 h-px bg-base-content transition" />
              <span className="absolute top-5 right-2.5 left-2.5 h-px bg-base-content transition" />
              <span className="absolute top-[26px] right-2.5 left-2.5 h-px bg-base-content transition" />
            </label>
          </div>
        </header>
        {children}
      </div>

      <div className="drawer-side z-[70]">
        <label htmlFor="nav-drawer" aria-label="Close menu" className="drawer-overlay" />
        <div className="relative min-h-dvh w-full bg-base-100">
          <label htmlFor="nav-drawer" aria-label="Close menu" className="btn btn-ghost btn-square absolute top-4 right-4 text-3xl">
            ×
          </label>
          <ul className="menu min-h-dvh w-full bg-base-100 p-8 pt-24">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeDrawer}
                  className="font-display text-4xl font-extrabold tracking-tight uppercase"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href={`tel:${PHONE_TEL}`} onClick={closeDrawer} className="text-2xl font-semibold text-primary">
                Call {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" onClick={closeDrawer} className="text-lg">
                @b.ksportsfitness
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
