import { MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-dark relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-8 backdrop-blur-sm">
            <MessageCircle className="w-4 h-4" />
            Inizia in meno di 5 minuti
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-foreground mb-6">
            Pronto a trasformare{" "}
            <span className="text-accent">il tuo business?</span>
          </h2>

          <p className="text-lg text-primary-foreground/80 mb-10 max-w-xl mx-auto">
            Unisciti a centinaia di professionisti che hanno già automatizzato 
            la gestione clienti. 14 giorni di prova gratuita.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="xl">
              Inizia la Prova Gratuita
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Parla con Noi
            </Button>
          </div>

          <p className="mt-6 text-sm text-primary-foreground/60">
            ✓ Nessuna carta di credito richiesta &nbsp;•&nbsp; ✓ Cancella quando vuoi
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
