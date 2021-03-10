import { Component } from '@angular/core';

import { DarkmodeService } from './services/darkmode.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private darkmodeService: DarkmodeService) { }

  ngOnInit(): void {
    let darkStorage = localStorage.getItem("dark")

    if(darkStorage) {
      this.darkmodeService.darkMode(JSON.parse(darkStorage))
    } else {
      localStorage.setItem("dark", JSON.stringify(false))
    }
  }
}
