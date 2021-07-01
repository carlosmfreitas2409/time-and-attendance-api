import 'reflect-metadata';

import express from 'express';

import './database';

const app = express();

app.get('/', (request, response) => response.json({ message: 'Hello World' }));

app.listen(3333, () => {
  console.log('🚀 Server running on PORT 3333!');
});
