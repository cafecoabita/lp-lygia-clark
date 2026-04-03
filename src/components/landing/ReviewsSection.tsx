import AnimatedSection from "./AnimatedSection";
import { useEffect } from "react";

const ReviewsSection = () => {
  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="https://elfsightcdn.com/platform.js"]'
    );

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <AnimatedSection className="py-20 md:py-28 px-6 bg-secondary">
      <p className="tracking-[0.25em] uppercase text-sm text-muted-foreground mb-4 font-medium text-center">
        Avaliações Reais
      </p>
      <div id="reviews" className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-foreground">
         O que nossos clientes dizem
        </h2>

        <p className="text-sm md:text-base text-muted-foreground mb-10 max-w-2xl mx-auto">

        </p>

        <div className="rounded-2xl border border-border bg-background p-4 md:p-6 shadow-sm">
          <div
            className="elfsight-app-a67205c0-7fa3-4332-930f-657a872becfe"
            data-elfsight-app-lazy
          ></div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ReviewsSection;