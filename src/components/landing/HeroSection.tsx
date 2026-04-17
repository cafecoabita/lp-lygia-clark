import { useEffect, useRef } from "react";
import AnimatedSection from "./AnimatedSection";

const WHATSAPP_URL = "https://wa.me/553121158984/?text=Ol%C3%A1!+Gostaria+de+agendar+uma+visita+para+loja+Lygia+Clark.+A+loja+ainda+est%C3%A1+dispon%C3%ADvel%3F+%3A-D.";

const Hero = () => {
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!imgRef.current) return;
      const scrollY = window.scrollY;
      imgRef.current.style.transform = `translateY(${scrollY * 0.4}px)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div ref={imgRef} className="absolute inset-0 will-change-transform">
        <img
          src="/lp-lygia-clark/images/sala-lygia-clark.04.webp"
          alt="Loja Lygia Clark - Interior com pé direito duplo e vista panorâmica para a Arena MRV"
          width={1920}
          height={1080}
          fetchPriority="high"
          decoding="sync"
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <AnimatedSection>
          <p className="text-primary-foreground/70 tracking-[0.3em] uppercase text-sm mb-5 font-medium">
            Café Coabita Coworking
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-10 leading-tight">
            Loja Lygia Clark
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/80 mb-6 font-light">
            60m² · Pé Direito Duplo · Vista Arena MRV
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
                  if (typeof window.gtagSendEvent === 'function') {
                    window.gtagSendEvent(WHATSAPP_URL);
                  }
                }}
                className="inline-block bg-primary-foreground text-foreground font-semibold px-10 py-4 rounded-sm text-lg tracking-wide hover:bg-primary-foreground/90 transition-colors"
              >
                Agende uma Visita
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Hero;