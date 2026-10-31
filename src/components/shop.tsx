"use client";

import Image from "next/image";
import { useState } from "react";
import { Reveal } from "@/components/reveal";
import { TiltLink } from "@/components/tilt-link";
import { categories, filterNotes, filters, products, waLink, type Filter } from "@/lib/site";

export function Shop() {
  const [filter, setFilter] = useState<Filter>("all");

  function apply(next: Filter, scroll: boolean) {
    setFilter(next);
    const url = new URL(window.location.href);
    if (next === "all") url.searchParams.delete("sport");
    else url.searchParams.set("sport", next);
    url.hash = "gear";
    history.replaceState(null, "", url);
    if (scroll) document.getElementById("gear")?.scrollIntoView({ behavior: "smooth" });
  }

  const visible = products.filter((product) => filter === "all" || product.cats.includes(filter));

  return (
    <>
      <section id="categories" className="scroll-mt-24 py-20 lg:py-28">
        <div className="mx-auto w-[min(1180px,calc(100%-40px))]">
          <Reveal className="mb-9 max-w-3xl">
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-primary uppercase">01 · The floor</p>
            <h2 className="font-display text-[clamp(2.8rem,6vw,5rem)] leading-[0.9] font-extrabold uppercase">Shop by sport</h2>
            <p className="mt-3.5 text-base-content/70">
              Five desks, one counter in Paschim Vihar. Pick a game and the floor will meet you there.
            </p>
          </Reveal>
          <div className="bento">
            {categories.map((category) => (
              <TiltLink
                key={category.id}
                href={`#gear`}
                maxX={3.5}
                maxY={4.5}
                onClick={(event) => {
                  event.preventDefault();
                  apply(category.id, true);
                }}
                className={`card image-full ${category.area} h-full overflow-hidden border border-white/10 bg-[#0c0e11] shadow-none`}
              >
                <figure className="absolute inset-0">
                  <Image
                    src={category.image}
                    alt={category.alt}
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover transition duration-700 hover:scale-110"
                  />
                </figure>
                <div className="card-body justify-end bg-gradient-to-t from-black/80 via-black/25 to-transparent">
                  <span className="font-display tracking-[0.14em] text-secondary">{category.index}</span>
                  <h3 className="card-title font-display text-[clamp(2rem,3vw,3rem)] leading-none uppercase">{category.title}</h3>
                  <p className="max-w-xl text-base text-[#e4e7dc]">{category.text}</p>
                  <span className="mt-1 text-xs font-semibold tracking-[0.08em] text-primary uppercase">Explore →</span>
                </div>
              </TiltLink>
            ))}
          </div>
        </div>
      </section>

      <section id="gear" className="scroll-mt-24 bg-gradient-to-b from-white/[0.02] to-transparent py-20 lg:py-28">
        <div className="mx-auto w-[min(1180px,calc(100%-40px))]">
          <Reveal className="mb-8 max-w-3xl">
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-primary uppercase">02 · Highlights</p>
            <h2 className="font-display text-[clamp(2.8rem,6vw,5rem)] leading-[0.9] font-extrabold uppercase">Gear the lane asks for</h2>
            <p className="mt-3.5 text-base-content/70">{filterNotes[filter]}</p>
          </Reveal>
          <div className="relative z-[3] mb-7 flex flex-wrap gap-2" role="toolbar" aria-label="Filter gear">
            {filters.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`btn btn-sm rounded-full ${filter === item.id ? "btn-primary" : "btn-outline"}`}
                aria-pressed={filter === item.id}
                onClick={() => apply(item.id, false)}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((product) => (
              <TiltLink
                key={product.name}
                href={waLink(product.ask)}
                target="_blank"
                rel="noopener noreferrer"
                className="card border border-white/10 bg-neutral shadow-none before:pointer-events-none before:absolute before:top-3 before:left-3 before:z-[3] before:h-4 before:w-4 before:border-t before:border-l before:border-primary after:pointer-events-none after:absolute after:right-3 after:bottom-3 after:z-[3] after:h-4 after:w-4 after:border-r after:border-b after:border-primary"
              >
                <figure className="relative aspect-square bg-[#0c0e11]">
                  <Image src={product.image} alt={product.alt} fill sizes="(min-width: 1024px) 30vw, 100vw" className="object-cover transition duration-500 hover:scale-105" />
                  <span className="badge badge-neutral absolute bottom-3.5 left-3.5 border border-white/10">{product.tag}</span>
                </figure>
                <div className="card-body">
                  <h3 className="card-title font-display text-[1.7rem] leading-none uppercase">{product.name}</h3>
                  <p className="text-base-content/70">{product.copy}</p>
                  <span className="text-sm font-semibold tracking-wider text-primary uppercase">Ask on WhatsApp</span>
                </div>
              </TiltLink>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
