import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DarkmodeComponent } from '../../components/darkmode/darkmode.component';
import { ProfileComponent } from '../../components/profile/profile.component';

@NgModule({
  declarations: [
    DarkmodeComponent,
    ProfileComponent
  ],
  exports: [
    DarkmodeComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
