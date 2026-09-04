"use client";

import { motion } from "framer-motion";

import { SectionHeading } from "@/components/ui/section-heading";
import { cronograma } from "@/data/presentacion";

export function CronogramaSection() {
  return (
    <section className="mx-auto max-w-[1360px] px-6 py-24 md:py-32">
      <SectionHeading eyebrow={cronograma.eyebrow} title={cronograma.title} />

      <div className="mt-20 grid gap-x-10 gap-y-14 md:grid-cols-3">
        {cronograma.phases.map((phase, i) => (
          <motion.div
            key={phase.range}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="rule-t pt-6"
          >
            <div className="flex items-baseline justify-between">
              <span className="label text-accent">{phase.range}</span>
              <span className="num-tag text-[11px] text-ink-3">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>

            <h3 className="display mt-5 text-4xl">{phase.title}</h3>

            <ul className="mt-8">
              {phase.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="border-b border-rule/40 py-3 text-sm leading-relaxed text-ink-2 first:border-t"
                >
                  {bullet}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
