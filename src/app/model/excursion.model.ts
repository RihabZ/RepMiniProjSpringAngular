import { Type } from "./type.model";
import { Image } from "./image.model";
export class Excursion {
    idExcursion? : number;
    distinationExcursion? : string;
    prixExcursion? : number;
    dateExcursion? : Date ;
    heureDepart?: string;
    heureRetour?: string;
	lieuDepart?: string;
    description?:string;
    type?:Type;
    image? : Image;
    imageStr?:string;
    images?: Image[];
	
}