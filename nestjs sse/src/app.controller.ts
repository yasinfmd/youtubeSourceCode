import { Controller, Get, Sse } from '@nestjs/common';
import { interval, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Controller()
export class AppController {
  @Get()
  async getTest() {
    return 'Hi !';
  }

  @Sse('sse')
  sse(): Observable<MessageEvent> {
    return interval(1000).pipe(
      map(
        (_) =>
          ({ data: { time: new Date().toLocaleTimeString() } } as MessageEvent),
      ),
    );
  }
}
