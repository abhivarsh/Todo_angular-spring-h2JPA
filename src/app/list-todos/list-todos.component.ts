import { Component, OnInit } from '@angular/core';
import { v4 as uuid } from 'uuid';

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
  todos = [
    new Todo(uuid(), 'Book movie tickets', false, new Date()),
    new Todo(uuid(), 'Buy cloths for mom', false, new Date()),
    new Todo(uuid(), 'Visit India', false, new Date())
  ];

  constructor() {}

  ngOnInit() {}
}
