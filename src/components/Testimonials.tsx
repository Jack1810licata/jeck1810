import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Marco R.",
    role: "Barbiere, Milano",
    content: "Prima passavo ore a rispondere ai messaggi. Ora l'AI fa tutto e io posso concentrarmi sui tagli. Geniale!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Giulia M.",
    role: "Estetista, Roma",
    content: "I miei clienti adorano la velocità delle risposte. E io ho finalmente tempo libero la sera. Lo consiglio a tutti!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Alessandro T.",
    role: "Personal Trainer, Napoli",
    content: "Ho aumentato le prenotazioni del 40% perché rispondo ai potenziali clienti anche di notte. Incredibile.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold mb-4">TESTIMONIANZE</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Cosa dicono i{" "}
            <span className="text-gradient">nostri clienti</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Centinaia di professionisti hanno già trasformato il loro modo di lavorare.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all duration-300 relative"
            >
              {/* Quote icon */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-card-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
