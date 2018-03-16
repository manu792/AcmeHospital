import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { PacientComponent } from './pacient/pacient.component';
import { AppComponent } from './app.component';

const AppRoutes: Routes = [
    { path: '', redirectTo: 'pacients', pathMatch: 'full' },
    { path: '**', redirectTo: 'pacients', pathMatch: 'full' }
];

@NgModule({
    imports: [
      RouterModule.forRoot(AppRoutes, { enableTracing: true }) // <-- debugging purposes only
    ],
    exports: [
      RouterModule
    ]
})

export class AppRoutingModule{ }
