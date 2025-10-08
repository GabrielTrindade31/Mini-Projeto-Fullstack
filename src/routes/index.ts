import { Router } from 'express';
import authRouter from './auth.routes';
import protectedRouter from './protected.routes';

const router = Router();

router.use(authRouter);
router.use(protectedRouter);

export default router;
