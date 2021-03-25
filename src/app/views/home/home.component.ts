import { Component, OnInit, ɵɵsetComponentScope } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  keyboard: boolean = false;
  voice: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleKeyboard() {
    this.keyboard = !this.keyboard;
  }
  handleKeyboard(type: boolean) {
    this.keyboard = type;
  }
  handleVoice(type: boolean) {
    this.voice = type;
  }
}
