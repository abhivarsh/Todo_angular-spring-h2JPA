import { Component, OnInit } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { ListTodosService } from '../services/data/list-todos.service';
import { Router } from '@angular/router';

export class Todo {
  constructor(
    public id: number,
    public description: String,
    public completed: boolean,
    public targetDate: Date
  ) {}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  todos = [];

  errorMessage = '';
  successMessage = '';
  username = 'pabhivarshnv';

  constructor(private todoService: ListTodosService, private router: Router) {}

  ngOnInit() {
    this.refreshTodos();
  }
  refreshTodos() {
    this.todoService
      .getAllTodos(this.username)
      .subscribe(
        response => (this.todos = response),
        error => (this.errorMessage = error.error.message)
      );
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo(this.username, id).subscribe(
      response => {
        this.successMessage = 'Successfully deleted a Todo!!';
        this.refreshTodos();
      },
      error => (this.errorMessage = error.error.message)
    );
  }

  updateTodo(id: number) {
    this.router.navigate(['/todos', id]);
  }

  addTodo() {
    this.router.navigate(['/todos', -1]);
  }
}
