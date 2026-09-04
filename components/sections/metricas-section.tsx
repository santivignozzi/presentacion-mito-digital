"use client";

import { motion } from "framer-motion";

import { SectionHeading } from "@/components/ui/section-heading";
import { metricas } from "@/data/presentacion";

export function MetricasSection() {
  return (
    <section id="metricas" className="mx-auto max-w-[1360px] px-6 py-24 md:py-32">
      <SectionHeading eyebrow={metricas.eyebrow} title={metricas.title} intro={metricas.intro} />

      <div className="mt-20 rule-t">
        {metricas.items.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="group rule-b grid gap-3 py-7 transition-colors duration-300 hover:bg-paper-2 md:grid-cols-12 md:items-baseline md:gap-8 md:px-4"
          >
            <span className="num-tag text-xs text-ink-3 md:col-span-1">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="display text-2xl md:col-span-4 md:text-3xl">{item.label}</h3>
            <p className="text-sm leading-relaxed text-ink-2 md:col-span-7 md:text-base">
              {item.detail}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
