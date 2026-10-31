"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { PHONE_TEL, WA_GENERAL } from "@/lib/site";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const card = cardRef.current;
    if (!hero || !card) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const onMove = (event: PointerEvent) => {
      const rect = hero.getBoundingClientRect();
      hero.style.setProperty("--gx", `${event.clientX - rect.left}px`);
      hero.style.setProperty("--gy", `${event.clientY - rect.top}px`);
      if (reduce || event.pointerType === "touch" || window.innerWidth <= 980) return;
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `rotateY(${(-14 + x * 10).toFixed(2)}deg) rotateX(${(7 - y * 8).toFixed(2)}deg)`;
    };
    const onLeave = () => {
      card.style.transform = "";
    };
    hero.addEventListener("pointermove", onMove);
    hero.addEventListener("pointerleave", onLeave);
    return () => {
      hero.removeEventListener("pointermove", onMove);
      hero.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const hero = heroRef.current;
    if (!canvas || !hero) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || window.innerWidth <= 720) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let running = true;
    let frame = 0;
    type Dot = { x: number; y: number; r: number; vx: number; vy: number; color: string };
    let dots: Dot[] = [];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = hero.clientWidth;
      height = hero.clientHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(56, Math.floor((width * height) / 22000));
      dots = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.5 + 0.4,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        color: Math.random() > 0.82 ? "226,177,90" : "198,241,53",
      }));
    };

    const draw = () => {
      if (!running) return;
      ctx.clearRect(0, 0, width, height);
      dots.forEach((dot) => {
        dot.x += dot.vx;
        dot.y += dot.vy;
        if (dot.x < 0 || dot.x > width) dot.vx *= -1;
        if (dot.y < 0 || dot.y > height) dot.vy *= -1;
        ctx.beginPath();
        ctx.fillStyle = `rgba(${dot.color},${0.28 + dot.r / 8})`;
        ctx.arc(dot.x, dot.y, dot.r, 0, Math.PI * 2);
        ctx.fill();
      });
      frame = requestAnimationFrame(draw);
    };

    const onHide = () => {
      running = !document.hidden;
      if (running) draw();
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onHide);
    return () => {
      running = false;
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onHide);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      id="top"
      className="hero relative min-h-svh items-center overflow-hidden pt-[92px] pb-12"
    >
      <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(520px circle at var(--gx, 70%) var(--gy, 40%), rgba(198,241,53,0.16), transparent 60%)" }}
        aria-hidden="true"
      />
      <p className="pointer-events-none absolute -bottom-[6vh] -left-[2vw] font-display text-[34vw] leading-none font-extrabold text-white/[0.035] select-none" aria-hidden="true">
        BK
      </p>
      <div className="relative z-[1] mx-auto grid w-[min(1180px,calc(100%-40px))] items-center gap-9 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="mb-3 flex items-center text-xs font-semibold tracking-[0.2em] text-primary uppercase">
            <span className="animate-pulse-dot mr-2 inline-block h-2 w-2 rounded-full bg-primary shadow-[0_0_0_0_rgba(198,241,53,0.7)]" />
            27 Years of Powering Champions
          </p>
          <h1 className="font-display text-[clamp(4.2rem,7.2vw,7.4rem)] leading-[0.82] font-extrabold uppercase">
            BK Sports
            <br />
            <span className="text-primary">&amp; Fitness</span>
          </h1>
          <p className="mt-4 max-w-xl text-lg font-light text-[#d5d8cc]">
            Your Complete Destination for Cricket, Football, Badminton, Gym &amp; More
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#categories" className="btn btn-primary btn-lg rounded-none [clip-path:polygon(0_0,calc(100%-16px)_0,100%_16px,100%_100%,0_100%)]">
              Explore Categories
              <span aria-hidden="true">→</span>
            </a>
            <div className="join rounded-full border border-primary/45 bg-primary/5" role="group" aria-label="Call / WhatsApp">
              <a href={`tel:${PHONE_TEL}`} className="btn btn-ghost join-item rounded-full border-0">
                Call
              </a>
              <span className="join-item grid place-items-center px-1 text-primary" aria-hidden="true">/</span>
              <a href={WA_GENERAL} target="_blank" rel="noopener noreferrer" className="btn btn-ghost join-item rounded-full border-0">
                WhatsApp
              </a>
            </div>
          </div>
          <div className="stats stats-vertical mt-7 w-full border-t border-white/10 bg-transparent shadow-none sm:stats-horizontal">
            <div className="stat px-0 pr-6">
              <div className="stat-value font-display text-3xl">27</div>
              <div className="stat-desc text-sm text-base-content/70">Years in Paschim Vihar</div>
            </div>
            <div className="stat px-0 pr-6">
              <div className="stat-value font-display text-3xl">India+</div>
              <div className="stat-desc text-sm text-base-content/70">Pan-India &amp; worldwide delivery</div>
            </div>
            <div className="stat px-0">
              <div className="stat-value font-display text-3xl">In-shop</div>
              <div className="stat-desc text-sm text-base-content/70">Knocking, oiling, repairs</div>
            </div>
          </div>
        </div>

        <div className="relative h-80 [perspective:1400px] sm:h-[420px] lg:h-[min(68vh,620px)]">
          <div className="animate-floaty h-full">
            <div ref={cardRef} className="stage-card relative h-full overflow-hidden rounded-[28px] bg-[#0c0e11]">
              <Image
                src="/images/hero.jpg"
                alt="Cricket bat, football, badminton racket, shuttlecock and dumbbells in studio light"
                fill
                priority
                sizes="(min-width: 1024px) 46vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <p className="float-a absolute top-[12px] left-3 z-[2] m-0 rounded-full border border-white/15 bg-base-100/70 px-3.5 py-2.5 text-sm font-semibold backdrop-blur-md lg:top-[14%] lg:-left-[4%] lg:animate-floaty">
            Bat knocking &amp; oiling
          </p>
          <p className="float-b absolute right-[-2%] bottom-[18%] z-[2] m-0 animate-floaty rounded-full border border-white/15 bg-base-100/70 px-3.5 py-2.5 text-sm font-semibold backdrop-blur-md">
            Racket repair
          </p>
          <p className="float-c absolute top-[8%] right-[10%] z-[2] m-0 animate-floaty rounded-full border border-white/15 bg-base-100/70 px-3.5 py-2.5 text-sm font-semibold backdrop-blur-md">
            Ships worldwide
          </p>
        </div>
      </div>
    </section>
  );
}
