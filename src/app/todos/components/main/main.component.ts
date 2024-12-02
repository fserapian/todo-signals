import { Component, computed, inject, Signal } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { CommonModule } from '@angular/common';
import { FilterEnum } from '../../types/todo.enum';
import { TodoComponent } from '../todo/todo.component';

@Component({
    selector: 'app-todos-main',
    templateUrl: './main.component.html',
    imports: [CommonModule, TodoComponent],
})
export class MainComponent {
    todosService = inject(TodosService);

    visibleTodos = computed(() => {
        const todos = this.todosService.todosSig();
        const filter = this.todosService.filterSig();

        if (filter === FilterEnum.Active) {
            return todos.filter((todo) => !todo.isCompleted);
        }

        if (filter === FilterEnum.Completed) {
            return todos.filter((todo) => todo.isCompleted);
        }

        return todos;
    });
}
