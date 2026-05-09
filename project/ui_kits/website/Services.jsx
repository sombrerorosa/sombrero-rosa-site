/* global React, lucide */
const { useEffect: useEffectS, useState: useStateS } = React;

const SERVICES = [
  { icon: "user-circle",   title: "Tu marca se conoce", desc: "Te ayudamos a hacer más conocida tu marca en tu público objetivo." },
  { icon: "trending-up",   title: "Tu negocio crece",   desc: "Creamos campañas para atraer nuevos clientes a tu empresa." },
  { icon: "heart",         title: "Te prefieren",       desc: "Te proponemos ideas para encantar a tus clientes y colaboradores." },
];

function Services() {
  useEffectS(() => { if (window.lucide) lucide.createIcons(); }, []);

  return (
    <section className="sr-services" id="servicios">
      <div className="sr-section-head sr-section-head--center">
        <div className="sr-section-num">01</div>
        <h2 className="sr-section-title sr-section-title--rose">Servicios</h2>
        <p className="sr-section-lead sr-section-lead--center">
          Somos una agencia de marketing full service. Te ofrecemos soluciones
          integrales para hacer crecer tu negocio en cada etapa.
        </p>
      </div>
      <div className="sr-services-grid">
        {SERVICES.map(s => (
          <article className="sr-service-card" key={s.title}>
            <div className="sr-service-top">
              <div className="sr-service-icon"><i data-lucide={s.icon} /></div>
              <button className="sr-service-plus" aria-label="Más"><i data-lucide="plus" /></button>
            </div>
            <h3 className="sr-service-title">{s.title}</h3>
            <p className="sr-service-desc">{s.desc}</p>
          </article>
        ))}
      </div>
      <div className="sr-services-cta">
        <div>¿Listo para hacer crecer tu negocio?</div>
        <a href="#contacto" className="btn btn-primary btn-pill">Empezar mi proyecto</a>
      </div>
    </section>
  );
}

window.SR = Object.assign(window.SR || {}, { Services });
