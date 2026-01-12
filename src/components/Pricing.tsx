import { Check, MessageCircle, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    price: "29",
    description: "Perfetto per iniziare ad automatizzare",
    features: [
      "500 messaggi/mese",
      "1 numero WhatsApp",
      "Risposte automatiche AI",
      "Sync Google Calendar",
      "Supporto email",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "59",
    description: "Il più scelto dai professionisti",
    features: [
      "2.000 messaggi/mese",
      "2 numeri WhatsApp",
      "Risposte AI avanzate",
      "Sync Google Calendar",
      "Report e statistiche",
      "Supporto prioritario",
      "Personalizzazione risposte",
    ],
    popular: true,
  },
  {
    name: "Business",
    price: "99",
    description: "Per team e multi-sedi",
    features: [
      "Messaggi illimitati",
      "5 numeri WhatsApp",
      "Tutto di Professional",
      "Multi-sede",
      "API personalizzate",
      "Account manager dedicato",
      "Onboarding assistito",
    ],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold mb-4">PREZZI</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Piani{" "}
            <span className="text-gradient">trasparenti</span>{" "}
            per ogni esigenza
          </h2>
          <p className="text-lg text-muted-foreground">
            Inizia gratis per 14 giorni. Nessuna carta di credito richiesta.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 ${
                plan.popular
                  ? "bg-gradient-dark text-primary-foreground shadow-elevated scale-105"
                  : "bg-card border border-border"
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    <Zap className="w-4 h-4" />
                    Più Scelto
                  </span>
                </div>
              )}

              {/* Plan header */}
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className={`text-sm mb-4 ${plan.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-extrabold">€{plan.price}</span>
                  <span className={plan.popular ? "text-primary-foreground/70" : "text-muted-foreground"}>/mese</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 shrink-0 ${plan.popular ? "text-accent" : "text-primary"}`} />
                    <span className={plan.popular ? "text-primary-foreground/90" : "text-card-foreground"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant={plan.popular ? "accent" : "outline"}
                size="lg"
                className="w-full"
              >
                <MessageCircle className="w-4 h-4" />
                Inizia Ora
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
