import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// App components
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar.component';
import { TodoComponent } from './todo/todo.component';
import { AddTodoComponent } from './todo/add-todo.component';
import { ListTodosComponent } from './todo/list-todos.component';

// Providers
import { TodoApiService } from './todo/todo-api.service';

// Data, configs, etc
import { routes } from './routes';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TodoComponent,
    AddTodoComponent,
    ListTodosComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
  ],
  providers: [
    TodoApiService,
    { provide: 'API_HOST', useValue: environment.apiHost },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
