import type { IncomingMessage, ServerResponse } from 'http';
import createApp from '../src/app';
import { connectDatabase } from '../src/database';
import logger from '../src/utils/logger';

let appPromise: Promise<ReturnType<typeof createApp>> | null = null;

const getApp = async () => {
  if (!appPromise) {
    appPromise = (async () => {
      await connectDatabase();
      logger.info('Aplicação inicializada no ambiente serverless.');
      return createApp();
    })();
  }

  return appPromise;
};

const handler = async (req: IncomingMessage, res: ServerResponse) => {
  const app = await getApp();
  return app(req as any, res as any);
};

export default handler;

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};
