import { Component, computed, inject } from '@angular/core';
import { FilterEnum } from '../../types/todo.enum';
import { TodosService } from '../../services/todos.service';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-todos-footer',
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.css',
    imports: [
        NgClass,
    ],
})
export class FooterComponent {
    todoService = inject(TodosService);
    FilterEnum = FilterEnum;
    currentFilter = () => this.todoService.filterSig();

    emptyTodos = computed(() => {
        return this.todoService.todosSig().length === 0;
    });

    activeCount = computed(() => {
        return this.todoService.todosSig().filter((todo) => !todo.isCompleted).length;
    });

    updateFilter(filter: FilterEnum): void {
        this.todoService.changeFilter(filter);
    }
}
