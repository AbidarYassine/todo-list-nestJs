import { TodoDto } from './dto-request/todo.dto';
import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { TodoService } from './service/todo.servic';

@Controller('todos')
export class TodosController {
  constructor(private todoService: TodoService) {}
  @Post()
  async persistTodo(@Body() todoDto: TodoDto) {
    return this.todoService.createTodoo(todoDto);
  }
  @Get()
  async getAll() {
    return this.todoService.findAllTodo();
  }
  @Get(':id')
  async getOne(@Param('id') myId:number) {
    return await this.todoService.findOneTodo(myId);
  }
}
