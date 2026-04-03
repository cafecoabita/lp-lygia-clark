import { useState } from "react";
import { Wifi, Lightbulb, Zap, Droplets, Building2, Check, Lock } from "lucide-react";
import { Armchair, Utensils, Bath, ChefHat } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const incluso = [
  { icon: Wifi, text: "Internet Wi-Fi e cabeada (2x Starlink + 1x Algar)" },
  { icon: Lightbulb, text: "Iluminação funcional instalada" },
  { icon: Zap, text: "Tomadas 110v e 220v" },
  { icon: Droplets, text: "Água" },
  { icon: Building2, text: "IPTU" },
  { icon: Check, text: "12 horas/mês de uso da sala de reunião" },
  { icon: Lock, text: "Fechadura digital" },
];

const infraestrutura = [
  { icon: Armchair, text: "Lounge" },
  { icon: Utensils, text: "Área para refeições" },
  { icon: Bath, text: "Banheiro masculino" },
  { icon: Bath, text: "Banheiro feminino" },
  { icon: ChefHat, text: "Cozinha equipada (micro-ondas, geladeira e pia)" },
];

const tabs = ["Incluso na Prestação", "Infraestrutura Comum"];

const IncludedSection = () => {
  const [active, setActive] = useState(0);

return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4 max-w-3xl">
        <AnimatedSection>
          <p className="tracking-[0.25em] uppercase text-sm text-muted-foreground mb-4 font-medium text-center">
            O que está incluso
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-foreground">
            Tudo que você precisa, já incluso
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="flex border-b border-border mb-10">
            {tabs.map((tab, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`px-6 py-3 text-sm font-medium transition-colors ${
                  active === i
                    ? "border-b-2 border-foreground text-foreground -mb-px"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="min-h-[520px]">
            {active === 0 ? (
              <div className="flex flex-col gap-3">
                {incluso.map((item, i) => (
                  <div key={i} className="group flex items-center gap-4 bg-background rounded-lg border-l-4 border-l-foreground border border-border px-5 py-4 transition-colors hover:bg-foreground cursor-default">
                    <item.icon className="w-5 h-5 text-foreground shrink-0 group-hover:text-background transition-colors" />
                    <span className="text-sm text-foreground group-hover:text-background transition-colors">{item.text}</span>
                  </div>
                ))}
                <div className="group mt-2 px-5 py-4 rounded-lg border-l-4 border-l-red-500 border border-border bg-background transition-colors hover:bg-red-500 cursor-default">
                  <p className="text-sm text-foreground group-hover:text-white transition-colors">
                    <span className="text-lg">⚡</span>{" "}
                    <strong>Energia Elétrica:</strong> cobrança à parte — pode ser incluída no plano, consulte condições.
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                {infraestrutura.map((item, i) => (
                  <div key={i} className="group flex items-center gap-4 bg-background rounded-lg border-l-4 border-l-foreground border border-border px-5 py-4 transition-colors hover:bg-foreground cursor-default">
                    <item.icon className="w-5 h-5 text-foreground shrink-0 group-hover:text-background transition-colors" />
                    <span className="text-sm text-foreground group-hover:text-background transition-colors">{item.text}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
export default IncludedSection;