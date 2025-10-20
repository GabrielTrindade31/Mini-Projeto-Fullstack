import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import router from './routes';
import { errorMiddleware } from './middlewares/error.middleware';
import { requestLogger } from './middlewares/request-logger.middleware';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './config/swagger';

export const createApp = (): express.Application => {
  const app = express();

  app.use(helmet());
  app.use(cors());
  app.use(express.json());
  app.use(requestLogger);

  // Swagger UI em /docs
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  // Suas rotas
  app.use(router);

  // Tratador de erros
  app.use(errorMiddleware);

  return app;
};

export default createApp; // opcional
