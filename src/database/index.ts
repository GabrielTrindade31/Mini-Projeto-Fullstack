import mongoose from 'mongoose';
import { env } from '../config/env';
import logger from '../utils/logger';

export const connectDatabase = async (): Promise<void> => {
  try {
    if (!env.mongoUri) {
      throw new Error('MongoDB URI não configurada.');
    }

    await mongoose.connect(env.mongoUri);
    logger.info('Conectado ao MongoDB com sucesso.');
  } catch (error) {
    logger.error('Erro ao conectar ao MongoDB', { error });
    throw error;
  }
};

export const disconnectDatabase = async (): Promise<void> => {
  await mongoose.disconnect();
  logger.info('Conexão com MongoDB encerrada.');
};
