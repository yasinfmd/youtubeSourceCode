import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Req,
} from '@nestjs/common';
import { UserService } from './user.service';
import {
  ApiBearerAuth,
  ApiHeader,
  ApiProperty,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
class UserDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  surname: string;

  @ApiProperty()
  email: string;
}
@ApiHeader({
  name: 'X-MyHeader',
  description: 'Custom header',
})
@ApiBearerAuth()
@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @ApiResponse({
    status: 200,
    description: 'Başarılı İşlem',
  })
  @ApiResponse({
    status: 500,
    description: 'Başarısız İşlem',
  })
  @Get('findAll')
  findAll() {
    return this.userService.findAll();
  }
  @Post('create')
  create(@Body() data: UserDto) {
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
