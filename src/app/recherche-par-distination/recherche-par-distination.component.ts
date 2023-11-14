import { Component, OnInit } from '@angular/core';
import { ExcursionService } from '../services/excursion.service';
import { Excursion } from '../model/excursion.model';

@Component({
  selector: 'app-recherche-par-distination',
  templateUrl: './recherche-par-distination.component.html',
  styleUrls: ['./recherche-par-distination.component.css']
})
export class RechercheParDistinationComponent implements OnInit {
  distinationExcursion: string = '';
  excursions: Excursion[] = [];
  allExcursions! : Excursion[];
searchTerm!: string;

  constructor(private excursionService: ExcursionService) {}

  rechercherExs() {
    this.excursionService.rechercherParDistination(this.distinationExcursion)
      .subscribe(exs => {
        if (exs && Array.isArray(exs)) {
          this.excursions = exs;
        } else {
          console.error("La réponse du service n'est pas un tableau valide d'excursions.");
        }
      });
  }

  ngOnInit(): void {
    this.excursionService.listeExcursion().subscribe(exs => {
      console.log(exs);
      this.excursions! = exs;
      });
  }

  onKeyUp(filterText : string){
    this.excursions = this.allExcursions.filter(item =>
    item.distinationExcursion!.toLowerCase().includes(filterText));
    }





}
