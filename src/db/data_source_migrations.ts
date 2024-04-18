import { DataSource, DataSourceOptions } from "typeorm";
import * as dotenv from 'dotenv';
dotenv.config();

export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT,10),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,              // work: qwert , home: jklborromeo
    database: process.env.DB_DATABASE,              // work: qwert , home: jklborromeo
    entities: ['dist/**/*.entity.js'],              // this path is the entity files converted to js in /dist
    migrations: ['dist/db/migrations/*.js'],        // path located at the converted js files into /dist
    synchronize: false,                             // if true no need to use migrations, automatically sync every start of the application
}

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;

/* Use this file if we are planning to disable the automatic synchronize (synchronize: false)*/