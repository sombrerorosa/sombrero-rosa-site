/* global React */
const TOOLS = [
  { name: "TiendaNube",   tag: "E-commerce" },
  { name: "WordPress",    tag: "CMS" },
  { name: "WooCommerce",  tag: "E-commerce" },
  { name: "Meta Ads",     tag: "Paid social" },
  { name: "Google Ads",   tag: "Paid search" },
  { name: "HubSpot",      tag: "CRM" },
  { name: "Mailchimp",    tag: "Email" },
  { name: "Klaviyo",      tag: "Email" },
];

function Tools() {
  return (
    <section className="sr-tools" aria-labelledby="sr-tools-h">
      <h2 className="sr-tools-h" id="sr-tools-h">Herramientas que utilizamos</h2>
      <div className="sr-tools-marquee" aria-hidden="false">
        <ul className="sr-tools-track">
          {[...TOOLS, ...TOOLS].map((t, i) => (
            <li key={i} className="sr-tool-chip">
              <span className="sr-tool-dot" aria-hidden="true" />
              <span className="sr-tool-name">{t.name}</span>
              <span className="sr-tool-tag">{t.tag}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

window.SR = Object.assign(window.SR || {}, { Tools });
