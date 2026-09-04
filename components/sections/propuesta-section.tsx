"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";

import { propuesta } from "@/data/presentacion";

export function PropuestaSection() {
  return (
    <section id="propuesta" className="invert-block">
      <div className="mx-auto max-w-[1360px] px-6 py-28 md:py-40">
        <div className="max-w-4xl">
          <p className="label text-highlight">{propuesta.eyebrow}</p>
          <h2 className="display mt-8 text-[3.5rem] leading-[0.95] sm:text-8xl lg:text-[7.5rem]">
            {propuesta.title}
          </h2>
          <p className="display mt-3 text-3xl italic text-highlight sm:text-5xl">
            {propuesta.claim}
          </p>
          <p className="mt-10 max-w-2xl text-pretty text-base leading-relaxed text-paper/65 sm:text-lg">
            {propuesta.body}
          </p>
        </div>

        <div className="relative mt-24 grid gap-px border-t border-paper/15 lg:grid-cols-2">
          <div
            aria-hidden
            className="absolute left-1/2 top-0 z-10 hidden size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-deep lg:flex"
          >
            <Plus className="size-5 text-highlight" strokeWidth={1.25} />
          </div>

          {propuesta.pillars.map((pillar, i) => (
            <motion.article
              key={pillar.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="border-b border-paper/15 py-12 lg:border-b-0 lg:px-10 lg:first:border-r lg:first:border-paper/15 lg:first:pl-0 lg:last:pr-0"
            >
              <span className="label text-highlight">{pillar.tag}</span>

              <h3 className="display mt-6 text-5xl sm:text-6xl">{pillar.title}</h3>
              <p className="display mt-2 text-2xl italic text-paper/50">{pillar.subtitle}</p>

              <p className="mt-7 max-w-md text-base leading-relaxed text-paper/70">
                {pillar.description}
              </p>

              <ul className="mt-10 border-t border-paper/15">
                {pillar.bullets.map((bullet, bi) => (
                  <li
                    key={bullet}
                    className="flex gap-5 border-b border-paper/10 py-3.5 text-sm leading-relaxed text-paper/75"
                  >
                    <span className="num-tag pt-0.5 text-[10px] text-paper/35">
                      {String(bi + 1).padStart(2, "0")}
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
