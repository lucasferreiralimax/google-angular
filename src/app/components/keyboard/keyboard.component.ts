import { Component, OnChanges, OnDestroy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent implements OnChanges, OnDestroy {

  @Input() show: boolean = false;
  @Output() updateKeyboard = new EventEmitter<any>();
  root = (<any>window);
  width: number = 0;
  height: number = 0;
  translateX: string = '';
  translateY: string = '';
  holding: any = null;
  onDraggingFunctionRef: any = null;

  constructor() { }

  ngOnChanges(): void {
    window.addEventListener("resize", this.updateWidthAndHeight)
  }

  ngOnDestroy(): void {
    window.removeEventListener("resize", this.updateWidthAndHeight)
  }

  handleKeyboard(type: boolean) {
    this.updateKeyboard.emit(type);
  }

  updateWidthAndHeight() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.translateX = `${(this.width / 2) - 250}px`;
    this.show = (this.width > 900 && this.height > 400);
    if(this.width > 900 && this.height < 900) {
      this.translateY = `${this.height - 250}px`;
    }
  }

  onMouseDown() {
    this.holding = true;
    this.onDraggingFunctionRef = this.onMouseDragging();
    document.addEventListener('mousemove', this.onDraggingFunctionRef);
    document.addEventListener('mouseup', this._onMouseUp);
  }

  _onMouseUp() {
    this.holding = false;
    // wrapperRef.current.style.removeProperty('cursor')
    document.removeEventListener('mousemove', this.onDraggingFunctionRef);
    document.removeEventListener('mouseup', this._onMouseUp);
  }

  onMouseDragging() {
    return (e: any) => {
      if (this.holding) {
        // wrapperRef.current.style.setProperty('cursor', 'move')

        if((e.pageY - 20) > 2 && e.pageY < (window.innerHeight - 220)) {
          this.translateY = `${e.pageY - 20}px`;
        }
        if((e.pageX - 250) > 2 && e.pageX < window.innerWidth - 290) {
          this.translateX = `${e.pageX - 250}px`;
        }
      }
    }
  }
}
