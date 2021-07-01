import 'reflect-metadata';

import express from 'express';

import './database';
import './shared/container';

import { router } from './routes';

const app = express();

app.use(express.json());
app.use('/v1', router);

app.listen(3333, () => {
  console.log('🚀 Server running on PORT 3333!');
});
