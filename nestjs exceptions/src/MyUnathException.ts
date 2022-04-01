import { HttpException, HttpStatus } from '@nestjs/common';

export class MyUnathException extends HttpException {
  constructor(e: any) {
    super(e, HttpStatus.UNAUTHORIZED);
  }
}
