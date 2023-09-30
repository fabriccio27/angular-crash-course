import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // I can access this property in the HTML file using the interpolation syntax {{ title }}
  // that sintax allows any js expression to be evaluated
  title: string = 'Task tracker';
}
