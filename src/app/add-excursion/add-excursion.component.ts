import { Component, OnInit} from '@angular/core';
import { Excursion } from '../model/excursion.model';
import { ExcursionService } from '../services/excursion.service';
import { Type } from '../model/type.model';
import { ActivatedRoute , Router} from '@angular/router';
import {Image} from '../model/image.model';
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

  uploadedImage!: File;
    imagePath: any;

 constructor(private excursionService : ExcursionService,
            private router :Router) { }


            ngOnInit(): void {
              this.excursionService.listeTypes().subscribe(types => {console.log(types);
                this.types = types._embedded.types;
                
                
              });
              }
              
         /*   addExcursion(){
              this.newExcursion.type = this.types.find(type => type.idType == this.newIdType)!;
                  this.excursionService.ajouterExcursion(this.newExcursion)
                .subscribe(ex => {
                              console.log(ex);
                              this.message= " Excursion " +this.newExcursion.distinationExcursion +"Your message has been successfully sent !"
                              this.router.navigate(['excursions']);
});
}
           */
        
addExcursion() {
  this.newExcursion.type = this.types.find(type => type.idType == this.newIdType)!;
  
  this.excursionService.ajouterExcursion(this.newExcursion).subscribe((ex) => {
    if (ex.idExcursion !== undefined) { // Vérification que idExcursion n'est pas undefined
      this.excursionService
        .uploadImageFS(this.uploadedImage, this.uploadedImage.name, ex.idExcursion)
        .subscribe((response: any) => {
          // Traitement après le chargement de l'image
        });
      this.router.navigate(['excursions']);
    }
  });
}

/*
addExcursion() {

  this.excursionService
  .uploadImageFS(this.uploadedImage, this.uploadedImage.name, ex.idExcursion)
  .subscribe((img: Image) => {
  this.newExcursion.image=img;
  this.newExcursion.type= this.types.find(type => type.idType == this.newIdType)!;
  this.excursionService
  .ajouterExcursion(this.newExcursion)
  this.router.navigate(['excursions']);
  });
  
}
*/
onImageUpload(event: any) {
     this.uploadedImage = event.target.files[0];
  var reader = new FileReader();// pour lire l'image à partir de uploadimage
             reader.readAsDataURL(this.uploadedImage);// afecter à image path
             reader.onload = (_event) => { this.imagePath = reader.result; }// imagepath buiding relier  avec l'iamge que je vais utiliser pour visualiser 
  }
    
            
            
}  