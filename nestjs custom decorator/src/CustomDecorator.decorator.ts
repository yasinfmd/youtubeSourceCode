import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const CustomDecorator = createParamDecorator(
  (data: any, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.body[data];
  },
);
