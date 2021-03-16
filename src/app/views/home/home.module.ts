import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../../modules/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';
import { SearchComponent } from '../../components/search/search.component';
import { HeaderComponent } from '../../components/header/header.component';
import { KeyboardComponent } from '../../components/keyboard/keyboard.component';

@NgModule({
  declarations: [
    HomeComponent,
    SearchComponent,
    HeaderComponent,
    KeyboardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
