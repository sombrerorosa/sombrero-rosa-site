const HS_API = 'https://api.hubapi.com';

async function upsertContact(token, props) {
  const res = await fetch(`${HS_API}/crm/v3/objects/contacts/batch/upsert`, {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      inputs: [{ idProperty: 'email', id: props.email, properties: props }],
    }),
  });
  if (!res.ok) throw new Error(`Contact upsert failed: ${await res.text()}`);
  const data = await res.json();
  return data.results?.[0]?.id;
}

async function createNote(token, contactId, html) {
  const payload = {
    properties: {
      hs_note_body: html,
      hs_timestamp: Date.now().toString(),
    },
    associations: contactId
      ? [{ to: { id: contactId }, types: [{ associationCategory: 'HUBSPOT_DEFINED', associationTypeId: 202 }] }]
      : [],
  };
  const res = await fetch(`${HS_API}/crm/v3/objects/notes`, {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  return res.ok;
}

const CORS = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
};

export async function onRequestPost({ request, env }) {
  const token = env.HUBSPOT_TOKEN;
  if (!token) {
    return new Response(JSON.stringify({ error: 'Missing HUBSPOT_TOKEN' }), { status: 500, headers: CORS });
  }

  let body;
  try { body = await request.json(); }
  catch { return new Response(JSON.stringify({ error: 'Invalid JSON' }), { status: 400, headers: CORS }); }

  const { firstname, email, phone, company, website, message, pageUri, pageName } = body;
  if (!firstname || !email) {
    return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400, headers: CORS });
  }

  try {
    const contactProps = {
      firstname,
      email,
      ...(phone   && { phone }),
      ...(company && { company }),
      ...(website && { website }),
    };

    const contactId = await upsertContact(token, contactProps);

    const safeMsg = (message || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const noteHtml = [
      `<p><strong>Recurso:</strong> ${pageName || ''}</p>`,
      `<p><strong>URL:</strong> ${pageUri || ''}</p>`,
      `<hr>`,
      `<pre style="white-space:pre-wrap;font-size:13px">${safeMsg}</pre>`,
    ].join('\n');

    await createNote(token, contactId, noteHtml);

    return new Response(JSON.stringify({ ok: true }), { status: 200, headers: CORS });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500, headers: CORS });
  }
}

export function onRequestOptions() {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
