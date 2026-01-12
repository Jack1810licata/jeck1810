import { MessageCircle, Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-foreground text-primary-foreground">
      <div className="container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl">BookAI</span>
            </a>
            <p className="text-primary-foreground/70 mb-6">
              La soluzione AI per automatizzare WhatsApp e prenotazioni per professionisti.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-6">Prodotto</h4>
            <ul className="space-y-4">
              <li><a href="#features" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Funzionalità</a></li>
              <li><a href="#pricing" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Prezzi</a></li>
              <li><a href="#how-it-works" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Come Funziona</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Integrazioni</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-6">Azienda</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Chi Siamo</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Blog</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Lavora con Noi</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Partner</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-6">Contatti</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-primary-foreground/70">
                <Mail className="w-5 h-5 text-primary" />
                info@bookai.it
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/70">
                <Phone className="w-5 h-5 text-primary" />
                +39 02 1234567
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/70">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                Milano, Italia
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} BookAI. Tutti i diritti riservati.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">Termini di Servizio</a>
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">Cookie</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
