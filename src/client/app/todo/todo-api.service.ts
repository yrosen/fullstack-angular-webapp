import { Injectable, Inject } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

import { Todo } from "src/shared/types.g";

@Injectable()
export class TodoApiService{
    constructor(
        private http: HttpClient,
        @Inject('API_HOST') private apiHost: string
    ) {
    }

    async getTodoItems() {
        return await firstValueFrom(
            this.http.get<Todo[]>(`${this.apiHost}/todos`)
        );
    }

    async addTodoItem(todo: Pick<Todo, 'title' | 'description'>) {
        return await firstValueFrom(
            this.http.post<Todo>(`${this.apiHost}/todo`, { todo })
        )
    }
}