import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class ListTodosService {
  deleteTodo(username: string, id: number) {
    return this.http.delete(
      `http://localhost:8080/users/${username}/todos/${id}`
    );
  }

  getAllTodos(username: string) {
    return this.http.get<[Todo]>(
      `http://localhost:8080/users/${username}/todos`
    );
  }

  constructor(private http: HttpClient) {}
}
