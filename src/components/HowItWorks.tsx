import { MessageCircle, Settings, Rocket, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Collega WhatsApp",
    description: "Scansiona un QR code per collegare il tuo account WhatsApp Business. Tutto qui.",
  },
  {
    number: "02",
    icon: Settings,
    title: "Configura l'AI",
    description: "Inserisci i tuoi servizi, orari e prezzi. L'AI impara tutto in pochi minuti.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Vai Live",
    description: "Attiva l'automazione e guarda l'AI gestire i tuoi clienti mentre tu lavori.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="container">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold mb-4">COME FUNZIONA</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Attivo in{" "}
            <span className="text-gradient">3 semplici step</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Niente configurazioni complesse. Niente tecnici da chiamare. 
            Solo 5 minuti del tuo tempo.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2" />

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Arrow between steps */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-6 w-12 h-12 items-center justify-center z-10">
                    <ArrowRight className="w-6 h-6 text-primary" />
                  </div>
                )}

                <div className="bg-card rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300 text-center">
                  {/* Step number */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-6 shadow-soft">
                    <step.icon className="w-8 h-8 text-primary-foreground" />
                  </div>

                  <span className="block text-5xl font-extrabold text-primary/20 mb-4">
                    {step.number}
                  </span>

                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
