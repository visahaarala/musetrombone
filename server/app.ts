import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

const app = express();
if (process.env.NODE_ENV === 'development') {
  app.use(cors({ origin: '*' }));
  app.use(morgan('dev'));
}

// React Client SPA
app.use('/', express.static(__dirname + '/../client/dist/'));
app.use('/:subfolder', express.static(__dirname + '/../client/dist/'));

export default app;
