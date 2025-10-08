import { Request, Response } from 'express';

export class ProtectedController {
  async getProtectedMessage(req: Request, res: Response): Promise<Response> {
    return res.status(200).json({ message: 'Acesso autorizado.' });
  }
}

export const protectedController = new ProtectedController();
