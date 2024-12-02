import { Injectable, signal } from '@angular/core';
import { TodoInterface } from '../types/todo.interface';
import { v4 as uuidv4 } from 'uuid';
import { FilterEnum } from '../types/todo.enum';

@Injectable({
    providedIn: 'root',
})
export class TodosService {
    todosSig = signal<TodoInterface[]>([
        { id: uuidv4(), text: 'First', isCompleted: false },
        { id: uuidv4(), text: 'Second', isCompleted: true },
        { id: uuidv4(), text: 'Third', isCompleted: false },
    ]);
    filterSig = signal<FilterEnum>(FilterEnum.All);

    addTodo(text: string): void {
        const newTodo = {
            id: uuidv4(),
            text,
            isCompleted: false,
        };

        this.todosSig.update((todos) => [...todos, newTodo]);
    }

    changeFilter(filter: FilterEnum): void {
        this.filterSig.set(filter);
    }

    deleteTodo(id: string): void {
        this.todosSig.update((todos) => {
            return todos.filter((todo) => todo.id !== id);
        });
    }
}
