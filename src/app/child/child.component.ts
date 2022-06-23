import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'child-app',
  templateUrl: 'child.component.html',
})
export class ChildComponent {
  @Output() eventNew = new EventEmitter<String>();

  PressMe() {
    this.eventNew.emit('Item is presessed');

    console.log('called pressed');
  }
}
