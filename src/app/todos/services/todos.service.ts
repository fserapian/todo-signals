import { Injectable, signal } from '@angular/core';
import { TodoInterface } from '../types/todo.interface';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
    providedIn: 'root',
})
export class TodosService {
    todosSig = signal<TodoInterface[]>([]);

    addTodo(text: string): void {
        const newTodo = {
            id: uuidv4(),
            text,
            isCompleted: false,
        };

        this.todosSig.update((todos) => [...todos, newTodo]);
    }
}
