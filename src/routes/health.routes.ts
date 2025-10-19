import { Router } from 'express';
const health = Router();

health.get('/healthz', (_req, res) => {
  res.json({ ok: true });
});

export default health;
