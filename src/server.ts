import 'reflect-metadata';
import 'dotenv/config';

import express from 'express';
import 'express-async-errors';

import './database';
import './shared/container';

import { router } from './routes';
import { globalErrorHandler } from './shared/middlewares/globalErrorHandler';

const app = express();

app.use(express.json());
app.use('/v1', router);

app.use(globalErrorHandler);

app.listen(3333, () => {
  console.log('🚀 Server running on PORT 3333!');
});
