import { SessionOptions } from 'express-session';
import { Options } from 'node-sass-middleware';
import { join } from 'path';

class config {
  public readonly session: SessionOptions = {
    secret: 'mySecrey',
    resave: false,
    saveUninitialized: true,
  }
  public readonly sass: Options = {
    src: join(__dirname, '../styles'),
    dest: join(__dirname, '../public/css'),
    outputStyle: 'expanded',
    prefix: '/css',
    indentedSyntax: true,
  }
}

export default new config();