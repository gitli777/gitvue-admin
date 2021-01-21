import { Controller, Get, Post, Body, Put, Req,Param,Query, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {Api_ex} from '../../../config'
@Controller(Api_ex+'user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // @Post('login')
  // create(@Body() createUserDto: CreateUserDto) {

  //   return this.userService.login(createUserDto)
  // }
  @Get('/a')
  find(){
    return this.userService.findAll();
  }

  @Get('info')
  getinfo(@Req() token:string) { //根据token 返回用户信息
    console.log(token)
    return this.userService.getInfo(token)
  }
  @Get(':id')
  findOne(@Param('id') id: string) { //根据id 返回一个用户名?
    return this.userService.findOne(+id);
  }


  @Put(':id')
  update(@Query('id') id: string, @Body() updateUserDto: UpdateUserDto) { //根据id 修改用户属性
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) { //根据id 删除一个用户
    return this.userService.remove(+id);
  }
}
