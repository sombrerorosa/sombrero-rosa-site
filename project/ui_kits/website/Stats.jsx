/* global React */
const STATS = [
  { num: "12", suf: " años", label: "haciendo crecer marcas" },
  { num: "40", suf: "+", label: "clientes en LATAM" },
  { num: "182", suf: "%", label: "promedio de crecimiento" },
  { num: "100", suf: "%", label: "resultados medibles" },
];

function Stats() {
  return (
    <section className="sr-stats">
      <div className="sr-stats-grid">
        {STATS.map(s => (
          <div className="sr-stat" key={s.label}>
            <div className="sr-stat-num">{s.num}<span className="sr-stat-suf">{s.suf}</span></div>
            <div className="sr-stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Logos() {
  const names = ["Lacteria", "Quinta Roja", "Solana", "Norte 6", "Casa Mira", "Verbena"];
  return (
    <section className="sr-logos">
      <div className="eyebrow" style={{ textAlign: "center", marginBottom: 28 }}>Confían en nosotros</div>
      <div className="sr-logos-row">
        {names.map(n => (
          <div className="sr-logo-chip" key={n}>{n}</div>
        ))}
      </div>
    </section>
  );
}

window.SR = Object.assign(window.SR || {}, { Stats, Logos });
