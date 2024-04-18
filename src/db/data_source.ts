import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
dotenv.config();

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: process.env.DB_HOST,
            port: parseInt(process.env.DB_PORT,10),
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,          // work: qwert , home: jklborromeo
            database: process.env.DB_DATABASE,
            entities: ['dist/**/*.entity.js'],          // this path is the entity files converted to js in /dist
            synchronize: true
         })
    ],
})
export class DatabaseModule {}

/* Use this file if we are planning to use enable the automatic synchronize (synchronize: true)*/