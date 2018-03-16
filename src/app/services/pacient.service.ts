import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { IPacient } from '../models/pacient';

@Injectable()
export class PacientService {
    private static pacients: IPacient[] = [
        { 
            pacientId: 1, 
            firstName: 'Manuel',
            lastName: 'Roman', 
            title: 'Mr', 
            job: 'Software Developer',
            medications: [
                {
                    medicationId: 1,
                    name: 'Salbutamol',
                    quantity: 2,
                    startDate: new Date().toDateString(),
                    endDate: new Date(new Date().getDay() + 10).toDateString()
                },
                {
                    medicationId: 3,
                    name: 'Alegro',
                    quantity: 15,
                    startDate: new Date().toDateString(),
                    endDate: new Date(new Date().getDay() + 10).toDateString()
                },
                {
                    medicationId: 4,
                    name: 'Medrol',
                    quantity: 15,
                    startDate: new Date().toDateString(),
                    endDate: new Date(new Date().getDay() + 10).toDateString()
                }
            ]
        },
        {
            pacientId: 2, 
            firstName: 'Mauricio', 
            lastName: 'Vargas', 
            title: 'Sr', 
            job: 'Software Developer',
            medications:[
                {
                    medicationId: 2,
                    name: 'Natela',
                    quantity: 20,
                    startDate: new Date().toDateString(),
                    endDate: new Date(new Date().getDay() + 10).toDateString()
                },
                {
                    medicationId: 10,
                    name: 'Tabcin',
                    quantity: 10,
                    startDate: new Date().toDateString(),
                    endDate: new Date(new Date().getDay() + 10).toDateString()
                },
                {
                    medicationId: 11,
                    name: 'Hiboprufeno',
                    quantity: 8,
                    startDate: new Date().toDateString(),
                    endDate: new Date(new Date().getDay() + 10).toDateString()
                }
            ]
        },
        {
            pacientId: 3, 
            firstName: 'Fernando', 
            lastName: 'Roman', 
            title: 'Sr', 
            job: 'Electricist',
            medications:[
                {
                    medicationId: 10,
                    name: 'Tabcin',
                    quantity: 10,
                    startDate: new Date().toDateString(),
                    endDate: new Date(new Date().getDay() + 10).toDateString()
                }
            ]

        },
        {
            pacientId: 4, 
            firstName: 'Ramon', 
            lastName: 'Figuerez', 
            title: 'Mr', 
            job: 'Business Analyst',
            medications:[

            ]
        }
    ];
    addPacient(pacient: IPacient): void {
        PacientService.pacients.push(pacient);
    }
    
    // returns all pacients in the data store
    getPacients() : Observable<IPacient[]> {
        let pacients = this.getFakePacients();
        return Observable.of(pacients);
    }

    getPacientById(pacientId: number): Observable<IPacient>{
        let pacient = this.getFakePacients().find(p => p.pacientId == pacientId);
        return Observable.of(pacient);
    }

    updatePacient(pacient: IPacient): void{
        let pacientToUpdate = null;
        this.getPacientById(pacient.pacientId).subscribe(pacient => pacientToUpdate = pacient);
        
        if(pacientToUpdate){
            PacientService.pacients.forEach(p => {
                if(p.pacientId == pacient.pacientId) {
                    p.pacientId = pacient.pacientId;
                    p.firstName = pacient.firstName;
                    p.lastName = pacient.lastName;
                    p.title = pacient.title;
                    p.job = pacient.job;
                }
            });
        }
    }
    
    private getFakePacients() : IPacient[] {
        return PacientService.pacients;
    }
}
