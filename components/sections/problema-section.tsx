"use client";

import { motion } from "framer-motion";

import { SectionHeading } from "@/components/ui/section-heading";
import { problema } from "@/data/presentacion";

export function ProblemaSection() {
  return (
    <section id="problema" className="mx-auto max-w-[1360px] px-6 py-24 md:py-32">
      <SectionHeading eyebrow={problema.eyebrow} title={problema.title} intro={problema.intro} />

      <div className="mt-20 rule-t">
        {problema.items.map((item, i) => (
          <motion.div
            key={item.code}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="group rule-b grid gap-4 py-8 transition-colors duration-300 hover:bg-paper-2 md:grid-cols-12 md:items-baseline md:gap-8 md:px-4"
          >
            <span className="display text-3xl text-ink-3 transition-colors group-hover:text-accent md:col-span-1">
              {item.code}
            </span>

            <h3 className="display text-2xl md:col-span-4 md:text-3xl">{item.title}</h3>

            <p className="text-sm leading-relaxed text-ink-2 md:col-span-7 md:text-base">
              {item.body}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
