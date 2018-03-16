import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ModalComponent } from './modals/modal.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
      HeaderComponent,
      ModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent,
    ModalComponent
  ]
})
export class SharedModule { }



