import sassMiddleware from 'node-sass-middleware';
import sass from 'node-sass';

declare module 'node-sass-middleware' {
  interface Options extends sass.Options {
    src: string;
    dest?: string;
    root?: string;
    prefix?: string;
    force?: boolean;
    debug?: boolean;
    indentedSyntax?: boolean;
    response?: boolean;
    error?: () => void;
  }
}