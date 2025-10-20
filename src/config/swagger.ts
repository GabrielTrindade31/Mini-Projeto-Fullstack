import swaggerJsdoc from 'swagger-jsdoc';

export const swaggerSpec = swaggerJsdoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Mini Projeto Fullstack API',
      version: '1.0.0',
      description: 'Auth (register/login) + rota protegida com JWT',
    },
    components: {
      securitySchemes: {
        bearerAuth: { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
      },
    },
    security: [{ bearerAuth: [] }],
    servers: [{ url: '/' }],
  },
  apis: ['src/routes/*.ts'], // lê os JSDoc das rotas
});
