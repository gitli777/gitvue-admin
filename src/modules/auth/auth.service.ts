import { TypeOrmModule } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username); //根据传入的用户名 校验是否相同
    if (user ) {
      const { ...result } = user;
      return result;
    }
    return null;
  }
  

  async login(userr: any) {
    const user = await this.usersService.login(userr);//根据登陆的数据 返回一个token
    const payload = { username: user.username };
    return {//返回一个token 
      code:200,message:'success', 
      token: this.jwtService.sign(payload),
    };
  }

}
