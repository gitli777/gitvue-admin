import { Client } from './modules/client/entities/client.entity';
import { from } from 'rxjs';
import { User } from './modules/user/entities/user.entity';
import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { ClientModule } from './modules/client/client.module';


@Module({
  imports: [ TypeOrmModule.forRoot({ 
  "type": "mysql",
  "host": "localhost",
  "port": 3306,
  "username": "root",
  "password": "root",
  "database": "qxzz",
  "entities": [User,Client],
  "synchronize": true}),
    UserModule, AuthModule,ClientModule],
  providers: [],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
