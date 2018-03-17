import { Component, OnInit } from "@angular/core";
import { PacientService } from "../services/pacient.service";
import { GridOptions } from "ag-grid";
import { IPacient } from "../models/pacient";
import { EditPacientButtonComponent } from "./pacient.edit.button.component";
import { NgForm } from "@angular/forms";

@Component({
    selector: 'pacient-comp',
    templateUrl: './pacient.component.html',
    styleUrls: ['./pacient.component.css'],
    entryComponents:[
        EditPacientButtonComponent
    ]
})
export class PacientComponent implements OnInit { 
    private gridOptions;
    private columnDefs;
    private pacients: IPacient[];
    public pacient: IPacient;

    constructor(private pacientService: PacientService){
        this.gridOptions = <GridOptions>{
            animateRows: true,
            rowSelection: 'multiple',
            onGridReady: () => {
                this.gridOptions.api.sizeColumnsToFit();
            },
            context: {
                componentParent: this
            }
        };

        this.columnDefs = [
            {headerName: "Paciente Id", field: "pacientId", width: 600},
            {headerName: "First Name", field: "firstName", width: 600},
            {headerName: "Last Name", field: "lastName", width: 600},
            {headerName: "Title", field: "title", width: 600},
            {headerName: "Job", field: "job", width: 700},
            {headerName: 'Options', cellRendererFramework: EditPacientButtonComponent, width: 600}
        ];
    }

    ngOnInit(): void {
        this.getPacients();
    }

    getPacients(){
        this.pacientService.getPacients().subscribe(pacients => this.pacients = pacients, error => this.handleError(error));
        console.log(this.pacients);
    }

    addPacient(f: NgForm) : void {
        if(f.valid){
            console.log(f.value);
            let pacient = f.value;

            this.pacientService.addPacient(pacient);

            f.reset();
            this.refreshData();
        }
    }

    refreshData(){
        this.gridOptions.api.setRowData(this.gridOptions.rowData);
    }

    onFilterTextChanged(event) {
        let text = event.target.value;
        this.gridOptions.api.setQuickFilter(text);
    }

    private handleError(error: string) {
        alert(error);
    }
}