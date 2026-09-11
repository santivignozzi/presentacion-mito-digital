"use client";

import { VerticalTabs, type VerticalTabItem } from "@/components/ui/vertical-tabs";
import { serviciosExtra } from "@/data/presentacion";
import { cn } from "@/lib/utils";

/**
 * Pie de cada panel del carrusel. Las flechas de navegación están posicionadas
 * sobre la esquina inferior derecha del panel, así que el padding derecho les
 * reserva lugar. En pantallas chicas no entran dato y etiqueta en una misma
 * fila, por eso la etiqueta sube arriba del número.
 */
function PanelFooter({
  label,
  value,
  tag,
  className,
}: {
  label: string;
  value: string;
  tag: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mt-8 flex flex-col-reverse items-start gap-1 pr-[116px] sm:flex-row sm:items-end sm:justify-between sm:gap-4 sm:pr-[132px]",
        className,
      )}
    >
      <div>
        <p className="label text-ink-3">{label}</p>
        <p className="display mt-2 text-4xl md:text-5xl">{value}</p>
      </div>
      <span className="label text-accent">{tag}</span>
    </div>
  );
}

function PanelLanding() {
  return (
    <div className="flex h-full flex-col p-7 md:p-10">
      <p className="label text-ink-3">Página de destino</p>

      <div className="mt-6 flex flex-1 flex-col border border-rule bg-paper">
        <div className="flex items-center gap-2 border-b border-rule px-4 py-2.5">
          <span className="size-2 rounded-full bg-rule" />
          <span className="size-2 rounded-full bg-rule" />
          <span className="size-2 rounded-full bg-rule" />
          <span className="num-tag ml-3 text-[10px] text-ink-3">mito.com/propuesta</span>
        </div>

        <div className="flex flex-1 flex-col gap-3 p-5 md:p-7">
          <div className="h-2.5 w-2/3 bg-ink/80" />
          <div className="h-2.5 w-1/2 bg-ink/80" />
          <div className="mt-2 h-1.5 w-full bg-rule/60" />
          <div className="h-1.5 w-5/6 bg-rule/60" />
          <div className="mt-auto flex items-center gap-3 pt-5">
            <span className="bg-accent px-4 py-2 text-[11px] font-medium text-paper">
              Quiero una demo
            </span>
            <span className="h-8 flex-1 border border-rule" />
          </div>
        </div>
      </div>

      <PanelFooter
        className="mt-7"
        label="Tasa de conversión objetivo"
        value="6,4%"
        tag="Medida y testeada"
      />
    </div>
  );
}

function PanelHerramientas() {
  return (
    <div className="flex h-full flex-col justify-between p-7 md:p-10">
      <div>
        <p className="label text-ink-3">Asistente interno</p>

        <div className="mt-7 space-y-4">
          <div className="border border-rule bg-paper p-4">
            <p className="label mb-2 text-ink-3">Equipo</p>
            <p className="text-sm text-ink md:text-base">
              Necesito los 20 contactos de la base que abrieron los últimos 3 envíos y todavía no
              tienen reunión.
            </p>
          </div>

          <div className="border border-ink bg-ink p-4 text-paper">
            <p className="label mb-2 text-highlight">Asistente</p>
            <p className="text-sm md:text-base">
              Listo. 20 contactos, ordenados por cantidad de aperturas. Los cargué al CRM con la
              etiqueta <span className="text-highlight">intención-alta</span>.
            </p>
          </div>
        </div>
      </div>

      <PanelFooter label="Tiempo operativo ahorrado" value="~6 h / sem" tag="A medida" />
    </div>
  );
}

const panels = [<PanelLanding key="lp" />, <PanelHerramientas key="ia" />];

const items: VerticalTabItem[] = serviciosExtra.items.map((item, i) => ({
  id: String(i + 1).padStart(2, "0"),
  title: item.title,
  description: item.description,
  panel: panels[i],
}));

export function ServiciosSection() {
  return (
    <section id="servicios" className="mx-auto max-w-[1360px] px-6 py-24 md:py-32">
      <p className="mb-16 max-w-2xl text-pretty text-base leading-relaxed text-ink-2 sm:text-lg">
        {serviciosExtra.intro}
      </p>

      <VerticalTabs
        eyebrow={serviciosExtra.eyebrow}
        heading={serviciosExtra.title}
        items={items}
      />

      <div className="rule-t mt-16 pt-6 md:mt-20">
        <p className="max-w-3xl text-sm leading-relaxed text-ink-3">{serviciosExtra.nota}</p>
      </div>
    </section>
  );
}
