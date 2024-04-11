import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database';
import { JwtStrategy } from './auth/guards/jwt.strategy';


@Module({
  imports: [AuthModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService,JwtStrategy],
})
export class AppModule {}
