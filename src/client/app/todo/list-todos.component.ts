import { Component, OnInit } from "@angular/core";
import { TodoApiService } from "./todo-api.service";
import { Todo } from "src/shared/types.g";

@Component({
    selector: 'list-todos',
    templateUrl: './list-todos.component.html'
})
export class ListTodosComponent implements OnInit {
    todoList: Todo[] = [];

    constructor(private todoApi: TodoApiService) {
    }

    async ngOnInit() {
        this.todoList = await this.todoApi.getTodoItems();
    }

    refresh() {
        this.ngOnInit();
    }
}