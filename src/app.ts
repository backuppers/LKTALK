import express from 'express';
import indexRouter from './routes/index';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';

const app: express.Application = express();

app.set('view engine', 'pug');
app.use('/', indexRouter);
app.use(express.static(path.join(__dirname, '../public')));
app.use(sassMiddleware({
  src: path.join(__dirname, '../styles'),
  dest: path.join(__dirname, '../public/css'),
  outputStyle: 'expanded',
  prefix: '/css',
  indentedSyntax: true,
}));


export default app;