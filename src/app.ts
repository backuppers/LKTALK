import path from 'path';
import express from 'express';
import sassMiddleware from 'node-sass-middleware';
import sessionMiddleware from 'express-session';
import { urlencoded } from 'body-parser';

import rootRouter from './routes/root';
import config from './config';
import helmet from 'helmet';

const app: express.Application = express();
export const session = sessionMiddleware(config.session);

app.set('view engine', 'pug');

app.use(sassMiddleware(config.sass));
app.use(express.static(path.join(__dirname, '../public')));
app.use(session);
app.use(urlencoded({ extended: true }));
app.use('/', rootRouter);
app.use(helmet());

app.disable('x-powered-by');

export default app;