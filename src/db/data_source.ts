import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 3309,
            username: 'postgres',
            password: 'qwert',                          // work: qwert , home: jklborromeo
            database: 'postgres',
            entities: ['dist/**/*.entity.js'],          // this path is the entity files converted to js in /dist
            synchronize: true
         })
    ],
})
export class DatabaseModule {}

/* Use this file if we are planning to use enable the automatic synchronize (synchronize: true)*/