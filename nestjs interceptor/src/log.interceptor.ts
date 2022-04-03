import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { tap } from 'rxjs/operators';

@Injectable()
export class LogInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler<any>): any {
    console.log('istek geldi');
    /*    console.log(
      context.switchToHttp().getRequest(),
      context.switchToHttp().getResponse(),
    );*/
    // 1ip 5 ms
    // 2 ip 10 ms
    const now = Date.now();

    return next.handle().pipe(
      tap(() => {
        //db bişey kaydet !
        console.log('istek bitti');
        console.log(`${Date.now() - now}ms`);
      }),
    );
  }
}
