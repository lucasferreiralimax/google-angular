import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../../modules/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { HomeComponent } from './home.component';
import { SearchComponent } from '../../components/search/search.component';
import { HeaderComponent } from '../../components/header/header.component';
import { KeyboardComponent } from '../../components/keyboard/keyboard.component';
import { VoiceComponent } from '../../components/voice/voice.component';

@NgModule({
  declarations: [
    HomeComponent,
    SearchComponent,
    HeaderComponent,
    KeyboardComponent,
    VoiceComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule
  ]
})
export class HomeModule { }
