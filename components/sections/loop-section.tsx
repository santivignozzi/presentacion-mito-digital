"use client";

import { motion } from "framer-motion";

import { SectionHeading } from "@/components/ui/section-heading";
import { loop } from "@/data/presentacion";

export function LoopSection() {
  return (
    <section className="mx-auto max-w-[1360px] px-6 py-24 md:py-32">
      <SectionHeading eyebrow={loop.eyebrow} title={loop.title} />

      <div className="mt-20 grid gap-px border border-rule/40 bg-rule/40 md:grid-cols-2">
        {loop.cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, delay: i * 0.07 }}
            className="bg-paper p-8 transition-colors duration-300 hover:bg-paper-2 md:p-10"
          >
            <span className="num-tag text-[11px] text-accent">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="display mt-5 text-2xl md:text-3xl">{card.title}</h3>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-2 md:text-base">
              {card.body}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
