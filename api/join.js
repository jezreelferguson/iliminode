/**
 * Vercel serverless function. Webhook URL is only in Vercel env (never in the browser).
 */
export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const webhookUrl = process.env.JOIN_US_WEBHOOK_URL;
  if (!webhookUrl) {
    return res.status(500).json({ error: 'Join webhook not configured' });
  }

  const { name, email, phone, location, techInterests } = req.body || {};
  const content = `New Join Request:\nName: ${name || '—'}\nEmail: ${email || '—'}\nPhone: ${phone || '—'}\nLocation: ${location || '—'}\nTech Interests: ${techInterests || '—'}`;

  return fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ content }),
  })
    .then((r) => (r.status === 204 ? res.status(204).end() : res.status(r.status).json({ error: 'Webhook failed' })))
    .catch(() => res.status(500).json({ error: 'Failed to send to Discord' }));
}
