"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { cierre } from "@/data/presentacion";

export function CierreSection() {
  return (
    <section id="cierre" className="invert-block">
      <div className="mx-auto max-w-[1360px] px-6 py-28 md:py-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="label text-highlight">{cierre.eyebrow}</p>

          <h2 className="display mt-8 max-w-[18ch] text-balance text-[3rem] leading-[0.98] sm:text-7xl lg:text-[6rem]">
            {cierre.title}
          </h2>

          <div className="mt-14 grid gap-10 md:grid-cols-12">
            <p className="text-pretty text-base leading-relaxed text-paper/65 md:col-span-6 md:col-start-6 md:text-lg">
              {cierre.body}
            </p>

            <div className="flex flex-wrap items-center gap-3 md:col-span-6 md:col-start-6">
              <Link
                href={cierre.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 bg-paper px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-highlight"
              >
                Agendar diagnóstico
                <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              <Link
                href={`mailto:${cierre.email}`}
                className="group inline-flex items-center gap-2 border border-paper/25 px-6 py-3.5 text-sm font-medium text-paper transition-colors hover:border-paper"
              >
                {cierre.email}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </motion.div>

        <footer className="mt-28 flex flex-col items-start gap-5 border-t border-paper/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <Image
            src="/logos/mito-logo-blanco.png"
            alt="Mito"
            width={100}
            height={26}
            className="h-5 w-auto opacity-70"
          />
          <p className="label text-paper/40">
            Propuesta de prospección integral — {new Date().getFullYear()}
          </p>
        </footer>
      </div>
    </section>
  );
}
