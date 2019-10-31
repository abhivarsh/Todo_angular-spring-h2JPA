import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';
import { API_URI } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class ListTodosService {
  deleteTodo(username: string, id: number) {
    return this.http.delete(`${API_URI}/users/${username}/todos/${id}`);
  }

  getAllTodos(username: string) {
    return this.http.get<[Todo]>(`${API_URI}/users/${username}/todos`);
  }

  retrieveTodo(username: string, id: number) {
    return this.http.get<Todo>(`${API_URI}/users/${username}/todos/${id}`);
  }

  updateTodo(username: string, id: number, todo: Todo) {
    return this.http.put(`${API_URI}/users/${username}/todos/${id}`, todo);
  }

  addTodo(username: string, todo: Todo) {
    return this.http.post(`${API_URI}/users/${username}/todos`, todo);
  }

  constructor(private http: HttpClient) {}
}
