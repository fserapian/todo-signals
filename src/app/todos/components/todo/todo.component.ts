import { Component, Input } from '@angular/core';
import { TodoInterface } from '../../types/todo.interface';

@Component({
    selector: 'app-todos-todo',
    templateUrl: './todo.component.html',
    styleUrl: './todo.component.css',
})
export class TodoComponent {
    @Input({ required: true }) todo!: TodoInterface
}
