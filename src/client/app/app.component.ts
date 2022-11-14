import { Component } from '@angular/core';
import { routes } from './routes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My To-Do List Application';
  routes = routes;
}
