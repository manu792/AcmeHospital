import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { EditPacientById } from './edit.pacient.component';
import { NotFoundComponent } from './edit.pacient.notfound.component';

export const ChildRoutes: Routes = [
    { path: 'editpacient/:pacientId', component: EditPacientById},
    { path: 'notfound', component: NotFoundComponent}
];

@NgModule({
    declarations:[
      NotFoundComponent
    ],
    imports: [
      RouterModule.forChild(ChildRoutes)
    ],
    exports: [
      RouterModule
    ]
  })
  export class EditPacientRoutingModule{ }
