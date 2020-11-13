import { Injectable } from '@angular/core';
import { LoggerService } from 'src/app/services/logger.service';
import { Todo } from '../model/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: Todo[] = [];

  constructor(private loggerService: LoggerService) {}

  getTodos(): Todo[] {
    return this.todos;
  }

  logger() {
    this.loggerService.logger(this.todos);
  }

  addTodo(todo: Todo) {
    if (this.todos.length) {
      todo.id = this.todos[this.todos.length - 1].id + 1;
    } else {
      todo.id = 1;
    }
    this.todos.push(todo);
  }

  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }
}
