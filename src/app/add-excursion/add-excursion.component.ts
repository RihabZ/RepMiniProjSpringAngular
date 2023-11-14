import { Component, OnInit} from '@angular/core';
import { Excursion } from '../model/excursion.model';
import { ExcursionService } from '../services/excursion.service';
import { Type } from '../model/type.model';
import { ActivatedRoute , Router} from '@angular/router';
@Component({
  selector: 'app-add-excursion',
  templateUrl: './add-excursion.component.html',
  styleUrls: ['./add-excursion.component.css']
})
export class AddExcursionComponent implements   OnInit{

  newExcursion=new Excursion();

  types! : Type[];
  newIdType! : number;
  newType! : Type;
  message?: string;
            constructor(private excursionService : ExcursionService,
            private router :Router) { }


            ngOnInit(): void {
              this.excursionService.listeTypes().subscribe(types => {console.log(types);
                this.types = types._embedded.types;
                
                
              });
              }
              
            addExcursion(){
              this.newExcursion.type = this.types.find(type => type.idType == this.newIdType)!;
                  this.excursionService.ajouterExcursion(this.newExcursion)
                .subscribe(ex => {
                              console.log(ex);
                              this.message= " Excursion " +this.newExcursion.distinationExcursion +"Your message has been successfully sent !"
                              this.router.navigate(['excursions']);
});
}
               
           
            
            
}  