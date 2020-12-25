import { TodoDto } from './../dto-request/todo.dto';
import { TodoEntity } from './../entities/todo.entity';
import { TodoDao } from './../dao/todo.dao';
import { Injectable, NotFoundException } from '@nestjs/common';
import { promises } from 'fs';

@Injectable()
export class TodoService {
  constructor(private todoRepo: TodoDao) {}

  async createTodoo(todoDto: TodoDto): Promise<TodoEntity> {
    return await this.todoRepo.createTodo(todoDto);
  }
  async findAllTodo(): Promise<TodoEntity[]> {
    return await this.todoRepo.find();
  }
  async findOneTodo(id: number): Promise<TodoEntity> {
    const found = await this.todoRepo.findOne(id);
    if (!found) {
      throw new NotFoundException(`this id ${id} not existe`);
    }
    return found;
  }
}
