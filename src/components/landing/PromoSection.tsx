import AnimatedSection from "./AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Car } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/553121158984/?text=Olá!+Quero+aproveitar+essa+condição+especial+da+Sala+Lygia+Clark.";

const PromoSection = () => (
  <AnimatedSection className="py-20 md:py-28 px-6 bg-background">
    <div className="max-w-4xl mx-auto text-center">
       <p className="tracking-[0.25em] uppercase text-sm text-muted-foreground mb-10 font-medium">
        Melhor Custo-Benefício
        </p>
      <h2 className="text-2xl md:text-4xl font-bold mb-4 text-foreground">
        Assinatura anual com 20% de desconto
      </h2>

      <p className="text-muted-foreground mb-12 max-w-xl mx-auto">
        Condição especial para empresas que precisam de muito espaço
      </p>

      {/* CARD */}
      <Card className="relative border border-border bg-background w-full max-w-lg mx-auto shadow-sm rounded-xl">

        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <Badge variant="secondary" className="flex items-center gap-1 text-xs font-bold px-3">
            <Star className="h-3 w-3" /> PLANO ANUAL <Star className="h-3 w-3" />
          </Badge>
        </div>

        <CardContent className="pt-10 pb-10 px-10 text-center min-h-[360px] flex flex-col justify-center">

          <div className="rounded-lg border border-border bg-secondary px-8 py-8 mb-6">
            <p className="text-5xl font-bold text-foreground">R$ 3.500/mês</p>
          </div>

          <p className="text-xs text-muted-foreground mt-6">
            *Condição válida para contratos fechados até o dia 17 de abril de 2.026.
          </p>

          <div className="mt-4 flex items-center justify-center gap-2 text-muted-foreground text-sm">

            <Car className="h-4 w-4 shrink-0" />

            <span>
              Vaga de garagem: <strong className="text-foreground">R$ 200/mês</strong>
            </span>

          </div>

        </CardContent>
      </Card>

      {/* CTA */}
      <div className="mt-12">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            if (typeof window.gtagSendEvent === 'function') {
              window.gtagSendEvent(WHATSAPP_URL);
            }
          }}
          className="inline-block bg-secondary border border-border text-foreground font-semibold px-10 py-4 rounded-xl text-lg tracking-wide hover:bg-foreground hover:text-primary-foreground transition-colors"
        >
          Quero aproveitar essa condição
        </a>
      </div>

    </div>
  </AnimatedSection>
);

export default PromoSection;
