import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { JwtStrategy } from './auth/guards/jwt.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'src/db/data_source_migrations';
import { DatabaseModule } from './db/data_source';                      //import this instead of TypeOrmModule.forRoot() if we are enabling autho synchronize


@Module({
  imports: [AuthModule,TypeOrmModule.forRoot(dataSourceOptions)],        // toggle to enable migration
  // imports: [AuthModule,DatabaseModule],                                  // toggle to enable auto synchronize
  controllers: [AppController],
  providers: [AppService,JwtStrategy],
})
export class AppModule {}
