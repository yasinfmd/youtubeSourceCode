import { Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.TRANSIENT })
export class LogService {
  data = [];

  add() {
    this.data.push(Date.now());
  }

  get() {
    return this.data;
  }
}
