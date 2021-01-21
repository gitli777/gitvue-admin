import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import{AuthController} from './auth.controller'
import { UserModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { from } from 'rxjs';
@Module({
  imports:[UserModule,PassportModule, JwtModule.register({
    secret: jwtConstants.secret,
    signOptions: { expiresIn: '6h' },
  }),],
  controllers: [AuthController],
  providers: [AuthService],
  exports:[AuthService]
})
export class AuthModule {}
