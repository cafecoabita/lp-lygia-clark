import AnimatedSection from "./AnimatedSection";

const WHATSAPP_URL = "https://wa.me/553121158984/?text=Ol%C3%A1!+Gostaria+de+agendar+uma+visita+para+loja+Lygia+Clark.+A+loja+ainda+est%C3%A1+dispon%C3%ADvel%3F+%3A-D.";

const FooterCTA = () => {
  return (
    <section className="pt-16 pb-8 bg-surface-dark text-surface-dark-foreground">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para Conhecer?
          </h2>
          <p className="text-lg text-surface-dark-foreground/60 mb-10">
            Agende uma visita e descubra como a Loja Lygia Clark pode transformar o seu negócio.
          </p>
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
            Falar no WhatsApp
          </a>
        </AnimatedSection>

        <div className="mt-8 pt-6 border-t border-surface-dark-foreground/10 text-sm text-surface-dark-foreground/40">
          <p>© {new Date().getFullYear()} Café Coabita Coworking. Todos os direitos reservados.</p>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;
