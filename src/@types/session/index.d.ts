import session from 'express-session';

declare module 'express-session' {
  interface SessionData {
    username: string;
  }
}
declare module 'socket.io/dist/socket' {
  interface Handshake {
    session?: session.Session & Partial<session.SessionData>;
    sessionID?: string;
  }
}