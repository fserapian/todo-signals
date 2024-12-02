import { Component, Input, Output, inject, EventEmitter } from '@angular/core';
import { TodoInterface } from '../../types/todo.interface';
import { TodosService } from '../../services/todos.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-todos-todo',
    templateUrl: './todo.component.html',
    styleUrl: './todo.component.css',
    imports: [CommonModule],
})
export class TodoComponent {
    @Input({ required: true }) todo!: TodoInterface;
    @Output() editTodoEvent = new EventEmitter<string | null>();
    @Input() isEditing!: boolean

    todosService = inject(TodosService);

    deleteTodo(todoId: string): void {
        this.todosService.deleteTodo(todoId);
    }

    editTodo(): void {
        this.editTodoEvent.emit(this.todo.id);
    }

    closeEditingMode(): void {
        this.isEditing = false;
    }
}
