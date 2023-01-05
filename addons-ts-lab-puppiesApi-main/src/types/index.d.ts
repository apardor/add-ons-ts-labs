export {};

declare global {
  namespace Express {
    interface Request {
      user: string;
      sh_secret: string;
    }
  }
}