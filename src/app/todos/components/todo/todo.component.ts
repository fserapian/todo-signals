import { Component, Input, inject } from '@angular/core';
import { TodoInterface } from '../../types/todo.interface';
import { TodosService } from '../../services/todos.service';

@Component({
    selector: 'app-todos-todo',
    templateUrl: './todo.component.html',
    styleUrl: './todo.component.css',
})
export class TodoComponent {
    @Input({ required: true }) todo!: TodoInterface;

    todosService = inject(TodosService);

    deleteTodo(todoId: string) {
        this.todosService.deleteTodo(todoId);
    }
}
