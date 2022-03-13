import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    console.log('Request geldi', req.originalUrl);
    next();
    /*   if (req.originalUrl === '/user') {
      next();
    } else {
      res.json({ message: 'Buradan Geçiş Yok' });
    }*/
  }
}
