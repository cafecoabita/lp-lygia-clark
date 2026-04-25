import { DoorOpen, Lock, Zap, Check } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const diferenciais = [
  { icon: DoorOpen, label: "Espaço privativo", desc: "Fechamento interno em vidro" },
  { icon: Lock, label: "Fechadura digital", desc: "Acesso seguro e controlado" },
  { icon: Zap, label: "Ar-condicionado", desc: "Infraestrutura já instalada" },
  { icon: Zap, label: "Tomadas 127v/220v", desc: "Distribuídas pela sala" },
  { icon: Check, label: "Vista frontal", desc: "Sem bloqueios para a Arena MRV" },
  { icon: Check, label: "Layout versátil", desc: "Adaptável ao seu negócio" },
];

const StructureSection = () => (
  <section className="py-24 bg-secondary">
    <div className="container mx-auto px-4 max-w-6xl">
      <AnimatedSection>
        <p className="tracking-[0.25em] uppercase text-sm text-muted-foreground mb-4 font-medium text-center">
          Estrutura Completa
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-foreground">
          Diferenciais do Espaço
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-xl mx-auto">
          Saiba o que está incluso nos nossos planos
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {diferenciais.map((item, i) => (
          <AnimatedSection key={i} delay={i * 0.08}>
            <div className="bg-background rounded-xl p-6 border border-border flex flex-col gap-3">
              <div className="w-10 h-10 rounded-lg bg-secondary border border-border flex items-center justify-center">
                <item.icon className="w-5 h-5 text-foreground" />
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">{item.label}</p>
                <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default StructureSection;