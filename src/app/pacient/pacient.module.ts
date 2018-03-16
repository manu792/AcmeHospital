import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular/main';
import { PacientComponent } from './pacient.component';
import { PacientRoutingModule } from './pacient.routing.module';
import { EditPacientButtonComponent } from './pacient.edit.button.component';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PacientComponent,
    EditPacientButtonComponent
  ],
  imports: [
    FormsModule,
    PacientRoutingModule,
    SharedModule,
    AgGridModule.withComponents([])
  ],
  providers: [

  ]
})
export class PacientModule { }