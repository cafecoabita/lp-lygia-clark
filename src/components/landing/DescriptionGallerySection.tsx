import { useState, useEffect, useCallback } from "react";
import AnimatedSection from "./AnimatedSection";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const images = [
  { src: "/lp-lygia-clark/images/sala-lygia-clark.01.webp", alt: "Loja Lygia Clark — vista frontal com fachada em vidro" },
  { src: "/lp-lygia-clark/images/sala-lygia-clark.02.webp", alt: "Loja Lygia Clark — pé direito duplo e iluminação natural" },
  { src: "/lp-lygia-clark/images/sala-lygia-clark.03.webp", alt: "Loja Lygia Clark — ambiente interno versátil para escritório ou showroom" },
  { src: "/lp-lygia-clark/images/sala-lygia-clark.04.webp", alt: "Loja Lygia Clark — vista panorâmica para a Arena MRV" },
  { src: "/lp-lygia-clark/images/sala-lygia-clark.05.webp", alt: "Loja Lygia Clark — espaço de 60m² configurado como escritório" },
  { src: "/lp-lygia-clark/images/sala-lygia-clark.06.webp", alt: "Loja Lygia Clark — detalhes da infraestrutura do coworking" },
  { src: "/lp-lygia-clark/images/sala-lygia-clark.07.webp", alt: "Loja Lygia Clark — corredor de acesso e área comum Café Coabita" },
  { src: "/lp-lygia-clark/images/sala-lygia-clark.08.webp", alt: "Loja Lygia Clark — fachada externa no Café Coabita Coworking, Eldorado Contagem" },
];

const DescriptionGallerySection = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const prev = useCallback(() => {
    setSelectedIndex(i => (i !== null ? (i - 1 + images.length) % images.length : null));
  }, []);

  const next = useCallback(() => {
    setSelectedIndex(i => (i !== null ? (i + 1) % images.length : null));
  }, []);

  useEffect(() => {
    if (selectedIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "Escape") setSelectedIndex(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedIndex, prev, next]);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">

        {/* --- CABEÇALHO --- */}
        <div className="text-center mb-16">
          <AnimatedSection>
            <p className="tracking-[0.25em] uppercase text-sm text-muted-foreground mb-10 font-medium">
              Solução Inteligente
            </p>
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-14 text-foreground">
              Espaço Corporativo Dentro de Coworking Estruturado
            </h2>
            <div className="text-lg text-muted-foreground leading-relaxed text-justify max-w-full">
              Apresentamos a <strong className="text-foreground">Loja Lygia Clark</strong>, no Café Coabita Coworking,
              uma sala <strong className="text-foreground">individual e versátil de 60 m²</strong>, com vista livre para a
              <strong className="text-foreground"> Arena MRV</strong>. Ambiente com fachada em vidro sem obstruções,
              excelente <strong className="text-foreground">iluminação natural e pé direito duplo</strong>, permitindo
              diferentes configurações de layout — seja para um escritório moderno, estúdio criativo, showroom ou loja técnica.
            </div>
          </AnimatedSection>
        </div>

        {/* --- MOSAICO --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[180px] md:auto-rows-[200px]">

          {/* 1. IMAGEM GRANDE (Topo Esquerda) */}
          <AnimatedSection delay={0.1} className="md:col-span-2 md:row-span-2">
            <div className="w-full h-full overflow-hidden rounded-2xl cursor-pointer" onClick={() => setSelectedIndex(0)}>
              <img src={images[0].src} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt={images[0].alt} loading="lazy" />
            </div>
          </AnimatedSection>

          {/* 2, 3, 4, 5. AS QUATRO PEQUENAS */}
          {images.slice(1, 5).map((img, i) => (
            <AnimatedSection key={i} delay={0.2 + i * 0.05} className="md:col-span-1">
              <div className="w-full h-full overflow-hidden rounded-2xl cursor-pointer" onClick={() => setSelectedIndex(i + 1)}>
                <img src={img.src} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt={img.alt} loading="lazy" />
              </div>
            </AnimatedSection>
          ))}

          {/* 6, 7. DUAS PEQUENAS */}
          {images.slice(5, 7).map((img, i) => (
            <AnimatedSection key={i + 5} delay={0.4 + i * 0.05} className="md:col-span-1">
              <div className="w-full h-full overflow-hidden rounded-2xl cursor-pointer" onClick={() => setSelectedIndex(i + 5)}>
                <img src={img.src} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt={img.alt} loading="lazy" />
              </div>
            </AnimatedSection>
          ))}

          {/* 8. IMAGEM COMPRIDA */}
          <AnimatedSection delay={0.5} className="md:col-span-2">
            <div className="w-full h-full overflow-hidden rounded-2xl cursor-pointer" onClick={() => setSelectedIndex(7)}>
              <img src={images[7].src} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt={images[7].alt} loading="lazy" />
            </div>
          </AnimatedSection>

        </div>
      </div>

      {/* --- LIGHTBOX --- */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Imagem */}
          <img
            src={images[selectedIndex].src}
            className="max-w-full max-h-full rounded-xl shadow-2xl animate-in zoom-in-95 duration-300"
            alt={images[selectedIndex].alt}
            onClick={e => e.stopPropagation()}
          />

          {/* Fechar */}
          <button
            className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/80 rounded-full p-2 transition-colors"
            onClick={() => setSelectedIndex(null)}
          >
            <X className="h-5 w-5" />
          </button>

          {/* Anterior */}
          <button
            className="absolute left-4 text-white bg-black/50 hover:bg-black/80 rounded-full p-3 transition-colors"
            onClick={e => { e.stopPropagation(); prev(); }}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Próxima */}
          <button
            className="absolute right-4 text-white bg-black/50 hover:bg-black/80 rounded-full p-3 transition-colors"
            onClick={e => { e.stopPropagation(); next(); }}
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Contador */}
          <div className="absolute bottom-4 text-white/60 text-sm">
            {selectedIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </section>
  );
};

export default DescriptionGallerySection;
