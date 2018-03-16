import {Component} from "@angular/core";
import {ICellRendererAngularComp} from "ag-grid-angular";
import { Router } from "@angular/router";
import { IPacient } from "../models/pacient";

@Component({
    selector: 'options-cell',
    template: `
                <span><button style="height: 20px" (click)="editPacient()">Edit</button></span>
                <span><button style="height: 20px" (click)="removePacient()">Remove</button></span>
               `
})
export class EditPacientButtonComponent implements ICellRendererAngularComp {
    private params: any;

    constructor(private router: Router){

    }

    agInit(params: any): void {
        this.params = params;
    }

    public addPacient(){
        let newPacient: IPacient = {
            pacientId: 200,
            firstName: 'Test',
            lastName: 'Test',
            title: 'Test',
            job: 'Test',
            medications: [

            ]
        }
        this.params.context.componentParent.addPacient(newPacient);
    }

    public editPacient() {
        console.log('Pacient to be edited: ' + this.params.data);
        this.router.navigate(['/editpacient/', this.params.data.pacientId]);
    }

    public removePacient(){
        console.log('Pacient to be removed: ' + this.params.data);
        this.params.node.setSelected(true, true);
        var selectedData = this.params.api.getSelectedRows();
        var res = this.params.api.updateRowData({remove: selectedData});
    }

    refresh(): boolean {
        return false;
    }
}