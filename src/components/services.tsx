import { Reveal } from "@/components/reveal";
import { services } from "@/lib/site";

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto w-[min(1180px,calc(100%-40px))]">
        <Reveal className="mb-9 max-w-3xl">
          <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-primary uppercase">03 — The desk</p>
          <h2 className="font-display text-[clamp(2.8rem,6vw,5rem)] leading-[0.9] font-extrabold uppercase">Service, not just stock</h2>
          <p className="mt-3.5 text-base-content/70">
            The counter does more than hand over a box. Bring the bat, the racket, or the question.
          </p>
        </Reveal>
        <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Reveal key={service.no}>
              <article className="card h-full min-h-64 border border-white/10 bg-gradient-to-b from-primary/10 to-neutral shadow-none">
                <div className="card-body">
                  <span className="font-display text-3xl text-secondary">{service.no}</span>
                  <h3 className="card-title font-display mt-6 text-[1.7rem] leading-none uppercase">{service.title}</h3>
                  <p className="text-base-content/70">{service.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
