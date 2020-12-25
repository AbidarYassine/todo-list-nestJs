import { TodoDao } from './todos/dao/todo.dao';
import { TodoService } from './todos/service/todo.servic';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmOption } from './config/typeorm.config';
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [TodosModule,TypeOrmModule.forRoot(typeOrmOption),TypeOrmModule.forFeature([TodoDao])],
  controllers: [AppController],
  providers: [AppService,TodoService],
})
export class AppModule {}
