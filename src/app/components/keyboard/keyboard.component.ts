import { Component, Input, Output, EventEmitter } from '@angular/core';
import { shiftEvent } from './shiftEvent'
import { ctrlAltEvent } from './ctrlAltEvent'
import { capslockEvent } from './capslockEvent'
import { SearchService } from '../../services/search.service';
import { noKeysCharEvents } from './utils';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent {

  @Input() show: boolean = false;
  @Output() updateKeyboard = new EventEmitter<any>();
  root = (<any>window.document);
  capslock = false;
  shift = false;
  ctrlalt = false;

  constructor(public searchService: SearchService) {}

  handleKeyboard(type: boolean) {
    this.updateKeyboard.emit(type);
  }

  onKeyVirtualEvents(event: any) {
    if(event.target.classList.contains('key')) {
      let input = this.root.querySelector('.App-search-input')

      if(!noKeysCharEvents.includes(event.target.textContent)) {
        switch(event.target.textContent) {
          case 'backspace':
            this.backspaceEvent(input)
            break;
          case 'whitespace':
            this.insertAtCaretEvent(input, ' ')
            break;
          default:
            this.insertAtCaretEvent(input, event.target.textContent)
        }
      }
    }
  }

  handleCapslock() {
    this.capslock = !this.capslock
    capslockEvent(this.capslock)
  }

  handleShift() {
    this.shift = !this.shift
    shiftEvent(this.shift)
  }

  handleCtrlAlt() {
    this.ctrlalt = !this.ctrlalt
    ctrlAltEvent(this.ctrlalt)
  }

  backspaceEvent(element: any) {
    if (this.root.selection) {
      element.focus()
      let sel = this.root.selection.createRange()
      --sel.text;
      element.focus()
    } else if (element.selectionStart || element.selectionStart === 0) {
      let startPos = element.selectionStart;
      let endPos = element.selectionEnd;
      let textValue = element.value.substring(0, startPos-1) + element.value.substring(endPos, element.value.length)

      this.searchService.setSearch(textValue);
      element.focus()
      element.selectionStart = startPos;
      element.selectionEnd = --endPos;
    } else {
      this.searchService.setSearch(String(--element.value));
      element.focus()
    }
  }

  insertAtCaretEvent(element: any, text: string) {
    if (this.root.selection) {
      element.focus()
      let sel = this.root.selection.createRange()
      sel.text = text;
      element.focus()
    } else if (element.selectionStart || element.selectionStart === 0) {
      let startPos = element.selectionStart;
      let endPos = element.selectionEnd;
      let textValue = element.value.substring(0, startPos) + text + element.value.substring(endPos, element.value.length)

      this.searchService.setSearch(textValue)
      element.focus()
      element.selectionStart = startPos + text.length;
      element.selectionEnd = startPos + text.length;
    } else {
      this.searchService.setSearch(element.value += text);
      element.focus()
    }
  }
}
