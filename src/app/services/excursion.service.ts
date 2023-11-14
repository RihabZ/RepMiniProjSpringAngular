import { Injectable } from '@angular/core';
import { Excursion } from '../model/excursion.model';
import {Type} from  '../model/type.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiURL } from '../config';
import { TypeWrapper } from '../model/typeWrapped.model';


const  httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};
@Injectable({
        providedIn: 'root'
})

export class ExcursionService {

        apiURL: string = 'http://localhost:8086/excursions/api';
        apiURLCat: string = 'http://localhost:8086/excursions/type';
        excursions: Excursion[] =[]; 
        //types : Type[];
      
        constructor(private http : HttpClient) {
        }
       
  // this.types = [ {idType : 1, nomType : "Green Randoo"},
  //                {idType : 2, nomType : "Beach Party"}];
  /*
    this.excursions= [
      {idExcursion: 1, distinationExcursion: "Ain Drahemmm", prixExcursion: 55.5, dateExcursion: new Date(2023, 9, 21), heureDepart: "5H", heureRetour: "17H", lieuDepart: "Rond Point Bhar", description: "grimper des montagnes", type: {idType: 1, nomType: "Green Randoo"}},
      {idExcursion: 2, distinationExcursion: "Bizert", prixExcursion: 77.40, dateExcursion: new Date(2023, 7, 20), heureDepart: "6H", heureRetour: "20H", lieuDepart: "Rond Point Bhar", description: "Sport et danse sur mer y compris repat" , type: {idType: 2, nomType: "Beach Party"}},
      {idExcursion: 3, distinationExcursion: "Jerba", prixExcursion: 65.5, dateExcursion: new Date(2023, 11, 16), heureDepart: "5H", heureRetour: "21H", lieuDepart: "Rond Point Bhar", description: "inclue des photos et grimper des forets" , type: {idType: 1, nomType: "Green Randoo"}},
    ];*/
  

listeExcursion(): Observable<Excursion[]>
{

      return this.http.get<Excursion[]>(apiURL);
}

ajouterExcursion( ex: Excursion):Observable<Excursion>
{
  return this.http.post<Excursion>(apiURL, ex, httpOptions);
  }


  supprimerExcursion(id : number) {
    const url = `${apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
    }
    
    //ou Bien
    /* this.produits.forEach((cur, index) => {
    if(prod.idProduit === cur.idProduit) {
    this.produits.splice(index, 1);
    }
    }); */
    

    consulterExcursion(id: number): Observable<Excursion> {
      const url = `${apiURL}/${id}`;
      return this.http.get<Excursion>(url);
      }
      
      trierExcursions(){
        this.excursions = this.excursions.sort((n1,n2) => {
        if (n1.idExcursion! > n2.idExcursion!) {
            return 1;
        }
        if (n1.idExcursion! < n2.idExcursion!) {
            return -1;
        }
            return 0;
        });
        }


        updateExcursion(ex :Excursion) : Observable<Excursion>
        {
              return this.http.put<Excursion>(apiURL, ex, httpOptions);
        }
       
      //   consulterType(id:number): Type{
      //     return this.types.find(type => type.idType == id)!;
      //     }

      listeTypes():Observable<TypeWrapper>{
        return this.http.get<TypeWrapper>(this.apiURLCat);
        }



  rechercherParType(idType: number): Observable<Type[]> {
    const url = `${this.apiURL}/exstype/${idType}`;
    return this.http.get<Type[]>(url);
  }

  rechercherParDistination(distination: string): Observable<Excursion[]> {
    const url = `${this.apiURL}/exsByDistination/${distination}`; // Assurez-vous que le chemin est correct
    return this.http.get<Excursion[]>(url);
    }

    ajouterType( type: Type):Observable<Type>{
      return this.http.post<Type>(this.apiURLCat, type, httpOptions);
      }
      




}