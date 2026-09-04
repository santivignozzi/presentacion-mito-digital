import { HeroSection } from "@/components/ui/hero-section-1";
import { ClientsMarquee } from "@/components/sections/clients-marquee";
import { ProblemaSection } from "@/components/sections/problema-section";
import { PropuestaSection } from "@/components/sections/propuesta-section";
import { SistemaSection } from "@/components/sections/sistema-section";
import { LoopSection } from "@/components/sections/loop-section";
import { MetricasSection } from "@/components/sections/metricas-section";
import { CronogramaSection } from "@/components/sections/cronograma-section";
import { ServiciosSection } from "@/components/sections/servicios-section";
import { CierreSection } from "@/components/sections/cierre-section";

export default function Page() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <ClientsMarquee />
      <ProblemaSection />
      <PropuestaSection />
      <SistemaSection />
      <LoopSection />
      <MetricasSection />
      <CronogramaSection />
      <ServiciosSection />
      <CierreSection />
    </main>
  );
}
