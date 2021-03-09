import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { SearchComponent } from '../../components/search/search.component';
import { HeaderComponent } from '../../components/header/header.component';

@NgModule({
  declarations: [
    HomeComponent,
    SearchComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
