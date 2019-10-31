import { Component, OnInit } from '@angular/core';
import { ListTodosService } from '../services/data/list-todos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';
import { BasicAuthenticationService } from '../services/basic-authentication.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  constructor(
    private todoService: ListTodosService,
    private route: ActivatedRoute,
    private router: Router,
    private basicAuthServices: BasicAuthenticationService
  ) {}

  username = this.basicAuthServices.getAuthUser();
  id: number;
  todo: Todo;

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.todo = new Todo(this.id, '', false, new Date());
    if (this.id != -1) {
      this.todoService
        .retrieveTodo(this.username, this.id)
        .subscribe(response => (this.todo = response));
    }
  }

  saveTodo() {
    if (this.id === -1) {
      this.todoService.addTodo(this.username, this.todo).subscribe(response => {
        this.router.navigate(['todos']);
      });
    } else {
      this.todoService
        .updateTodo(this.username, this.id, this.todo)
        .subscribe(response => {
          this.router.navigate(['todos']);
        });
    }
  }
}
