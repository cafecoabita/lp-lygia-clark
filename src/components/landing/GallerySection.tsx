import AnimatedSection from "./AnimatedSection";

const images = [
  { src: "/lp-lygia-clark/images/sala-lygia-clark.01.png", alt: "Loja Lygia Clark - Vista frontal" },
  { src: "/lp-lygia-clark/images/sala-lygia-clark.02.png", alt: "Loja Lygia Clark - Interior" },
  { src: "/lp-lygia-clark/images/sala-lygia-clark.03.png", alt: "Loja Lygia Clark - Detalhes do espaço" },
];

const Gallery = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <p className="tracking-[0.25em] uppercase text-sm text-muted-foreground mb-4 font-medium text-center">
            Galeria
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Conheça o Espaço
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <div className="overflow-hidden rounded-sm">
                <img
                  src={img.src}
                  alt={img.alt}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
