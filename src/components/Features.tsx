import { Clock, Brain, Calendar, MessageSquare, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Intelligente 24/7",
    description: "Risposte automatiche personalizzate che sembrano scritte da te. I tuoi clienti non noteranno la differenza.",
  },
  {
    icon: Calendar,
    title: "Sync Google Calendar",
    description: "Ogni prenotazione viene sincronizzata automaticamente con il tuo calendario. Mai più doppie prenotazioni.",
  },
  {
    icon: MessageSquare,
    title: "Info sul Locale",
    description: "I clienti possono chiedere orari, servizi e prezzi. L'AI risponde istantaneamente con le tue informazioni.",
  },
  {
    icon: Clock,
    title: "Risposte Immediate",
    description: "Zero attese per i tuoi clienti. Risposte in meno di 3 secondi, anche alle 3 di notte.",
  },
  {
    icon: Shield,
    title: "Controllo Totale",
    description: "Rivedi le conversazioni, modifica le risposte e intervieni quando vuoi. Tu sei sempre al comando.",
  },
  {
    icon: Zap,
    title: "Setup Velocissimo",
    description: "Collega il tuo WhatsApp Business in 5 minuti. Nessuna competenza tecnica richiesta.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold mb-4">FUNZIONALITÀ</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Tutto ciò che serve per{" "}
            <span className="text-gradient">automatizzare</span> il tuo business
          </h2>
          <p className="text-lg text-muted-foreground">
            Un unico strumento per gestire messaggi, prenotazioni e informazioni. 
            Così puoi concentrarti su ciò che sai fare meglio.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
