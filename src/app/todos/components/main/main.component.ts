import { Component, inject } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-todos-main',
    templateUrl: './main.component.html',
    imports: [CommonModule]
})
export class MainComponent {
    todosService = inject(TodosService);
}
