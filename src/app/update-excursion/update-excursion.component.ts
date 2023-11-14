import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { ExcursionService } from '../services/excursion.service';
import { Excursion } from '../model/excursion.model';
import { Type } from '../model/type.model';

@Component({
  selector: 'app-update-excursion',
  templateUrl: './update-excursion.component.html',
  styleUrls: ['./update-excursion.component.css']
})
export class UpdateExcursionComponent {
  currentExcursion= new Excursion();
  types! : Type[];
  updatedTypeId! : number| undefined;
  constructor(private activatedRoute: ActivatedRoute,
                private router :Router,

                    private excursionService: ExcursionService) { }

  ngOnInit(): void {
    this.excursionService.listeTypes().
     subscribe(types => {console.log(types);
      this.types = types._embedded.types;
      
      
                        });
          this.excursionService.consulterExcursion(this.activatedRoute.snapshot.params['id'])
          .subscribe( ex =>{ this.currentExcursion = ex;
             this.updatedTypeId = this.currentExcursion.type?.idType;
                        } ) ;
   }
                
                        
   updateExcursion() {
   this.currentExcursion.type = this.types.find(type => type.idType == this.updatedTypeId)!;
     this.excursionService.updateExcursion(this.currentExcursion).subscribe(ex => {
         this.router.navigate(['excursions']); }
                          );
                          }
                               
            
            
            
            
                                  
                    




                        }


