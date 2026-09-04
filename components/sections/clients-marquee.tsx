"use client";

import * as React from "react";

import { clients } from "@/data/presentacion";

const SPEED = 0.045; // px por milisegundo

export function ClientsMarquee() {
  const trackRef = React.useRef<HTMLDivElement>(null);
  const pausedRef = React.useRef(false);
  const dragRef = React.useRef<{ x: number; scroll: number } | null>(null);

  React.useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    // Arrancamos en la copia del medio para poder arrastrar en ambos sentidos.
    const third = () => el.scrollWidth / 3;
    el.scrollLeft = third();

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let last = performance.now();

    const step = (now: number) => {
      const dt = Math.min(now - last, 64);
      last = now;
      if (!pausedRef.current) el.scrollLeft += dt * SPEED;

      const w = third();
      if (el.scrollLeft >= w * 2) el.scrollLeft -= w;
      else if (el.scrollLeft < w) el.scrollLeft += w;

      raf = requestAnimationFrame(step);
    };

    const pause = () => (pausedRef.current = true);
    const resume = () => {
      if (!dragRef.current) pausedRef.current = false;
    };
    el.addEventListener("mouseenter", pause);
    el.addEventListener("mouseleave", resume);

    raf = requestAnimationFrame(step);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("mouseenter", pause);
      el.removeEventListener("mouseleave", resume);
    };
  }, []);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    // En touch dejamos el scroll nativo del navegador.
    if (e.pointerType !== "mouse" || !trackRef.current) return;
    dragRef.current = { x: e.clientX, scroll: trackRef.current.scrollLeft };
    pausedRef.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag || !trackRef.current) return;
    trackRef.current.scrollLeft = drag.scroll - (e.clientX - drag.x);
  };

  const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragRef.current) return;
    dragRef.current = null;
    pausedRef.current = false;
    e.currentTarget.releasePointerCapture(e.pointerId);
  };

  return (
    <section id="clientes" className="overflow-hidden py-16 md:py-20">
      <div className="mx-auto mb-8 max-w-[1360px] px-6">
        <p className="label rule-b pb-4 text-ink-3">Marcas que ya trabajaron con Mito</p>
      </div>

      <div
        ref={trackRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        className="fade-edges flex cursor-grab overflow-x-auto overscroll-x-contain active:cursor-grabbing [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [touch-action:pan-x_pan-y] [&::-webkit-scrollbar]:hidden"
      >
        {[0, 1, 2].map((copy) => (
          <ul
            key={copy}
            aria-hidden={copy > 0}
            className="flex shrink-0 items-center gap-12 pr-12 md:gap-16 md:pr-16"
          >
            {clients.map((client) => (
              <li key={client.name} className="shrink-0 select-none">
                {client.src ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={client.src}
                    alt={client.name}
                    draggable={false}
                    loading="lazy"
                    decoding="async"
                    className="h-8 w-[104px] object-contain opacity-45 [filter:brightness(0)] transition duration-300 hover:opacity-100 hover:[filter:none] md:h-9 md:w-[120px]"
                  />
                ) : (
                  <span className="display text-xl text-ink-3 transition-colors duration-300 hover:text-ink md:text-2xl">
                    {client.name}
                  </span>
                )}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}
