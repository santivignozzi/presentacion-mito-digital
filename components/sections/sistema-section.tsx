"use client";

import { motion } from "framer-motion";

import { SectionHeading } from "@/components/ui/section-heading";
import { sistema } from "@/data/presentacion";

export function SistemaSection() {
  return (
    <section id="sistema" className="mx-auto max-w-[1360px] px-6 py-24 md:py-32">
      <SectionHeading eyebrow={sistema.eyebrow} title={sistema.title} intro={sistema.intro} />

      <ol className="mt-20 rule-t">
        {sistema.steps.map((step, i) => (
          <motion.li
            key={step.step}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group rule-b grid gap-4 py-9 transition-colors duration-300 hover:bg-paper-2 md:grid-cols-12 md:items-baseline md:gap-8 md:px-4"
          >
            <span className="num-tag text-xs text-ink-3 md:col-span-1">{step.step}</span>

            <h3 className="display text-2xl md:col-span-3 md:text-3xl">{step.title}</h3>

            <p className="text-sm leading-relaxed text-ink-2 md:col-span-5 md:text-base">
              {step.description}
            </p>

            <p className="flex items-baseline gap-2 md:col-span-3 md:justify-end md:text-right">
              <span className="label shrink-0 text-accent">→</span>
              <span className="text-sm text-ink">{step.output}</span>
            </p>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
