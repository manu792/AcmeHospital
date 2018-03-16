import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EditPacientById } from './edit.pacient.component';
import { EditPacientRoutingModule } from './edit.pacient.routing.module';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  imports:[
    FormsModule,
    CommonModule,
    EditPacientRoutingModule,
    AgGridModule.withComponents([])
  ],
  declarations: [
    EditPacientById
  ]
})
export class EditPacientModule { }



