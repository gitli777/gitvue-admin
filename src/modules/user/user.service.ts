import { User } from './entities/user.entity';
import { Injectable,Inject,forwardRef } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
 constructor(
   @InjectRepository(User)
   private usersRepository: Repository<User>,
 ){}

create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }
login(createUserDto:any){
 return this.loginJwt(createUserDto)
}

loginJwt(createUserDto:any){
  return createUserDto
 }

  findAll() {
    console.log(this.usersRepository.find());
    
    return this.usersRepository.find();
  }
  getInfo(token:string){
    //先写死,返回一个固定的用户  code是200
    return {roles: ['admin'],
    code:200,
    introduction: 'I am super adsminstartor',
    avatar: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
    name: 'Super admin'}
  
  }

  findOne(username:string|number) {
    //根据get请求id 返回一个用户名的json
    return {username:'admin'};
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;//根据id 修改用户属性
  }

  remove(id: number) {
    return `This action removes a #${id} user`;//根据id 删除一个用户
  }
}
