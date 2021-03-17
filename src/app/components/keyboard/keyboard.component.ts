import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent {

  @Input() show: boolean = false;
  @Output() updateKeyboard = new EventEmitter<any>();
  root = (<any>window);

  constructor() { }

  handleKeyboard(type: boolean) {
    this.updateKeyboard.emit(type);
  }
}
