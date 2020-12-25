import { TodoDao } from './dao/todo.dao';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoService } from './service/todo.servic';
import { Module } from '@nestjs/common';
import { TodosController } from './todos.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TodoDao])],
  controllers: [TodosController],
  providers: [TodoService],
})
export class TodosModule {}
