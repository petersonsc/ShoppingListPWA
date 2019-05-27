import { Component, OnInit } from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';

export class Todo {
  desc: string;
  price: string;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todo: Todo = new Todo();
  todos: Todo[] = [];

  constructor() { }

  ngOnInit() {
  }

  save(todo: Todo) {
    if (todo.desc.length) {
      this.todos.push(todo);
      this.todo = new Todo();
      this.todos = Object.assign([], this.todos);
    }
  }

  delete(todo: Todo) {
    this.todos.splice(this.todos.indexOf(todo), 1);
  }

  fixePrice(price) {
      return parseFloat(price).toFixed( 2 );
  }

}
