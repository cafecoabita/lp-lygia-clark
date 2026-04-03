import AnimatedSection from "./AnimatedSection";
import { MapPin, Train, Building, Clock, Navigation } from "lucide-react";

const LocationSection = () => (
  <AnimatedSection className="py-20 md:py-28 px-6 bg-background">
     <p className="tracking-[0.25em] uppercase text-sm text-muted-foreground mb-4 font-medium text-center">
        Localização estratégica 
      </p>
    <div className="max-w-5xl mx-auto">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-14 text-foreground">
       Saiba aonde nos encontrar
      </h2>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Info */}
        <div className="space-y-6">
          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 text-foreground shrink-0 mt-1" strokeWidth={1.5} />
            <p className="text-foreground">
              Av. José Faria da Rocha, 5614 — 2º Pavimento<br />
              Eldorado, Contagem — MG, 32310-210
            </p>
          </div>

          <div className="flex items-start gap-3">
            <Clock className="h-5 w-5 text-foreground shrink-0 mt-1" strokeWidth={1.5} />
            <div className="text-foreground">
              <p>Seg a Sex: 7h00 às 19h00</p>
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-3 text-muted-foreground">
              <Building className="h-4 w-4 shrink-0" strokeWidth={1.5} />
              <span className="text-sm">Próximo à Receita Federal</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <Train className="h-4 w-4 shrink-0" strokeWidth={1.5} />
              <span className="text-sm">Próximo à Estação Eldorado (metrô)</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <Navigation className="h-4 w-4 shrink-0" strokeWidth={1.5} />
              <span className="text-sm">Fácil acesso e estacionamento</span>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="rounded-lg overflow-hidden border border-border aspect-video">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.9985990826536!2d-44.033499!3d-19.9408418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa695135d27476b%3A0xa0c86b60f702663b!2sCaf%C3%A9%20Coabita!5e0!3m2!1spt-BR!2sbr!4v1710000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização Café Coabita Coworking"
          />
        </div>
      </div>
    </div>
  </AnimatedSection>
);

export default LocationSection;