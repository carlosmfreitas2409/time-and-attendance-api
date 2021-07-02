import 'reflect-metadata';
import 'dotenv/config';

import express from 'express';
import swaggerUI from 'swagger-ui-express';
import 'express-async-errors';

import '../typeorm';
import '@shared/container';

import swaggerFile from '../../../swagger.json';
import { globalErrorHandler } from './middlewares/globalErrorHandler';
import { router } from './routes';

const app = express();

app.use(express.json());

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerFile));

app.use('/v1', router);

app.use(globalErrorHandler);

app.listen(3333, () => {
  console.log('🚀 Server running on PORT 3333!');
});
