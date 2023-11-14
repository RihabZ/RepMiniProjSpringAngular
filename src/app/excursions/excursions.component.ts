import { Component, OnInit } from '@angular/core';
import { Excursion } from '../model/excursion.model';
import { ExcursionService } from '../services/excursion.service';
import { AddExcursionComponent } from '../add-excursion/add-excursion.component';
import { ActivatedRoute , Router} from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-excursions',
  templateUrl: './excursions.component.html',
  styleUrls: ['./excursions.component.css']
})
export class ExcursionsComponent implements OnInit {

  excursions: Excursion[]=[];

  constructor(private excursionService : ExcursionService,  public authService: AuthService)  {
    //this.excursions = excursionService.listeExcursions();
  }

  ngOnInit(): void {
    
    this.chargerExcursions();

  }
  chargerExcursions(){
    this.excursionService.listeExcursion().subscribe(ex => {
    console.log(ex);
    this.excursions = ex;
    });
    }
    
  
    supprimerExcursion(e: Excursion)
    {
    let conf = confirm("Etes-vous sûr ?");
   
    if (conf==true)
        this.excursionService.supprimerExcursion(e.idExcursion!).subscribe(() => {
          console.log("excursion supprimée");
            this.chargerExcursions();
               // this.router.navigate(['excursions']);
    });
    } 




  }