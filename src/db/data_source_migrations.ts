import { DataSource, DataSourceOptions } from "typeorm";

export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 3309,
    username: 'postgres',
    password: 'qwert',                              // work: qwert , home: jklborromeo
    database: 'farmvista',
    entities: ['dist/**/*.entity.js'],              // this path is the entity files converted to js in /dist
    migrations: ['dist/db/migrations/*.js'],        // path located at the converted js files into /dist
    synchronize: false,                             // if true no need to use migrations, automatically sync every start of the application
}

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;

/* Use this file if we are planning to disable the automatic synchronize (synchronize: false)*/