import { Component, OnInit } from '@angular/core';
import { Type } from '../model/type.model';
import { ExcursionService } from '../services/excursion.service';

@Component({
  selector: 'app-liste-types',
  templateUrl: './liste-types.component.html',
  styleUrls: ['./liste-types.component.css']
})
export class ListeTypesComponent implements OnInit {
  types!: Type[];
  updatedType: Type = { "idType": 0, "nomType": "" };
  ajout:boolean=true;
  constructor(private excursionService: ExcursionService) { }

  ngOnInit(): void {
    this.excursionService.listeTypes().subscribe(types => {
      this.types = types._embedded.types;
      console.log(types);
    });
  }

  typeUpdated(type: Type) {
    console.log("Type updated event", type);
    this.excursionService.ajouterType(type).subscribe(() => this.chargerTypes());
  }


  
  chargerTypes() {
    this.excursionService.listeTypes().subscribe(types => {
      this.types = types._embedded.types;
      console.log(types);
    });
  }

  updateType(type:Type) {
    this.updatedType=type;
    this.ajout=false;
    }
    




}




