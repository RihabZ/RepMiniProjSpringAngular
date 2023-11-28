import { Component, OnInit} from '@angular/core';
import { Excursion } from '../model/excursion.model';
import { Type } from '../model/type.model';
import { ExcursionService } from '../services/excursion.service';
@Component({
  selector: 'app-recherche-par-type',
  templateUrl: './recherche-par-type.component.html',
  styleUrls: ['./recherche-par-type.component.css']
})
export class RechercheParTypeComponent implements OnInit{
  excursions! : Excursion[];
  idType! : number;
  types! : Type[];

    constructor(private excursionService:ExcursionService)
    {}

    ngOnInit(): void {
      this.excursionService.listeTypes().
      subscribe(types => {this.types = types._embedded.types;
      console.log(types);
      });
      }
      


      onChange() {
        this.excursionService.rechercherParType(this.idType).subscribe(exs => {
          if (exs && Array.isArray(exs)) {
              this.excursions=exs as Excursion[];
          } else {
              // Gérez le cas où la réponse n'est pas conforme à ce que vous attendez
              console.error("La réponse du service n'est pas un tableau valide d'excursions.");
          }
      });
      
}



}