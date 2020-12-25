import { TodoEntity } from './../entities/todo.entity';
import { EntityRepository, Repository } from 'typeorm';
import { TodoDto } from '../dto-request/todo.dto';
import { Injectable } from '@nestjs/common';
@EntityRepository(TodoEntity)
@Injectable()
export class TodoDao extends Repository<TodoEntity> {
  async createTodo(todoDto: TodoDto) {
    const todo = new TodoEntity();
    todo.title = todoDto.title;
    todo.completed = todoDto.completed;
    await todo.save();
    return todo;
  }
}
