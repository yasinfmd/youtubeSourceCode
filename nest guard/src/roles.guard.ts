import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflactor: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    console.log(context.getHandler());
    const roles = this.reflactor.get<string[]>('roles', context.getHandler());
    if (!roles) {
      return true;
    }
    //req.user
    const request = context.switchToHttp().getRequest();
    const header = request.header('userRole');
    if (header === 'USER') {
      return false;
    }
    console.log('roles', roles);
    return true;
  }
}
