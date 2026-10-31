import { Reveal } from "@/components/reveal";
import { INSTAGRAM, MAP_EMBED, MAPS_URL, PHONE_DISPLAY, PHONE_TEL, waLink } from "@/lib/site";

export function Visit() {
  return (
    <section id="visit" className="scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto w-[min(1180px,calc(100%-40px))]">
        <Reveal className="mb-9 max-w-3xl">
          <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-primary uppercase">05 — Find the desk</p>
          <h2 className="font-display text-[clamp(2.8rem,6vw,5rem)] leading-[0.9] font-extrabold uppercase">Visit us</h2>
          <p className="mt-3.5 text-base-content/70">
            Paschim Vihar, Delhi. Call, WhatsApp, or walk in beside Laxmi Narayan Mandir.
          </p>
        </Reveal>
        <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="card h-full border border-white/10 bg-neutral shadow-none">
              <div className="card-body">
                <p className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">Expanded store</p>
                <address className="text-lg leading-snug not-italic">
                  B.K. Sports &amp; Fitness
                  <br />
                  Plot No. 1, Residential Scheme
                  <br />
                  Paschim Vihar Main Road, Jwalaheri Village
                  <br />
                  Paschim Vihar, Delhi 110063
                  <br />
                  Basement, next to Laxmi Narayan Mandir
                </address>
                <p className="mt-4 text-xs font-semibold tracking-[0.16em] text-primary uppercase">Jwala Heri Market counter</p>
                <p className="text-base-content/70">
                  WZ 39/1, Near Jwala Heri Market
                  <br />
                  Paschim Vihar, Delhi 110063
                </p>
                <div className="mt-4 divide-y divide-white/10">
                  <div className="py-3">
                    <p className="text-xs tracking-[0.14em] text-secondary uppercase">Phone</p>
                    <a href={`tel:${PHONE_TEL}`} className="link font-semibold">{PHONE_DISPLAY}</a>
                  </div>
                  <div className="py-3">
                    <p className="text-xs tracking-[0.14em] text-secondary uppercase">Hours</p>
                    <p>Opens at 11:00 AM. Call or WhatsApp before you ride over — match days shift the desk.</p>
                  </div>
                  <div className="py-3">
                    <p className="text-xs tracking-[0.14em] text-secondary uppercase">Instagram</p>
                    <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="link font-semibold">
                      @b.ksportsfitness
                    </a>
                  </div>
                </div>
                <div className="card-actions mt-2">
                  <a
                    className="btn btn-primary rounded-none [clip-path:polygon(0_0,calc(100%-16px)_0,100%_16px,100%_100%,0_100%)]"
                    href={waLink("Hi BK Sports & Fitness, I want to visit or place an order.")}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp the desk
                  </a>
                  <a className="btn btn-outline" href={`tel:${PHONE_TEL}`}>Call now</a>
                </div>
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="link link-hover mt-2 text-sm text-base-content/70">
                  Open directions in Google Maps
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="card h-full min-h-[460px] overflow-hidden border border-white/10 bg-base-200 shadow-none">
              <iframe
                title="Map showing Jwalaheri, Paschim Vihar, beside Laxmi Narayan Mandir"
                src={MAP_EMBED}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full min-h-[460px] w-full border-0 grayscale contrast-105 brightness-90 transition hover:grayscale-0 hover:brightness-100"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
