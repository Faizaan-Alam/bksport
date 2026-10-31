import Link from "next/link";
import { INSTAGRAM, navLinks, PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 px-0 pt-10 pb-7">
      <div className="footer mx-auto w-[min(1180px,calc(100%-40px))] sm:footer-horizontal">
        <aside>
          <Link href="#top" className="flex items-center gap-2.5">
            <span className="grid h-[42px] w-[42px] place-items-center bg-primary font-display text-xl font-extrabold text-primary-content [clip-path:polygon(8px_0,100%_0,calc(100%-8px)_100%,0_100%)]">
              BK
            </span>
            <span className="flex flex-col leading-none">
              <strong className="text-sm font-semibold tracking-[0.12em] uppercase">BK Sports</strong>
              <em className="text-[0.68rem] tracking-[0.18em] text-base-content/60 uppercase not-italic">&amp; Fitness</em>
            </span>
          </Link>
          <p className="max-w-xs text-base-content/70">One Stop for All Your Sports &amp; Fitness Needs</p>
        </aside>
        <nav className="flex flex-col gap-2">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="link link-hover">
              {link.label}
            </a>
          ))}
        </nav>
        <nav className="flex flex-col gap-2">
          <a href={`tel:${PHONE_TEL}`} className="link link-hover font-semibold">{PHONE_DISPLAY}</a>
          <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="link link-hover">
            @b.ksportsfitness
          </a>
          <span className="text-base-content/70">Paschim Vihar, Delhi 110063</span>
        </nav>
      </div>
      <div className="mx-auto mt-7 flex w-[min(1180px,calc(100%-40px))] flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4">
        <p className="text-sm text-base-content/70">© 2026 BK Sports &amp; Fitness. Paschim Vihar, Delhi.</p>
        <a
          href="https://faizaan-alam-portfolio.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="badge badge-outline h-auto border-white/20 px-3 py-2 text-[0.68rem] font-semibold tracking-[0.16em] text-base-content/80 uppercase transition hover:border-primary hover:text-primary"
        >
          Made by Faizaan Alam
        </a>
      </div>
    </footer>
  );
}
