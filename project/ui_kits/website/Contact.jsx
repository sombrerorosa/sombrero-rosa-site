/* global React */
const { useState: useStateContact } = React;

function Contact() {
  const [sent, setSent] = useStateContact(false);
  const [form, setForm] = useStateContact({ name: "", apellidos: "", company: "", email: "", phone: "", msg: "" });
  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));
  const submit = (e) => { e.preventDefault(); setSent(true); };

  React.useEffect(() => { if (window.lucide) lucide.createIcons(); });

  return (
    <section className="sr-contact" id="contacto">
      <div className="sr-section-head sr-section-head--center">
        <div className="sr-section-num">03</div>
        <h2 className="sr-section-title sr-section-title--rose">Conversemos</h2>
        <p className="sr-section-lead sr-section-lead--center">
          Contanos sobre tu proyecto y descubrí cómo podemos ayudarte a hacer crecer tu negocio.
        </p>
      </div>
      <div className="sr-contact-grid">
        <form className="sr-contact-form" onSubmit={submit}>
          {sent ? (
            <div className="sr-contact-ok">
              <div className="sr-contact-ok-mark">✓</div>
              <h3>¡Listo, te leímos!</h3>
              <p>Te escribimos a <strong>{form.email || "tu email"}</strong> en menos de 24 horas.</p>
            </div>
          ) : (
            <>
              <h3>Nos encantaría escucharte. Llena el formulario y nos pondremos en contacto contigo lo antes posible.</h3>
              <div className="sr-form-row">
                <label><span>Nombre</span><input value={form.name} onChange={set("name")} placeholder="Sebastián" required /></label>
                <label><span>Apellidos</span><input value={form.apellidos} onChange={set("apellidos")} placeholder="Lutz" /></label>
              </div>
              <label><span>Nombre de la empresa</span><input value={form.company} onChange={set("company")} placeholder="Sr" /></label>
              <label><span>Correo*</span><input type="email" value={form.email} onChange={set("email")} placeholder="hola@empresa.com" required /></label>
              <label><span>Número de WhatsApp*</span><input value={form.phone} onChange={set("phone")} placeholder="+54 11 1234 5678" /></label>
              <label><span>Consulta</span><textarea value={form.msg} onChange={set("msg")} rows="3" placeholder="Contanos sobre tu proyecto…" /></label>
              <button type="submit" className="btn btn-primary btn-pill">Enviar</button>
            </>
          )}
        </form>

        <div className="sr-contact-side">
          <div className="sr-contact-card">
            <div className="icon"><i data-lucide="mail" /></div>
            <div className="lbl">Email</div>
            <div className="val"><a href="mailto:hola@sombrerorosa.com">hola@sombrerorosa.com</a></div>
          </div>
          <div className="sr-contact-card">
            <div className="icon"><i data-lucide="phone" /></div>
            <div className="lbl">Teléfono</div>
            <div className="val"><a href="tel:+541172465685">+54 11 7246 5685</a></div>
          </div>
          <div className="sr-contact-card full">
            <div className="icon"><i data-lucide="map-pin" /></div>
            <div className="lbl">Ubicación</div>
            <div className="val">Buenos Aires, Argentina</div>
          </div>
          <div className="sr-contact-card whatsapp">
            <div className="icon"><i data-lucide="message-circle" /></div>
            <div className="lbl">¿Tienes una consulta urgente?</div>
            <div className="val">Escríbenos por WhatsApp y te responderemos lo antes posible.</div>
            <a href="#" className="btn btn-pill">Chatear por WhatsApp</a>
          </div>
        </div>
      </div>
    </section>
  );
}

window.SR = Object.assign(window.SR || {}, { Contact });
