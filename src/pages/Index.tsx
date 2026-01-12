const Index = () => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
<!DOCTYPE html>
<html lang="it">
<head>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: system-ui, -apple-system, sans-serif;
      line-height: 1.6;
      color: #1a1a2e;
      background: #f8fafb;
    }

    .container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 0 20px;
    }

    /* Navbar */
    nav {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      background: rgba(255,255,255,0.95);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid #e5e7eb;
      z-index: 100;
      padding: 15px 0;
    }

    nav .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo {
      font-weight: 800;
      font-size: 1.5rem;
      color: #0d9488;
      text-decoration: none;
    }

    .nav-links {
      display: flex;
      gap: 30px;
      list-style: none;
    }

    .nav-links a {
      color: #64748b;
      text-decoration: none;
      font-weight: 500;
      transition: color 0.3s;
    }

    .nav-links a:hover {
      color: #0d9488;
    }

    .btn {
      display: inline-block;
      padding: 12px 24px;
      border-radius: 8px;
      font-weight: 600;
      text-decoration: none;
      cursor: pointer;
      border: none;
      transition: all 0.3s;
    }

    .btn-primary {
      background: linear-gradient(135deg, #0d9488, #14b8a6);
      color: white;
      box-shadow: 0 4px 15px rgba(13, 148, 136, 0.3);
    }

    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(13, 148, 136, 0.4);
    }

    .btn-outline {
      border: 2px solid #0d9488;
      color: #0d9488;
      background: transparent;
    }

    .btn-outline:hover {
      background: #0d9488;
      color: white;
    }

    /* Hero */
    .hero {
      padding: 140px 0 80px;
      text-align: center;
      background: linear-gradient(180deg, #e0f7f5 0%, #f8fafb 100%);
    }

    .hero h1 {
      font-size: 2.8rem;
      font-weight: 800;
      margin-bottom: 20px;
      line-height: 1.2;
    }

    .hero h1 span {
      color: #0d9488;
    }

    .hero p {
      font-size: 1.2rem;
      color: #64748b;
      max-width: 600px;
      margin: 0 auto 30px;
    }

    .hero-buttons {
      display: flex;
      gap: 15px;
      justify-content: center;
      flex-wrap: wrap;
    }

    .trust-badges {
      display: flex;
      gap: 25px;
      justify-content: center;
      margin-top: 40px;
      flex-wrap: wrap;
    }

    .trust-badges span {
      color: #64748b;
      font-size: 0.9rem;
    }

    .trust-badges span::before {
      content: "✓ ";
      color: #0d9488;
    }

    /* Features */
    .features {
      padding: 80px 0;
      background: white;
    }

    .section-title {
      text-align: center;
      margin-bottom: 50px;
    }

    .section-title span {
      color: #0d9488;
      font-weight: 600;
      font-size: 0.9rem;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .section-title h2 {
      font-size: 2.2rem;
      font-weight: 800;
      margin-top: 10px;
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 30px;
    }

    .feature-card {
      padding: 30px;
      border-radius: 16px;
      border: 1px solid #e5e7eb;
      transition: all 0.3s;
    }

    .feature-card:hover {
      border-color: #0d9488;
      box-shadow: 0 10px 40px rgba(0,0,0,0.08);
    }

    .feature-card .icon {
      width: 50px;
      height: 50px;
      background: #e0f7f5;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;
      font-size: 1.5rem;
    }

    .feature-card h3 {
      font-size: 1.2rem;
      margin-bottom: 10px;
    }

    .feature-card p {
      color: #64748b;
    }

    /* Pricing */
    .pricing {
      padding: 80px 0;
      background: #f8fafb;
    }

    .pricing-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 30px;
      max-width: 900px;
      margin: 0 auto;
    }

    .price-card {
      background: white;
      padding: 40px 30px;
      border-radius: 16px;
      text-align: center;
      border: 1px solid #e5e7eb;
      position: relative;
    }

    .price-card.popular {
      background: linear-gradient(135deg, #1a1a2e, #2d2d44);
      color: white;
      transform: scale(1.05);
      border: none;
    }

    .price-card.popular .badge {
      position: absolute;
      top: -12px;
      left: 50%;
      transform: translateX(-50%);
      background: #f97316;
      color: white;
      padding: 5px 15px;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: 600;
    }

    .price-card h3 {
      font-size: 1.3rem;
      margin-bottom: 5px;
    }

    .price-card .price {
      font-size: 2.5rem;
      font-weight: 800;
      margin: 20px 0;
    }

    .price-card .price small {
      font-size: 1rem;
      font-weight: 400;
      opacity: 0.7;
    }

    .price-card ul {
      list-style: none;
      text-align: left;
      margin: 25px 0;
    }

    .price-card ul li {
      padding: 8px 0;
      opacity: 0.9;
    }

    .price-card ul li::before {
      content: "✓ ";
      color: #0d9488;
    }

    .price-card.popular ul li::before {
      color: #f97316;
    }

    /* CTA */
    .cta {
      padding: 80px 0;
      background: linear-gradient(135deg, #1a1a2e, #2d2d44);
      text-align: center;
      color: white;
    }

    .cta h2 {
      font-size: 2.2rem;
      margin-bottom: 15px;
    }

    .cta p {
      opacity: 0.8;
      margin-bottom: 30px;
      font-size: 1.1rem;
    }

    .cta .btn-primary {
      background: #f97316;
      box-shadow: 0 4px 15px rgba(249, 115, 22, 0.4);
    }

    /* Footer */
    footer {
      padding: 40px 0;
      background: #1a1a2e;
      color: white;
      text-align: center;
    }

    footer p {
      opacity: 0.6;
      font-size: 0.9rem;
    }

    footer a {
      color: #0d9488;
      text-decoration: none;
    }

    /* Mobile */
    @media (max-width: 768px) {
      .nav-links {
        display: none;
      }

      .hero h1 {
        font-size: 2rem;
      }

      .price-card.popular {
        transform: scale(1);
      }
    }
  </style>
</head>
<body>

  <nav>
    <div class="container">
      <a href="#" class="logo">📱 BookAI</a>
      <ul class="nav-links">
        <li><a href="#features">Funzionalità</a></li>
        <li><a href="#pricing">Prezzi</a></li>
        <li><a href="#contact">Contatti</a></li>
      </ul>
      <a href="#pricing" class="btn btn-primary">Prova Gratis</a>
    </div>
  </nav>

  <section class="hero">
    <div class="container">
      <h1>Gestisci i tuoi clienti <span>24/7</span> su WhatsApp</h1>
      <p>Risposte automatiche AI, prenotazioni e sync con Google Calendar. Per barbieri, parrucchieri, estetiste e palestre.</p>
      <div class="hero-buttons">
        <a href="#pricing" class="btn btn-primary">Inizia Gratis</a>
        <a href="#features" class="btn btn-outline">Scopri Come</a>
      </div>
      <div class="trust-badges">
        <span>Setup in 5 minuti</span>
        <span>Nessuna carta richiesta</span>
        <span>Supporto italiano</span>
      </div>
    </div>
  </section>

  <section class="features" id="features">
    <div class="container">
      <div class="section-title">
        <span>Funzionalità</span>
        <h2>Tutto ciò che ti serve</h2>
      </div>
      <div class="features-grid">
        <div class="feature-card">
          <div class="icon">🤖</div>
          <h3>AI Intelligente 24/7</h3>
          <p>Risposte automatiche personalizzate che sembrano scritte da te, anche alle 3 di notte.</p>
        </div>
        <div class="feature-card">
          <div class="icon">📅</div>
          <h3>Sync Google Calendar</h3>
          <p>Ogni prenotazione viene sincronizzata automaticamente. Mai più doppie prenotazioni.</p>
        </div>
        <div class="feature-card">
          <div class="icon">💬</div>
          <h3>Info sul Locale</h3>
          <p>I clienti possono chiedere orari, servizi e prezzi. L'AI risponde istantaneamente.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="pricing" id="pricing">
    <div class="container">
      <div class="section-title">
        <span>Prezzi</span>
        <h2>Piani semplici e trasparenti</h2>
      </div>
      <div class="pricing-grid">
        <div class="price-card">
          <h3>Starter</h3>
          <div class="price">€29<small>/mese</small></div>
          <ul>
            <li>500 messaggi/mese</li>
            <li>1 numero WhatsApp</li>
            <li>Risposte AI</li>
            <li>Google Calendar</li>
          </ul>
          <a href="#" class="btn btn-outline">Inizia</a>
        </div>
        <div class="price-card popular">
          <div class="badge">⚡ Più Scelto</div>
          <h3>Professional</h3>
          <div class="price">€59<small>/mese</small></div>
          <ul>
            <li>2.000 messaggi/mese</li>
            <li>2 numeri WhatsApp</li>
            <li>AI avanzata</li>
            <li>Report e statistiche</li>
            <li>Supporto prioritario</li>
          </ul>
          <a href="#" class="btn btn-primary">Inizia</a>
        </div>
        <div class="price-card">
          <h3>Business</h3>
          <div class="price">€99<small>/mese</small></div>
          <ul>
            <li>Messaggi illimitati</li>
            <li>5 numeri WhatsApp</li>
            <li>Multi-sede</li>
            <li>Account manager</li>
          </ul>
          <a href="#" class="btn btn-outline">Contattaci</a>
        </div>
      </div>
    </div>
  </section>

  <section class="cta" id="contact">
    <div class="container">
      <h2>Pronto a trasformare il tuo business?</h2>
      <p>14 giorni di prova gratuita. Nessuna carta richiesta.</p>
      <a href="#" class="btn btn-primary">Inizia la Prova Gratuita →</a>
    </div>
  </section>

  <footer>
    <div class="container">
      <p>© 2026 BookAI. <a href="mailto:info@bookai.it">info@bookai.it</a> | Milano, Italia</p>
    </div>
  </footer>

</body>
</html>
        `,
      }}
    />
  );
};

export default Index;
