# Sombrero Rosa — Guía de setup para proyectos futuros

Stack: Astro (sitio) + Sanity (CMS) + Cloudflare Pages (hosting) + HubSpot (formulario)

---

## 1. Repositorio GitHub

- Crear repo en la organización de GitHub del cliente
- Estructura:
  ```
  /
  ├── index.html          ← prototipo standalone (referencia de diseño)
  ├── site/               ← proyecto Astro (producción)
  │   ├── src/
  │   │   ├── components/
  │   │   ├── layouts/
  │   │   ├── pages/
  │   │   ├── styles/
  │   │   └── lib/sanity.ts
  │   ├── sanity/
  │   │   ├── sanity.config.ts
  │   │   └── schemas/
  │   ├── sanity.config.ts   ← config en raíz para CLI
  │   ├── sanity.cli.ts
  │   ├── package.json
  │   └── .env               ← NO se sube a git
  └── .env.example
  ```

---

## 2. Sanity CMS

### Crear proyecto
1. Ir a sanity.io → crear cuenta → nuevo proyecto
2. Anotar el **Project ID** (ej: `42w8s11j`)
3. Dataset por defecto: `production`

### Schemas necesarios
- `siteSettings` — título, email, teléfono, WhatsApp, Instagram, TikTok, dirección
- `homePage` — hero, servicios, manifiesto, herramientas
- `post` — título, slug, fecha, autor, imagen, cuerpo (block content)

### Configuración del cliente (`src/lib/sanity.ts`)
```typescript
import { createClient } from '@sanity/client';
export const client = createClient({
  projectId: import.meta.env.SANITY_PROJECT_ID,
  dataset: import.meta.env.SANITY_DATASET ?? 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
});
```

### sanity.cli.ts (requerido para deploy)
```typescript
import { defineCliConfig } from 'sanity/cli';
export default defineCliConfig({
  api: { projectId: 'PROJECT_ID', dataset: 'production' },
});
```

### sanity.config.ts (en raíz de site/)
- Usar el Project ID hardcodeado (no `import.meta.env`) para que funcione con el CLI
- Incluir el plugin `structureTool` con navegación personalizada

### Variables de entorno (.env)
```
SANITY_PROJECT_ID=xxxxxxxxx
SANITY_DATASET=production
```

---

## 3. Astro

### Dependencias (package.json)
```json
"dependencies": {
  "@sanity/client": "^7.x",
  "@sanity/image-url": "^2.x",
  "@sanity/structure": "^2.x",
  "astro": "^6.x",
  "sanity": "^5.x",
  "styled-components": "^6.x"
}
```

> ⚠️ `styled-components` es requerido por Sanity aunque no se use directamente.

### astro.config.mjs
```javascript
import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://dominio-del-cliente.com',
  output: 'static',
});
```

### CSS global
- Importar en el layout con `import '../styles/global.css'` en el frontmatter
- ❌ NO usar `<link href="/src/styles/global.css">` — esa ruta no existe en el build

### Fallbacks de contenido
- Usar `||` (no `??`) para campos de texto para que strings vacíos también usen el default
- Usar `array?.length ? array : defaultArray` para arrays
```javascript
const headline = page?.hero?.headline || 'Titular por defecto'
const items = page?.services?.items?.length ? page.services.items : defaultItems
```

---

## 4. Cloudflare Pages — Sitio Astro

### Configuración del proyecto
| Campo | Valor |
|---|---|
| Repo | sombrerorosa/sombrero-rosa-site |
| Branch | main |
| Build command | `cd site && npm install && npm run build` |
| Output directory | `site/dist` |

### Variables de entorno (Settings → Variables and Secrets)
| Variable | Valor |
|---|---|
| `SANITY_PROJECT_ID` | `xxxxxxxxx` |
| `SANITY_DATASET` | `production` |

### Deploy hook para webhook de Sanity
Settings → Builds & deployments → Deploy hooks → Agregar hook llamado `sanity-publish` en branch `main` → copiar la URL generada.

---

## 5. Cloudflare Pages — Sanity Studio

Crear un **segundo proyecto** de Cloudflare Pages para el Studio:

| Campo | Valor |
|---|---|
| Repo | mismo repo del cliente |
| Branch | main |
| Build command | `cd site && npm ci && npx sanity build studio-dist` |
| Output directory | `site/studio-dist` |

> El Studio queda en una URL separada tipo `nombre-studio.pages.dev`.
> Los visitantes nunca acceden al Studio — es solo para el cliente.

### Post-deploy
1. Ir a la URL del Studio → clic en **"Register this studio"**
2. En Sanity → API → CORS Origins → agregar la URL del Studio con "Allow credentials" ✓

---

## 6. Webhook Sanity → Cloudflare (auto-rebuild)

Como el sitio Astro es **estático**, los cambios de contenido en Sanity no aparecen solos — necesitan un rebuild.

Configurar en **sanity.io/manage** → proyecto → API → Webhooks:

| Campo | Valor |
|---|---|
| Name | Cloudflare rebuild |
| URL | URL del deploy hook de Cloudflare |
| Dataset | production |
| Trigger on | Publish |

Con esto, cada vez que se hace Publish en Sanity, Cloudflare rebuilda el sitio automáticamente.

---

## 7. HubSpot — Formulario de contacto

### Datos necesarios
- **Portal ID**: se encuentra en Settings → Account Management → Account Details
- **Form ID**: crear un formulario en Marketing → Forms y tomar el UUID de la URL

### Endpoint de envío
```
POST https://api.hsforms.com/submissions/v3/integration/submit/{portalId}/{formId}
```

### Campos estándar HubSpot
| Campo en el form HTML | Nombre HubSpot |
|---|---|
| name | firstname |
| apellidos | lastname |
| company | company |
| email | email |
| phone | phone |
| msg | message |

### Dominio permitido
En HubSpot → Marketing → Forms → aparece un aviso de "dominio desconocido" la primera vez. Hacer clic en **Revisar dominios de sitios** y agregar el dominio del sitio para que los envíos no sean marcados como spam.

---

## 8. Migración de dominio a Cloudflare Pages

Para migrar sin bajar el sitio actual:

1. En Cloudflare Pages → sitio → **Custom domains** → agregar el dominio
2. Cloudflare va a mostrar los registros DNS a configurar
3. En el panel DNS del dominio (puede ser el mismo Cloudflare si ya está proxeado), cambiar el registro A/CNAME para que apunte a Pages en lugar del hosting anterior
4. El cambio tarda entre 1 y 24 hs en propagarse — durante ese tiempo pueden coexistir ambos

---

## 9. Errores comunes y soluciones

| Error | Causa | Solución |
|---|---|---|
| Build falla con "styled-components not installed" | No está en package.json | Agregar `"styled-components": "^6.x"` a dependencies |
| CSS no aparece en producción | `<link href="/src/styles/...">` no funciona en build | Importar con `import '../styles/global.css'` en el frontmatter del layout |
| Sanity no pisa los defaults | `??` no captura strings vacíos | Usar `\|\|` para campos de texto individuales |
| Build falla con "Cannot read .map of undefined" | Array de Sanity vacío | Usar `array?.length ? array : []` antes del `.map()` |
| "Host not in allowlist" en Sanity API | Bloqueo de IPs de servidores cloud | Usar GitHub Actions o Cloudflare Workers como proxy |
| Formulario llega como spam a HubSpot | Dominio no registrado | Agregar dominio en HubSpot → Marketing → Forms → Revisar dominios |
| Retry deployment sigue fallando | Retoma el commit viejo | Crear un commit nuevo para forzar build fresco |
