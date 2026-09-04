"use client";

import React, { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

export type VerticalTabItem = {
  id: string;
  title: string;
  description: string;
  panel: React.ReactNode;
};

const AUTO_PLAY_DURATION = 6000;

export function VerticalTabs({
  eyebrow,
  heading,
  items,
}: {
  eyebrow: string;
  heading: string;
  items: VerticalTabItem[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleNext = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  const handleTabClick = (index: number) => {
    if (index === activeIndex) return;
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
    setIsPaused(false);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(handleNext, AUTO_PLAY_DURATION);
    return () => clearInterval(interval);
  }, [activeIndex, isPaused, handleNext]);

  const variants = {
    enter: (dir: number) => ({ y: dir > 0 ? "-100%" : "100%", opacity: 0 }),
    center: { zIndex: 1, y: 0, opacity: 1 },
    exit: (dir: number) => ({ zIndex: 0, y: dir > 0 ? "100%" : "-100%", opacity: 0 }),
  };

  return (
    <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
      {/* Tabs */}
      <div className="order-2 flex flex-col lg:order-1 lg:col-span-5">
        <div className="mb-12">
          <p className="label text-accent">{eyebrow}</p>
          <h2 className="display mt-4 text-balance text-4xl sm:text-5xl">{heading}</h2>
        </div>

        <div className="flex flex-col">
          {items.map((item, index) => {
            const isActive = activeIndex === index;
            return (
              <button
                key={item.id}
                onClick={() => handleTabClick(index)}
                className={cn(
                  "group relative flex items-start gap-4 py-6 text-left transition-colors duration-500 md:py-8",
                  index > 0 && "border-t border-rule/50",
                  isActive ? "text-ink" : "text-ink-3 hover:text-ink",
                )}
              >
                <span className="absolute -left-4 bottom-0 top-0 w-px bg-rule/40 md:-left-6">
                  {isActive && (
                    <motion.span
                      key={`progress-${index}-${isPaused}`}
                      className="absolute left-0 top-0 block w-full origin-top bg-accent"
                      initial={{ height: "0%" }}
                      animate={isPaused ? { height: "0%" } : { height: "100%" }}
                      transition={{ duration: AUTO_PLAY_DURATION / 1000, ease: "linear" }}
                    />
                  )}
                </span>

                <span className="num-tag mt-2 text-[10px] opacity-50">/{item.id}</span>

                <span className="flex flex-1 flex-col gap-2">
                  <span className="display text-3xl md:text-4xl">{item.title}</span>

                  <AnimatePresence mode="wait">
                    {isActive && (
                      <motion.span
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                        className="block overflow-hidden"
                      >
                        <span className="block max-w-sm pb-2 text-sm leading-relaxed text-ink-2 md:text-base">
                          {item.description}
                        </span>
                      </motion.span>
                    )}
                  </AnimatePresence>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Panel */}
      <div className="order-1 flex h-full flex-col justify-end lg:order-2 lg:col-span-7">
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Los slides son `absolute inset-0`, así que no aportan altura: el
              contenedor la necesita explícita. En mobile el aspecto fijo
              recortaba el contenido, por eso ahí manda una altura mínima. */}
          <div className="relative min-h-[620px] overflow-hidden border border-rule bg-paper-2 sm:aspect-[4/5] sm:min-h-0 md:aspect-[4/3] lg:aspect-[16/11]">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  y: { type: "spring", stiffness: 260, damping: 32 },
                  opacity: { duration: 0.4 },
                }}
                className="absolute inset-0 h-full w-full cursor-pointer"
                onClick={handleNext}
              >
                {items[activeIndex].panel}
              </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-5 right-5 z-20 flex gap-2 md:bottom-7 md:right-7">
              <button
                onClick={handlePrev}
                className="flex size-11 items-center justify-center border border-rule bg-paper text-ink transition-all hover:bg-ink hover:text-paper active:scale-90"
                aria-label="Anterior"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                onClick={handleNext}
                className="flex size-11 items-center justify-center border border-rule bg-paper text-ink transition-all hover:bg-ink hover:text-paper active:scale-90"
                aria-label="Siguiente"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerticalTabs;
