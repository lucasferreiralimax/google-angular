import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent implements OnInit {

  @Input() show: boolean = false;
  @Output() updateKeyboard = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  handleKeyboard(type: boolean) {
    this.updateKeyboard.emit(type);
  }
}
