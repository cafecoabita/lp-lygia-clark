import { ArrowRight } from "lucide-react";

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <img
      src="/lp-lygia-clark/images/sala-lygia-clark.04.webp"
      alt="Espaço Lygia Clark - Interior com pé direito duplo e vista panorâmica para a Arena MRV"
      width={1920}
      height={1080}
      fetchPriority="high"
      decoding="sync"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-foreground/60" />

    <div className="relative z-10 container mx-auto px-4 text-center">
      <p className="text-primary-foreground/70 tracking-[0.3em] uppercase text-sm mb-5 font-medium">
        Café Coabita Coworking · Eldorado, Contagem/MG
      </p>
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
        Espaço Lygia Clark
      </h1>
      <p className="text-xl md:text-2xl text-primary-foreground/80 mb-6 font-light">
        60m² · Pé Direito Duplo · Vista Arena MRV
      </p>
      <a
        href="#planos"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("planos")?.scrollIntoView({ behavior: "smooth" });
        }}
        className="inline-flex items-center gap-2 bg-white text-gray-900 text-sm font-bold px-5 py-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
      >
        <ArrowRight className="h-4 w-4" />
        A partir de R$ 3.000/mês
      </a>
    </div>

    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-40">
      <div className="w-5 h-8 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-1.5">
        <div className="w-1 h-2 bg-primary-foreground/50 rounded-full animate-bounce" />
      </div>
    </div>
  </section>
);

export default Hero;
