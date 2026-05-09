/* global React */
function Footer() {
  const cols = [
    { head: "Servicios", links: ["Estrategia de marca", "Redes sociales", "Performance marketing", "Publicidad digital"] },
    { head: "Empresa",   links: ["Sobre nosotros", "Contacto"] },
    { head: "Contacto",  links: ["hola@sombrerorosa.com", "+54 11 7246 5685", "Buenos Aires, Argentina"] },
  ];
  return (
    <footer className="sr-footer">
      <div className="sr-footer-top">
        <div className="sr-footer-brand">
          <a className="sr-brand sr-brand--footer" href="#top">
            <img src="../../assets/logo-sombrero-rosa.png" alt="" className="sr-brand-mark" />
            <span className="sr-brand-word">
              <span className="top">sombrero</span>
              <span className="bot">rosa</span>
            </span>
          </a>
          <p>Agencia de marketing full service especializada en hacer crecer tu marca, negocio y relación con clientes.</p>
          <div className="sr-footer-social">
            <a href="#" aria-label="Instagram"><i data-lucide="instagram" /></a>
            <a href="#" aria-label="TikTok"><i data-lucide="music-2" /></a>
          </div>
        </div>
        <div className="sr-footer-cols">
          {cols.map(c => (
            <div key={c.head}>
              <div className="sr-footer-head">{c.head}</div>
              <ul>{c.links.map(l => <li key={l}><a href="#">{l}</a></li>)}</ul>
            </div>
          ))}
        </div>
      </div>
      <div className="sr-footer-bottom">© 2026 Sombrero Rosa. Todos los derechos reservados.</div>
    </footer>
  );
}

window.SR = Object.assign(window.SR || {}, { Footer });
