export {};

declare global {
  namespace Express {
    interface Request {
      user? : Record<string, any>
      sh_secret: string;
    }
  }
}