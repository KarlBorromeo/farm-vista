import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from 'src/modules/user/user.module';
import { LocalStrategy } from './guards/local.strategy';
import { JwtModule } from '@nestjs/jwt'
import * as dotenv from 'dotenv';
dotenv.config();
@Module({
  imports: [ UserModule,
            JwtModule.register({
            secret: process.env.JWT_KEY,
            signOptions: { expiresIn: '1h' },
            })
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy]
})
export class AuthModule {}
