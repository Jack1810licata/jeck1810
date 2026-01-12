import { Scissors, Sparkles, Dumbbell, Heart } from "lucide-react";

const audiences = [
  {
    icon: Scissors,
    title: "Barbieri",
    description: "Gestisci prenotazioni tagli, barba e trattamenti senza interrompere il lavoro.",
    image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=400&h=300&fit=crop",
  },
  {
    icon: Heart,
    title: "Parrucchieri",
    description: "Tagli, colori, trattamenti: i tuoi clienti prenotano mentre tu crei.",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=300&fit=crop",
  },
  {
    icon: Sparkles,
    title: "Estetiste",
    description: "Trattamenti viso, corpo, manicure: tutto organizzato automaticamente.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=300&fit=crop",
  },
  {
    icon: Dumbbell,
    title: "Palestre & PT",
    description: "Sessioni personal, corsi, prove gratuite: prenota senza sforzo.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop",
  },
];

const TargetAudience = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold mb-4">PER CHI È</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Perfetto per chi lavora{" "}
            <span className="text-gradient">su appuntamento</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Se il tuo lavoro richiede prenotazioni e comunicazione costante con i clienti, 
            BookAI è fatto per te.
          </p>
        </div>

        {/* Audience cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience) => (
            <div
              key={audience.title}
              className="group relative overflow-hidden rounded-2xl bg-card shadow-card hover:shadow-elevated transition-all duration-300"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={audience.image}
                  alt={audience.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
              </div>

              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                    <audience.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold">{audience.title}</h3>
                </div>
                <p className="text-primary-foreground/80 text-sm">{audience.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
