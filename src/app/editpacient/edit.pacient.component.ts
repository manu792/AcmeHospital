import { Component, OnInit } from "@angular/core";
import { PacientService } from "../services/pacient.service";
import { GridOptions } from "ag-grid";
import { IPacient } from "../models/pacient";
import { ActivatedRoute, Router } from "@angular/router";
import { IMedication } from "../models/medication";
import { NgForm } from "@angular/forms";

@Component({
    selector: 'edit-pacient-comp',
    templateUrl: './edit.pacient.component.html',
    styleUrls: ['./edit.pacient.component.css'],
})
export class EditPacientById implements OnInit { 
    private pacientId: number;
    private gridOptions;
    private columnDefs;
    private pacient: IPacient;
    private medications: IMedication[];

    private componentName: string = 'Edit Pacient Component';

    constructor(private router: Router, private activatedRoute: ActivatedRoute, private pacientService: PacientService) {
        this.gridOptions = <GridOptions>{
            onGridReady: () => {
                this.gridOptions.api.sizeColumnsToFit();
            }
        };

        this.columnDefs = [
            {headerName: "Medication Id", field: "medicationId"},
            {headerName: "Name", field: "name"},
            {headerName: "Quantity", field: "quantity"},
            {headerName: "Start Date", field: "startDate"},
            {headerName: "End Date", field: "endDate"}
        ];
    }

    ngOnInit(): void {
        let t = this.activatedRoute.params.subscribe(params => this.pacientId = +params['pacientId']);
        this.pacientService.getPacientById(this.pacientId || 0).subscribe(p => this.pacient = p);
        if(!this.pacient){
            this.router.navigate(['/notfound']);
        } else {
            this.medications = this.pacient.medications;
        }
    }

    updatePacient(f: NgForm){
        // Here goes the logic for updating the pacient information in the DB
        console.log(f.value);
        this.pacientService.updatePacient(f.value);
    }
}