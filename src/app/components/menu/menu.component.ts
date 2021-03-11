import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  root = (<any>window).document.body;
  menu: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  handleMenu(type: boolean): void {
    this.menu = type;
    if(type) {
      this.root.style.overflow = 'hidden'
    } else {
      this.root.removeAttribute('style')
    }
  }

}
