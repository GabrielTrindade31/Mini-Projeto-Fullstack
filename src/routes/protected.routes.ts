import { Router, Response } from 'express';
import { protectedController } from '../controllers/protected.controller';
import { authenticateToken, AuthenticatedRequest } from '../middlewares/auth.middleware';

const protectedRouter = Router();

protectedRouter.get('/protected', authenticateToken, (req: AuthenticatedRequest, res: Response) =>
  protectedController.getProtectedMessage(req, res)
);

export default protectedRouter;
