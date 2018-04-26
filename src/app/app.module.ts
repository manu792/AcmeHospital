import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { PacientService } from './services/pacient.service';
import { RouterModule } from '@angular/router';
import { PacientModule } from './pacient/pacient.module';
import { EditPacientModule } from './editpacient/edit.pacient.module';
import { AppRoutingModule } from './app.routing.module';
import { FormsModule } from '@angular/forms';
import {AgGridModule} from "ag-grid-angular/main";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    PacientModule,
    EditPacientModule,
    AppRoutingModule
  ],
  providers: [
    PacientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }



