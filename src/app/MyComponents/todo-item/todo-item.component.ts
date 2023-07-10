import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo!: Todo;
  @Input() i!: number;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter;
  @Output() todoCheckBox: EventEmitter<Todo> = new EventEmitter;

  public handleClick(todo: Todo) {
    console.log("Button Clicked!");
    this.todoDelete.emit(todo);
  }

  public onCheckBoxClick(todo: Todo) {
    console.log("CheckBox Clicked!");
    this.todoCheckBox.emit(todo);
  }
}
