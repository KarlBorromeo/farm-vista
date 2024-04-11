import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/enitity/users.entity';
@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 3309,
            username: 'postgres',
            password: 'qwert',
            database: 'postgres',
            entities: [Users],
            synchronize: true
         })
    ],
})
export class DatabaseModule {}