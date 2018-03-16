import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { PacientComponent } from './pacient.component';


const AppRoutes: Routes = [
    { path: 'pacients', component: PacientComponent },
];

@NgModule({
    imports: [
      RouterModule.forChild(AppRoutes)
    ],
    exports: [
      RouterModule
    ]
})

export class PacientRoutingModule{ }
