"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Menu, X } from "lucide-react";

import { AnimatedGroup } from "@/components/ui/animated-group";
import { cn } from "@/lib/utils";
import { hero, navItems } from "@/data/presentacion";

const transitionVariants = {
  item: {
    hidden: { opacity: 0, y: 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", bounce: 0.15, duration: 1.1 },
    },
  },
};

const flowSteps = [
  { label: "Meta Ads", detail: "Captación segmentada" },
  { label: "Base", detail: "Limpieza y segmentación" },
  { label: "Email", detail: "Secuencias automatizadas" },
  { label: "Reunión", detail: "Lead calificado a ventas" },
];

function RotatingWord() {
  const words = hero.title.rotating;
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), 2800);
    return () => clearInterval(id);
  }, [words.length]);

  return (
    // Padding gives descenders room inside the clipping box; the negative
    // margin keeps the visual gap to the line above unchanged.
    <span className="-mb-[0.18em] block overflow-hidden pb-[0.18em]">
      <span key={index} className="ink-underline animate-word-in inline-block italic">
        {words[index]}
      </span>
    </span>
  );
}

function SystemFlow() {
  return (
    <div className="rule-t">
      <div className="flex items-baseline justify-between py-4">
        <span className="label text-ink-3">El circuito de prospección</span>
        <span className="label text-accent">Corre todos los meses</span>
      </div>

      <div className="grid grid-cols-2 border-l border-rule/40 md:grid-cols-4">
        {flowSteps.map((step, i) => (
          <div
            key={step.label}
            className="group relative border-b border-r border-t border-rule/40 px-5 py-8 md:border-b-0"
          >
            <span className="num-tag text-[11px] text-ink-3">
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="display mt-4 text-2xl md:text-3xl">{step.label}</p>
            <p className="mt-2 text-sm leading-snug text-ink-2">{step.detail}</p>

            {i < flowSteps.length - 1 && (
              <ArrowRight
                aria-hidden
                className="absolute -right-[9px] top-1/2 hidden size-4 -translate-y-1/2 bg-paper text-ink-3 md:block"
              />
            )}
          </div>
        ))}
      </div>

      <p className="rule-b py-4 text-sm text-ink-2">
        <span className="mr-2 text-accent">↺</span>
        Lo que no convierte vuelve a Meta Ads como público de retargeting. El sistema recicla su
        propia base.
      </p>
    </div>
  );
}

export function HeroSection() {
  return (
    <>
      <HeroHeader />

      <section className="relative">
        <div className="mx-auto max-w-[1360px] px-6 pt-32 md:pt-40">
          {/* Document header row */}
          <AnimatedGroup variants={transitionVariants}>
            <div className="rule-b flex flex-wrap items-baseline justify-between gap-3 pb-4">
              <span className="label text-ink-3">{hero.badge}</span>
              <span className="label text-ink-3">Documento 001 — Confidencial</span>
            </div>
          </AnimatedGroup>

          <AnimatedGroup variants={transitionVariants} className="mt-10 md:mt-16">
            <h1 className="display max-w-[16ch] text-[3.25rem] leading-[0.98] sm:text-7xl lg:text-[6.5rem]">
              {hero.title.lead}
              <RotatingWord />
            </h1>
          </AnimatedGroup>

          <AnimatedGroup
            variants={{
              container: {
                visible: { transition: { staggerChildren: 0.06, delayChildren: 0.35 } },
              },
              ...transitionVariants,
            }}
            className="mt-14"
          >
            <div className="grid gap-10 md:grid-cols-12">
              <p className="text-pretty text-base leading-relaxed text-ink-2 md:col-span-7 md:col-start-6 md:text-lg">
                {hero.subtitle}
              </p>

              <div className="flex flex-wrap items-center gap-3 md:col-span-7 md:col-start-6">
                <Link
                  href={hero.ctaPrimary.href}
                  className="group inline-flex items-center gap-2 bg-ink px-6 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-accent"
                >
                  {hero.ctaPrimary.label}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href={hero.ctaSecondary.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 border border-rule px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:border-ink"
                >
                  {hero.ctaSecondary.label}
                  <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </AnimatedGroup>

          <AnimatedGroup
            variants={{
              container: {
                visible: { transition: { staggerChildren: 0.06, delayChildren: 0.5 } },
              },
              ...transitionVariants,
            }}
            className="mt-20 md:mt-28"
          >
            <SystemFlow />
          </AnimatedGroup>
        </div>
      </section>
    </>
  );
}

const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <nav
        data-state={menuState && "active"}
        className={cn(
          // Fondo sólido siempre: el video del logo se funde con este color
          // vía mix-blend-multiply, así no se ve la caja del video.
          "group fixed inset-x-0 top-0 z-30 bg-paper transition-colors duration-300",
          isScrolled && "border-b border-rule",
        )}
      >
        <div className="mx-auto max-w-[1360px] px-6">
          <div className="flex flex-wrap items-center justify-between gap-6 py-4 lg:gap-0">
            <div className="flex w-full items-center justify-between lg:w-auto">
              <Link href="#" aria-label="Mito" className="flex items-center">
                {/* El video es 16:9 con márgenes vacíos: la caja lo recorta al
                    área del logo (1050×560 ≈ 1.875 de ratio). Sin loop queda
                    congelado en el último frame. brightness aplana el gris del
                    fondo a blanco para que mix-blend-multiply lo funda con el
                    papel de la barra. */}
                <span className="relative block h-14 w-[105px] overflow-hidden bg-paper md:h-16 md:w-[120px]">
                  <video
                    src="/logos/mito-logo-anim.mp4"
                    autoPlay
                    muted
                    playsInline
                    preload="auto"
                    aria-hidden
                    className="absolute left-[-8.6%] top-[-16.1%] h-[128.5%] w-[122%] max-w-none brightness-[1.1] mix-blend-multiply"
                  />
                </span>
              </Link>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState ? "Cerrar menú" : "Abrir menú"}
                className="relative z-20 -m-3 block cursor-pointer p-3 lg:hidden"
              >
                <Menu className="m-auto size-5 duration-200 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0" />
                <X className="absolute inset-0 m-auto size-5 scale-0 opacity-0 duration-200 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100" />
              </button>
            </div>

            <ul className="absolute inset-x-0 m-auto hidden w-fit gap-8 lg:flex">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="label text-ink-3 transition-colors hover:text-ink"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mb-4 hidden w-full flex-col gap-6 border-b border-rule pb-6 group-data-[state=active]:flex lg:m-0 lg:flex lg:w-fit lg:flex-row lg:items-center lg:border-0 lg:pb-0">
              <ul className="flex flex-col lg:hidden">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setMenuState(false)}
                      className="label block py-3 text-[11px] text-ink-2"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <Link
                href="#cierre"
                className="inline-flex w-fit items-center gap-2 border border-ink px-5 py-3 text-xs font-medium transition-colors hover:bg-ink hover:text-paper lg:px-4 lg:py-2"
              >
                Agendar reunión
                <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
