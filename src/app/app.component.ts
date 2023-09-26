import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // this is the tag name that will be used in the index.html file
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// in the class I can define the properties and methods that will be used in the component
export class AppComponent {
  // I can access this property in the HTML file using the interpolation syntax {{ title }}
  // that sintax allows any js expression to be evaluated
  title: string = 'Task tracker';
}
