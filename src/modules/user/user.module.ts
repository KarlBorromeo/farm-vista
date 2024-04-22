import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { Users } from 'src/entity/users/users.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Users])],
  controllers: [],
  providers: [UserService],
  exports: [ UserService ]
})
export class UserModule {}
