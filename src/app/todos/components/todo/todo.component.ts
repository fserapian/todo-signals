import {
    Component,
    ElementRef,
    EventEmitter,
    inject,
    Input,
    OnChanges,
    OnInit,
    Output,
    SimpleChanges,
    ViewChild
} from '@angular/core';
import { TodoInterface } from '../../types/todo.interface';
import { TodosService } from '../../services/todos.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-todos-todo',
    templateUrl: './todo.component.html',
    styleUrl: './todo.component.css',
    imports: [CommonModule],
})
export class TodoComponent implements OnInit, OnChanges {
    @Input({ required: true }) todo!: TodoInterface;
    @Input({ required: true }) isEditing!: boolean
    @Output() setEditingIdEvent = new EventEmitter<string | null>();

    @ViewChild('textInput') textInput?: ElementRef; // To add autofocus

    editingText: string = '';

    todosService = inject(TodosService);

    ngOnInit(): void {
        this.editingText = this.todo.text;
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes['isEditing'].currentValue) {
            setTimeout(() => {
                this.textInput?.nativeElement.focus();
            }, 0)
        }
    }

    deleteTodo(): void {
        this.todosService.deleteTodo(this.todo.id);
    }

    setTodoInEditMode(): void {
        this.isEditing = true;
        this.setEditingIdEvent.emit(this.todo.id);
    }

    closeEditingMode(): void {
        this.isEditing = false;
    }

    changeText(event: Event): void {
        this.editingText = (event.target as HTMLInputElement).value;
    }

    updateTodo(): void {
        this.todosService.updateTodo(this.todo.id, this.editingText);
        this.setEditingIdEvent.emit(null);
    }

    toggleComplete(): void {
        this.todosService.toggleComplete(this.todo.id);
    }
}
