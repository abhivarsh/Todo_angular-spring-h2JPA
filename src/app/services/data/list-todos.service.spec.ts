import { TestBed } from '@angular/core/testing';

import { ListTodosService } from './list-todos.service';

describe('ListTodosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListTodosService = TestBed.get(ListTodosService);
    expect(service).toBeTruthy();
  });
});
