import { Route } from '@angular/router';

import { AddTodoComponent } from './todo/add-todo.component';
import { ListTodosComponent } from './todo/list-todos.component';

export const routes: Route[] = [
    { path: '', component: ListTodosComponent, title: 'List All Todo Items' },
    { path: 'add', component: AddTodoComponent, title: 'Add New Todo Item' }
];
