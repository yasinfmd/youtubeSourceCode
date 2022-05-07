import { Controller, Delete, Get, Param, Post, Req } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get('findAll')
  findAll() {
    return this.userService.findAll();
  }
  @Post('create')
  create() {
    return this.userService.create();
  }

  @Get('/findById/:userId')
  findById(@Param() params) {
    return this.userService.findOne(Number(params.userId));
  }

  @Delete('deleteById/:userId')
  deleteById(@Param() params) {
    return this.userService.delete(Number(params.userId));
  }
}
