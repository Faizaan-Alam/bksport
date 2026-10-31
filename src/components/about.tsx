import { Reveal } from "@/components/reveal";

const timeline = [
  { title: "1999", text: "The counter opens in Jwala Heri Market." },
  { title: "27 years", text: "Bats knocked, rackets strung, teams kitted from this lane." },
  { title: "Expanded", text: "A larger floor in Jwalaheri, next to Laxmi Narayan Mandir." },
  { title: "Today", text: "Walk in, or have it shipped across India and worldwide." },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto grid w-[min(1180px,calc(100%-40px))] items-center gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-12">
        <Reveal>
          <p className="font-display text-[clamp(8rem,16vw,13rem)] leading-[0.8] font-extrabold text-primary">27</p>
          <p className="mt-2 max-w-64 text-sm tracking-[0.08em] text-secondary uppercase">
            Years of powering champions
            <br />
            from Paschim Vihar
          </p>
        </Reveal>
        <Reveal>
          <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-primary uppercase">04 — The shop</p>
          <h2 className="font-display text-[clamp(2.8rem,6vw,5rem)] leading-[0.9] font-extrabold uppercase">
            A local counter with a long memory
          </h2>
          <p className="mt-4 text-[#d5d8cc]">
            B.K. Sports &amp; Fitness has stood in Paschim Vihar for 27 years. It began as a Jwala Heri counter players already knew by name — bats, rackets, shoes, and someone who would tell you what was actually worth buying.
          </p>
          <p className="mt-4 text-[#d5d8cc]">
            The floor is larger now, in Jwalaheri beside Laxmi Narayan Mandir. The work is the same. Gear is chosen at the counter, bats are knocked and oiled, rackets are repaired, and orders leave for the rest of India and overseas.
          </p>
          <p className="mt-4 font-medium text-primary">Jwala Heri se shuru. Ab Jwalaheri mein naya floor. Same desk.</p>
          <ol className="mt-6 grid list-none gap-3.5 p-0 sm:grid-cols-2 lg:grid-cols-4">
            {timeline.map((item) => (
              <li key={item.title} className="border-t border-primary/40 pt-2.5">
                <strong className="block">{item.title}</strong>
                <span className="text-sm text-base-content/70">{item.text}</span>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
