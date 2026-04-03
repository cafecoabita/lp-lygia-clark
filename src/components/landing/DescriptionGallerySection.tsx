import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

const images = [
  { src: "/lp-lygia-clark/images/sala-lygia-clark.01.png" },
  { src: "/lp-lygia-clark/images/sala-lygia-clark.02.png" },
  { src: "/lp-lygia-clark/images/sala-lygia-clark.03.png" },
  { src: "/lp-lygia-clark/images/sala-lygia-clark.04.png" },
  { src: "/lp-lygia-clark/images/sala-lygia-clark.05.png" },
  { src: "/lp-lygia-clark/images/sala-lygia-clark.06.png" },
  { src: "/lp-lygia-clark/images/sala-lygia-clark.07.png" },
  { src: "/lp-lygia-clark/images/sala-lygia-clark.08.png" },
];

const DescriptionGallerySection = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

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
              Apresentamos a <strong className="text-foreground">Sala Lygia Clark</strong>, no Café Coabita Coworking, 
              uma sala <strong className="text-foreground">individual e versátil de 60 m²</strong>, com vista livre para a 
              <strong className="text-foreground"> Arena MRV</strong>. Ambiente com fachada em vidro sem obstruções, 
              excelente <strong className="text-foreground">iluminação natural e pé direito duplo</strong>, permitindo 
              diferentes configurações de layout — seja para um escritório moderno, estúdio criativo, showroom ou loja técnica.
            </div>
          </AnimatedSection>
        </div>

        {/* --- MOSAICO IDENTICO AO PRINT --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[180px] md:auto-rows-[200px]">
          
          {/* 1. IMAGEM GRANDE (Topo Esquerda) */}
          <AnimatedSection delay={0.1} className="md:col-span-2 md:row-span-2">
            <div className="w-full h-full overflow-hidden rounded-2xl cursor-pointer" onClick={() => setSelectedImg(images[0].src)}>
              <img src={images[0].src} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Galeria" />
            </div>
          </AnimatedSection>

          {/* 2, 3, 4, 5. AS QUATRO PEQUENAS (Lado Direito da Grande) */}
          {images.slice(1, 5).map((img, i) => (
            <AnimatedSection key={i} delay={0.2 + i * 0.05} className="md:col-span-1">
              <div className="w-full h-full overflow-hidden rounded-2xl cursor-pointer" onClick={() => setSelectedImg(img.src)}>
                <img src={img.src} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Galeria" />
              </div>
            </AnimatedSection>
          ))}

          {/* 6, 7. DUAS PEQUENAS (Base Esquerda) */}
          {images.slice(5, 7).map((img, i) => (
            <AnimatedSection key={i + 5} delay={0.4 + i * 0.05} className="md:col-span-1">
              <div className="w-full h-full overflow-hidden rounded-2xl cursor-pointer" onClick={() => setSelectedImg(img.src)}>
                <img src={img.src} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Galeria" />
              </div>
            </AnimatedSection>
          ))}

          {/* 8. IMAGEM COMPRIDA (Base Direita) */}
          <AnimatedSection delay={0.5} className="md:col-span-2">
            <div className="w-full h-full overflow-hidden rounded-2xl cursor-pointer" onClick={() => setSelectedImg(images[7].src)}>
              <img src={images[7].src} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Galeria" />
            </div>
          </AnimatedSection>

        </div>
      </div>

      {/* --- LIGHTBOX --- */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 cursor-zoom-out backdrop-blur-sm"
          onClick={() => setSelectedImg(null)}
        >
          <img src={selectedImg} className="max-w-full max-h-full rounded-xl shadow-2xl animate-in zoom-in-95 duration-300" alt="Ampliada" />
        </div>
      )}
    </section>
  );
};

export default DescriptionGallerySection;