import { Briefcase, Palette, GraduationCap, Video, UserCheck, Store, ShoppingBag } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const useCases = [
  { icon: Briefcase, label: "Grandes Escritórios" },
  { icon: Palette, label: "Estúdios de Estética" },
  { icon: GraduationCap, label: "Cursos e Treinamentos" },
  { icon: Video, label: "Produção de Conteúdo" },
  { icon: UserCheck, label: "Atendimento Profissional" },
  { icon: Store, label: "Showroom Técnico" },
  { icon: ShoppingBag, label: "Espaço Técnico Corporativo" },
];

const Ideal = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <AnimatedSection>
          <p className="tracking-[0.25em] uppercase text-sm text-muted-foreground mb-4 font-medium text-center">
            Versatilidade
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Ideal Para
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {useCases.map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div className="flex flex-col items-center gap-3 p-6 rounded-sm bg-secondary hover:bg-accent transition-colors text-center">
                <item.icon className="w-8 h-8 text-foreground/70" />
                <span className="text-sm font-semibold text-foreground">{item.label}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ideal;
