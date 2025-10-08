import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import router from './routes';
import { errorMiddleware } from './middlewares/error.middleware';
import { requestLogger } from './middlewares/request-logger.middleware';

export const createApp = (): express.Application => {
  const app = express();

  app.use(helmet());
  app.use(cors());
  app.use(express.json());
  app.use(requestLogger);

  app.use(router);

  app.use(errorMiddleware);

  return app;
};

export default createApp;
