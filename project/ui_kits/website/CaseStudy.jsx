/* global React */
function CaseStudy() {
  return (
    <section className="sr-case" id="casos">
      <div className="sr-section-head">
        <div className="eyebrow">Caso destacado</div>
        <h2 className="sr-section-title">
          Cómo <em>Lacteria</em> creció 182% en 6 meses.
        </h2>
      </div>
      <div className="sr-case-grid">
        <div className="sr-case-cover">
          <div className="sr-case-cover-inner">
            <div className="sr-case-tag">Lácteos · D2C</div>
            <div className="sr-case-headline">
              "Hablan como nosotros, pero<br />nos hacen ver mejor."
            </div>
            <div className="sr-case-author">— Sofía R., Marketing Lead</div>
          </div>
        </div>
        <div className="sr-case-body">
          <p>
            Rediseñamos su narrativa, lanzamos una identidad visual nueva y
            armamos un funnel de adquisición desde cero. En seis meses pasaron
            de 1 200 a 3 380 clientes activos.
          </p>
          <ul className="sr-case-stats">
            <li><strong>+182%</strong><span>conversión</span></li>
            <li><strong>3.4×</strong><span>retención mes 3</span></li>
            <li><strong>−38%</strong><span>CAC</span></li>
          </ul>
          <a href="#" className="btn btn-secondary">Leer el caso <span className="arrow">→</span></a>
        </div>
      </div>
    </section>
  );
}

window.SR = Object.assign(window.SR || {}, { CaseStudy });
