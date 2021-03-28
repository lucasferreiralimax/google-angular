import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.scss']
})
export class NotfoundComponent implements OnInit, OnDestroy {

  root = (<any>window);
  url = this.root.location.pathname;

  constructor() { }

  ngOnInit(): void {
    this.root.document.body.classList.add('notfound');
  }

  ngOnDestroy(): void {
    this.root.document.body.classList.remove('notfound');
  }

}
