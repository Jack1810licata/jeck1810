import { MessageCircle, Calendar, Clock, Users, Sparkles, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container relative z-10 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              Automatizza il tuo business con l'AI
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Gestisci i tuoi clienti{" "}
              <span className="text-gradient">24/7</span>{" "}
              su WhatsApp
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              Rispondi automaticamente ai messaggi, prenota appuntamenti e sincronizza tutto con Google Calendar. 
              Il tuo assistente virtuale che non dorme mai.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl">
                <MessageCircle className="w-5 h-5" />
                Inizia Gratis
              </Button>
              <Button variant="outline" size="xl">
                Guarda Demo
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="w-5 h-5 text-primary" />
                Nessuna carta richiesta
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="w-5 h-5 text-primary" />
                Setup in 5 minuti
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="w-5 h-5 text-primary" />
                Supporto italiano
              </div>
            </div>
          </div>

          {/* Right content - Phone mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative animate-float">
              {/* Phone frame */}
              <div className="w-72 md:w-80 bg-foreground rounded-[3rem] p-3 shadow-elevated">
                <div className="bg-background rounded-[2.5rem] overflow-hidden">
                  {/* Phone header */}
                  <div className="bg-primary px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                        <Users className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="text-primary-foreground font-semibold text-sm">Il Tuo Salone</p>
                        <p className="text-primary-foreground/70 text-xs">Assistente AI</p>
                      </div>
                    </div>
                  </div>

                  {/* Chat messages */}
                  <div className="p-4 space-y-3 bg-secondary/30 min-h-[300px]">
                    {/* Customer message */}
                    <div className="flex justify-end">
                      <div className="bg-primary text-primary-foreground px-4 py-2 rounded-2xl rounded-br-md max-w-[80%]">
                        <p className="text-sm">Ciao! Vorrei prenotare un taglio per sabato</p>
                      </div>
                    </div>

                    {/* AI response */}
                    <div className="flex justify-start">
                      <div className="bg-card px-4 py-2 rounded-2xl rounded-bl-md max-w-[80%] shadow-card">
                        <p className="text-sm text-card-foreground">
                          Ciao! 👋 Certo, ecco gli orari disponibili per sabato:
                        </p>
                        <div className="mt-2 space-y-1">
                          <div className="flex items-center gap-2 text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                            <Clock className="w-3 h-3" />
                            10:00
                          </div>
                          <div className="flex items-center gap-2 text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                            <Clock className="w-3 h-3" />
                            14:30
                          </div>
                          <div className="flex items-center gap-2 text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                            <Clock className="w-3 h-3" />
                            16:00
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Customer selection */}
                    <div className="flex justify-end">
                      <div className="bg-primary text-primary-foreground px-4 py-2 rounded-2xl rounded-br-md">
                        <p className="text-sm">Perfetto, 14:30!</p>
                      </div>
                    </div>

                    {/* Confirmation */}
                    <div className="flex justify-start">
                      <div className="bg-card px-4 py-2 rounded-2xl rounded-bl-md shadow-card">
                        <p className="text-sm text-card-foreground">
                          ✅ Prenotato! Ti ho inviato la conferma su Google Calendar.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -right-8 top-20 bg-card p-3 rounded-xl shadow-elevated animate-pulse-soft">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <div className="absolute -left-8 bottom-32 bg-accent p-3 rounded-xl shadow-elevated animate-pulse-soft" style={{ animationDelay: '0.5s' }}>
                <MessageCircle className="w-6 h-6 text-accent-foreground" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
