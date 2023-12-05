import { Component, OnInit } from '@angular/core';
import { Excursion } from '../model/excursion.model';
import { ExcursionService } from '../services/excursion.service';
import { AddExcursionComponent } from '../add-excursion/add-excursion.component';
import { ActivatedRoute , Router} from '@angular/router';
import { AuthService } from '../services/auth.service';
import{Image} from '../model/image.model';
import { forkJoin } from 'rxjs';
@Component({
  selector: 'app-excursions',
  templateUrl: './excursions.component.html',
  styleUrls: ['./excursions.component.css']
})
export class ExcursionsComponent implements OnInit {

  apiurl:string='http://localhost:8086/excursions/api';

  excursions: Excursion[]=[];

  constructor(private excursionService : ExcursionService,  public authService: AuthService)  {
    //this.excursions = excursionService.listeExcursions();
  }

  ngOnInit(): void {
    
    this.chargerExcursions();

  }

  chargerExcursions() {
    this.excursionService.listeExcursion().subscribe(ex => {
      // console.log(ex);
      this.excursions = ex;
  
      this.excursions.forEach((ex) => {
        // Check if ex.image is defined before trying to access its properties
        if (ex.image) {
          this.excursionService
            .loadImage(ex.image.idImage)
            .subscribe((img: Image) => {
              // Use img instead of ex.images
              ex.imageStr = 'data:' + img.type + ';base64,' + img.image;
            });
        }
      });
    });
  }
  
 /*
  chargerExcursions(){
    this.excursionService.listeExcursion().subscribe(exs => {
    this.excursions = exs;
    });
    }
  */
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