import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { TodoApiService } from "./todo-api.service";

@Component({
    selector: 'add-todo',
    templateUrl: './add-todo.component.html'
})
export class AddTodoComponent {
    success = false;

    form = this.formBuilder.group({
        title: ['', Validators.required ],
        description: ['', Validators.required ],
    });

    constructor(private formBuilder: FormBuilder, private todoApi: TodoApiService) {
    }

    reset() {
        this.success = false;
        this.form.reset();
    }

    async submit() {
        // This is a good place to do client-side validation
        this.success = false;

        const todo = {
            title: this.form.get('title')?.value ?? '',
            description: this.form.get('description')?.value ?? ''
        };

        try {
            await this.todoApi.addTodoItem(todo);
            this.success = true;
        }
        catch(e: any) {
            console.error(e);
            alert('An error occured! Please check your console for details.');
        }
    }
}