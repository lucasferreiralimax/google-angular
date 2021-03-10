import { Component, OnInit, Input } from '@angular/core';

import { DarkmodeService } from '../../services/darkmode.service'

@Component({
  selector: 'app-darkmode',
  templateUrl: './darkmode.component.html',
  styleUrls: ['./darkmode.component.scss']
})
export class DarkmodeComponent implements OnInit {

  @Input() footer: any;
  dark = false;

  constructor(private darkmodeService: DarkmodeService) { }


  ngOnInit(): void {
    this.dark = this.darkmodeService.getDarkMode()
  }

  darkMode (type: boolean) {
    this.darkmodeService.darkMode(!type)
    this.dark = this.darkmodeService.getDarkMode()
  }

}
