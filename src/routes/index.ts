import { Router } from 'express';
import authRouter from './auth.routes';
import protectedRouter from './protected.routes';
import health from './health.routes';

const router = Router();

// GET /health -> {"status":"ok",...}
router.use('/health', health);

// /register, /login
router.use(authRouter);

// /protected
router.use(protectedRouter);

export default router;
