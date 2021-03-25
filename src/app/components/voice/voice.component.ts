import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-voice',
  templateUrl: './voice.component.html',
  styleUrls: ['./voice.component.scss']
})
export class VoiceComponent implements OnInit {

  @Input() show: boolean = false;
  @Output() updateVoice = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  disableVoice() {
    this.updateVoice.next(false);
  }

}
