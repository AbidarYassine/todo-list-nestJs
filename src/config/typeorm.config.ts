import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmOption:TypeOrmModuleOptions={
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'todo_nestjs',
    entities: [__dirname+"/../**/*.entity{.ts,.js}"],
    synchronize: true,
}