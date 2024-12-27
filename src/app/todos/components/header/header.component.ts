import { Component, inject } from '@angular/core';
import { TodosService } from '../../services/todos.service';

@Component({
    selector: 'app-todos-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
})
export class HeaderComponent {
    text = ''
    todosService = inject(TodosService);

    changeText(e: Event) {
        const target = e.target as HTMLInputElement;
        this.text = target.value;
    }

    addTodo() {
        this.todosService.addTodo(this.text);
        this.text = '';
    }
}
