/* global React */
const { useState } = React;

function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Inicio", "#top"],
    ["Servicios", "#servicios"],
    ["Nosotros", "#manifiesto"],
    ["Artículos", "#articulos"],
    ["Contacto", "#contacto"],
  ];
  return (
    <header className="sr-header">
      <a className="sr-brand" href="#top" aria-label="Sombrero Rosa, inicio">
        <img src="../../assets/logo-sombrero-rosa.png" alt="" className="sr-brand-mark" />
        <span className="sr-brand-word">
          <span className="top">sombrero</span>
          <span className="bot">rosa</span>
        </span>
      </a>
      <nav className="sr-nav" aria-label="Principal">
        {links.map(([label, href]) => (
          <a key={href} href={href} className="sr-nav-link">{label}</a>
        ))}
      </nav>
      <a href="#contacto" className="btn btn-primary btn-pill">Empezar proyecto</a>
    </header>
  );
}

window.SR = Object.assign(window.SR || {}, { Header });
