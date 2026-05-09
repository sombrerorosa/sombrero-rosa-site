/* global React */
function Hero() {
  return (
    <section className="sr-hero" id="top">
      <div className="sr-hero-bg" aria-hidden="true">
        <span className="sr-hero-orb a"></span>
        <span className="sr-hero-orb b"></span>
        <span className="sr-hero-orb c"></span>
      </div>
      <div className="sr-hero-inner">
        <div className="sr-hero-pill">Agencia boutique de marketing full service</div>
        <h1 className="sr-hero-headline">Creer, Crear &amp; Crecer</h1>
        <p className="sr-hero-lead">
          Hacemos crecer tu marca, negocio y relación con clientes a través de
          estrategias de marketing full service que generan resultados reales y medibles.
        </p>
        <blockquote className="sr-hero-quote">
          "El mundo te preguntará quién eres. Y si no lo sabes, el mundo te lo dirá."
          <span>— Carl Jung</span>
        </blockquote>
        <div className="sr-hero-ctas">
          <a href="#servicios" className="btn btn-primary btn-pill">Conocer servicios</a>
          <a href="#contacto" className="btn btn-ghost-on-dark btn-pill">Empezar proyecto</a>
        </div>
      </div>
    </section>
  );
}

window.SR = Object.assign(window.SR || {}, { Hero });
