import { Type } from "./type.model";

export class Excursion {
    idExcursion? : number;
    distinationExcursion? : string;
    prixExcursion? : number;
    dateExcursion? : Date ;
    heureDepart?: string;
    heureRetour?: string;
	lieuDepart?: string;
    description?:string;
    type?:Type
	
}