/* global React */
function Manifesto() {
  const cards = [
    { icon: "target",      title: "Enfoque estratégico",    desc: "Desarrollamos estrategias personalizadas basadas en datos y análisis profundo de tu mercado." },
    { icon: "bar-chart-3", title: "Resultados medibles",    desc: "Monitoreamos cada campaña con métricas específicas para asegurar el retorno de tu inversión." },
    { icon: "users",       title: "Atención personalizada", desc: "Como agencia boutique, dedicamos tiempo y recursos específicos a cada uno de nuestros clientes." },
    { icon: "check-circle",title: "Experiencia comprobada", desc: "Más de 15 años ayudando a empresas a crecer a través de estrategias de marketing efectivas." },
    { icon: "shield",      title: "Compromiso garantizado", desc: "Nos comprometemos con los resultados y trabajamos hasta lograr tus objetivos." },
    { icon: "zap",         title: "Agilidad y flexibilidad",desc: "Respondemos rápidamente a las oportunidades del mercado y las necesidades de tu negocio." },
  ];
  React.useEffect(() => { if (window.lucide) lucide.createIcons(); });
  return (
    <section className="sr-manifesto" id="manifiesto">
      <div className="sr-section-head sr-section-head--center">
        <div className="sr-section-num">02</div>
        <h2 className="sr-section-title sr-section-title--rose">¿Por qué nosotros?</h2>
        <p className="sr-section-lead sr-section-lead--center">
          Somos una agencia marketing full service que combina creatividad, tecnología y
          estrategia para crear experiencias de marca memorables.
        </p>
      </div>
      <div className="sr-manifesto-grid">
        {cards.map(c => (
          <article className="sr-manifesto-card" key={c.title}>
            <div className="sr-manifesto-icon"><i data-lucide={c.icon} /></div>
            <h3>{c.title}</h3>
            <p>{c.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

window.SR = Object.assign(window.SR || {}, { Manifesto });
