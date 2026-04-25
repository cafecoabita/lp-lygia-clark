import AnimatedSection from "./AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Car } from "lucide-react";

declare global {
  interface Window {
    gtagSendEvent?: (url: string, eventName?: string) => void;
  }
}

const WHATSAPP_ANUAL =
  "https://wa.me/553121158984/?text=Ol%C3%A1%2C+vi+o+seu+an%C3%BAncio+no+Google+e+gostaria+de+saber+mais+sobre+o+plano+de+1+ano+do+Espa%C3%A7o+Lygia+Clark";

const WHATSAPP_BIENAL =
  "https://wa.me/553121158984/?text=Ol%C3%A1%2C+vi+seu+an%C3%BAncio+no+Google+e+gostaria+de+saber+mais+sobre+o+plano+de+2+anos+do+Espa%C3%A7o+Lygia+Clark";

const StarBadge = ({ label }: { label: string }) => (
  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
    <div className="flex items-center gap-1 text-xs font-bold px-3 py-1 bg-background text-foreground border border-black rounded-full whitespace-nowrap">
      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" /> {label} <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
    </div>
  </div>
);

const PromoSection = () => (
  <AnimatedSection id="planos" className="py-20 md:py-28 px-6 bg-background">
    <div className="max-w-4xl mx-auto text-center">
      <p className="tracking-[0.25em] uppercase text-sm text-muted-foreground mb-10 font-medium">
        Melhor Custo-Benefício
      </p>
      <h2 className="text-2xl md:text-4xl font-bold mb-4 text-foreground">
        Escolha o plano ideal para o seu negócio
      </h2>

      <p className="text-muted-foreground mb-12 max-w-xl mx-auto">
        Condição especial para empresas que precisam de muito espaço
      </p>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">

        {/* 1 ANO */}
        <Card className="relative border border-black bg-background shadow-sm rounded-xl">
          <StarBadge label="1 ANO" />

          <CardContent className="pt-10 pb-10 px-8 text-center flex flex-col justify-between h-full">
            <div>
              <div className="rounded-lg border border-border bg-secondary px-6 py-6 mb-4">
                <p className="text-sm text-muted-foreground mb-1">1ª parcela</p>
                <p className="text-4xl font-bold text-foreground">R$ 2.500</p>
                <p className="text-sm text-muted-foreground mt-3">+ 11 x R$ 3.500/mês</p>
              </div>

              <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm mt-4">
                <Car className="h-4 w-4 shrink-0" />
                <span>Vaga de garagem: <strong className="text-foreground">R$ 200/mês</strong></span>
              </div>

              <p className="text-xs text-muted-foreground mt-4">
                *Condição válida para contratos fechados até o dia 30 de abril de 2.026.
              </p>
            </div>

            <a
              href={WHATSAPP_ANUAL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.preventDefault();
                if (typeof window.gtagSendEvent === "function") {
                  window.gtagSendEvent(WHATSAPP_ANUAL, "contato_plano_1_ano");
                } else {
                  window.open(WHATSAPP_ANUAL, "_blank");
                }
              }}
              className="mt-8 inline-block bg-black border border-black text-white font-semibold px-6 py-3 rounded-xl text-base tracking-wide hover:bg-white hover:text-black transition-colors"
            >
              Quero o plano por um ano
            </a>
          </CardContent>
        </Card>

        {/* 2 ANOS */}
        <Card className="relative border border-black bg-background shadow-sm rounded-xl">
          <StarBadge label="2 ANOS" />

          <CardContent className="pt-10 pb-10 px-8 text-center flex flex-col justify-between h-full">
            <div>
              <div className="rounded-lg border border-border bg-secondary px-6 py-6 mb-4">
                <p className="text-sm text-muted-foreground mb-1">1ª parcela</p>
                <p className="text-4xl font-bold text-foreground">R$ 2.000</p>
                <p className="text-sm text-muted-foreground mt-3">+ 23 x R$ 3.000/mês</p>
              </div>

              <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm mt-4">
                <Car className="h-4 w-4 shrink-0" />
                <span>Vaga de garagem: <strong className="text-foreground">R$ 200/mês</strong></span>
              </div>

              <p className="text-xs text-muted-foreground mt-4">
                *Condição válida para contratos fechados até o dia 30 de abril de 2.026.
              </p>
            </div>

            <a
              href={WHATSAPP_BIENAL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.preventDefault();
                if (typeof window.gtagSendEvent === "function") {
                  window.gtagSendEvent(WHATSAPP_BIENAL, "contato_plano_2_anos");
                } else {
                  window.open(WHATSAPP_BIENAL, "_blank");
                }
              }}
              className="mt-8 inline-block bg-black border border-black text-white font-semibold px-6 py-3 rounded-xl text-base tracking-wide hover:bg-white hover:text-black transition-colors"
            >
              Quero o plano por dois anos
            </a>
          </CardContent>
        </Card>

      </div>
    </div>
  </AnimatedSection>
);

export default PromoSection;
