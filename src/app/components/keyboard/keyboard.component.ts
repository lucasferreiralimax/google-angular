import { Component, Input, Output, EventEmitter } from '@angular/core';
import { shiftEvent, ctrlAltEvent, capslockEvent } from './events';
import { noKeysCharEvents } from './utils';
import { SearchService } from '../../services/search.service';

interface KeyEvents {
  [key: string]: any;
  backspace: (el: HTMLElement) => void;
  whitespace: (el: HTMLElement) => void;
}

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
      const input = document.querySelector('.App-search-input')
      const typeKey: string = event.target.textContent
      const keyEvents: KeyEvents = {
        backspace: (el) => this.backspaceEvent(el),
        whitespace: (el) => this.insertAtCaretEvent(el, ' ')
      }

      if(!noKeysCharEvents.includes(typeKey)) {
        return keyEvents[typeKey]
          ? keyEvents[typeKey](input)
          : this.insertAtCaretEvent(input, typeKey)
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
