import { IMedication } from "./medication";

export interface IPacient{
    pacientId: number;
    firstName: string;
    lastName: string;
    title: string;
    job: string;
    medications: IMedication[];
}