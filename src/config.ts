import { SessionOptions } from 'express-session';
import { Options } from 'node-sass-middleware';
import { join } from 'path';
import fs from 'fs';
import { SecureContextOptions } from 'tls';

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
  public readonly https: SecureContextOptions = {
    key: fs.readFileSync('../ssl/private.key'),
    cert: fs.readFileSync('../ssl/certificate.crt'),
    ca: fs.readFileSync('../ssl/ca_bundle.crt'),
  }
}

export default new config();