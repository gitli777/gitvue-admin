import { Controller, Get, Post, Body, Put, Req, Param, Query, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { Api_ex } from '../../../config';
@Controller(Api_ex + 'user')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  create(@Body() createUserDto: CreateAuthDto) {
    return this.authService.login(createUserDto); //根据登陆的数据 返回一个token给前端
  }
}
