import { Component, Input } from '@angular/core';

import { DarkmodeService } from '../../services/darkmode.service'

@Component({
  selector: 'app-darkmode',
  templateUrl: './darkmode.component.html',
  styleUrls: ['./darkmode.component.scss']
})
export class DarkmodeComponent {

  @Input() footer: any;

  constructor(public dark: DarkmodeService) { }

}
