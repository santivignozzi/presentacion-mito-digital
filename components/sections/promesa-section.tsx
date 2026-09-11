"use client";

import { motion } from "framer-motion";

import { SectionHeading } from "@/components/ui/section-heading";
import { promesa } from "@/data/presentacion";

export function PromesaSection() {
  return (
    <section id="promesa" className="mx-auto max-w-[1360px] px-6 py-24 md:py-32">
      <SectionHeading eyebrow={promesa.eyebrow} title={promesa.title} intro={promesa.intro} />

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="display mt-16 max-w-[24ch] text-balance text-3xl leading-[1.1] sm:text-4xl md:mt-20 md:text-5xl"
      >
        {promesa.claim}
      </motion.p>

      <div className="mt-16 rule-t md:mt-20">
        {promesa.items.map((item, i) => (
          <motion.div
            key={item.range}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="group rule-b grid gap-4 py-8 transition-colors duration-300 hover:bg-paper-2 md:grid-cols-12 md:items-baseline md:gap-8 md:px-4"
          >
            <span className="label text-accent md:col-span-3">{item.range}</span>

            <h3 className="display text-2xl md:col-span-4 md:text-3xl">{item.title}</h3>

            <p className="text-sm leading-relaxed text-ink-2 md:col-span-5 md:text-base">
              {item.body}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
