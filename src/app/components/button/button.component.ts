import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit{
  /* this is like defining props for the ButtonComponent to pass when using <app-button>*/
  @Input() text: string = "";
  @Input() color: string = "";
  /* this will basically generate an event other components will have in their scope
  <other-component (btnClick)="doSomething()"></other-component>
   */
  @Output() btnClick = new EventEmitter();

  constructor() { }
  ngOnInit(): void {
    
  }
  onClick(): void {
    this.btnClick.emit();
  }

}
