const HS_API = 'https://api.hubapi.com';

const CORS = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
};

async function upsertContact(token, props) {
  const res = await fetch(`${HS_API}/crm/v3/objects/contacts/batch/upsert`, {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      inputs: [{ idProperty: 'email', id: props.email, properties: props }],
    }),
  });
  if (!res.ok) throw new Error(`Contact upsert failed: ${await res.text()}`);
  return res.json();
}

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

  const source = pageName ? `[${pageName}] ` : '';
  const contactProps = {
    firstname,
    email,
    ...(phone   && { phone }),
    ...(company && { company }),
    ...(website && { website }),
    ...(message && { message: source + message }),
  };

  await upsertContact(token, contactProps);

  return new Response(JSON.stringify({ ok: true }), { status: 200, headers: CORS });
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
