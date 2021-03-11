import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigRoutingModule } from './config-routing.module';
import { SharedModule } from '../../modules/shared/shared.module';
import { ConfigComponent } from './config.component';


@NgModule({
  declarations: [ConfigComponent],
  imports: [
    CommonModule,
    ConfigRoutingModule,
    SharedModule
  ]
})
export class ConfigModule { }
