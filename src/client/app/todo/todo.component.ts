import { Component, Input } from '@angular/core';
import { Todo } from 'src/shared/types.g';

@Component({
    selector: 'todo',
    templateUrl: './todo.component.html'
})
export class TodoComponent {
    @Input() todo?: Todo;
}