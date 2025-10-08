import { Router } from 'express';
import { protectedController } from '../controllers/protected.controller';
import { authenticateToken } from '../middlewares/auth.middleware';

const protectedRouter = Router();

protectedRouter.get('/protected', authenticateToken, (req, res) =>
  protectedController.getProtectedMessage(req, res)
);

export default protectedRouter;
