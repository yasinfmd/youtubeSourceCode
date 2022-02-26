import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Controller({ path: 'user' })
export class UserController {
  @Get()
  getUser(@Req() req: Request, @Res() res: Response): string {
    console.log('req', req.method);
    // res.json({id:1})
    return 'User';
  }
  @Get('/query')
  findUserQuery(
    @Query('ad') query,
    @Query('q') q,
    @Query('lastname') lname,
  ): string {
    console.log('query', query, q, lname);
    return 'Selam';
  }

  @Get(':id')
  findUserById(@Param('id') id: string): string {
    return id;
  }

  @Get('wildcard|wild*crd')
  wildCard(): string {
    return 'test';
  }

  @Put()
  updateUser(@Query('id') id: string, @Req() req: Request): string {
    console.log(id);
    console.log(req.body);
    return 'Data Güncellendi';
  }

  @Delete()
  deleteUser(@Body() data: { id: string }): string {
    return 'Silindi';
  }

  //@Body('id') id:string
  //
  @Post()
  @HttpCode(202)
  createUser(@Body() data: { id: string | number; name: string }): string {
    return 'Yasin';
  }
}
