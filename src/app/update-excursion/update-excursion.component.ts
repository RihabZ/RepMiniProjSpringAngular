import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { ExcursionService } from '../services/excursion.service';
import { Excursion } from '../model/excursion.model';
import { Type } from '../model/type.model';
import {Image} from '../model/image.model';

@Component({
  selector: 'app-update-excursion',
  templateUrl: './update-excursion.component.html',
  styleUrls: ['./update-excursion.component.css']
})
export class UpdateExcursionComponent {
  currentExcursion= new Excursion();
  types! : Type[];
  updatedTypeId! : number| undefined;
  myImage! : string;
  uploadedImage!: File;
  isImageUpdated: Boolean=false;

  constructor(private activatedRoute: ActivatedRoute,
                private router :Router,

                    private excursionService: ExcursionService) { }
                  
                  
                  
      /*   ngOnInit(): void {
                this.excursionService.listeTypes().subscribe(types => {
                this.types = types._embedded.types;
                  console.log(types);
                      });
                    
              this.excursionService.consulterExcursion(this.activatedRoute.snapshot.params['id'])
                   .subscribe(ex => {
                    this.currentExcursion = ex;
                    
         if (this.currentExcursion && this.currentExcursion.type) {
                  this.updatedTypeId = this.currentExcursion.type.idType;
          } else {
                            // Gérez le cas où 'ex.type' est undefined
                            console.error("Le type de l'excursion est undefined.");
                   }
                    
           if (this.currentExcursion.image) {
                  this.excursionService.loadImage(this.currentExcursion.image.idImage)
                              .subscribe((img: Image) => {
                                this.myImage = 'data:' + img.type + ';base64,' + img.image;
                              });//img.type hya image jpeg w base64 keka syntaxe
         } else {
                            // Gérez le cas où l'image est undefined
                          
                            console.error("L'image de l'excursion est undefined.");
                }
                        });
                    }
        */
       /*
                    ngOnInit(): void {
                      this.excursionService.listeTypes().subscribe(types => {
                        this.types = types._embedded.types;
                      });
                    
                      this.excursionService.consulterExcursion(this.activatedRoute.snapshot.params['id']).subscribe(ex => {
                        this.currentExcursion = ex;
                        
                        if (ex.type) {
                          this.updatedTypeId = ex.type.idType;
                       
                       
                        } else {
                          // Gérer le cas où 'ex.type' est undefined
                          console.error("Le type de l'excursion est undefined.");
                        }
                      });
                    }
                 */        

                    ngOnInit() {
                      this.excursionService.listeTypes().subscribe(types => {
                        this.types = types._embedded.types;
                        console.log(types);
                      });
                    
                      const excursionId = this.activatedRoute.snapshot.params['id'];
                    
                      this.excursionService.consulterExcursion(excursionId).subscribe(marque => {
                        this.currentExcursion = marque;
                    
                        if (this.currentExcursion) {
                          this.updatedTypeId = this.currentExcursion.type?.idType || 0;
                    
                          if (this.currentExcursion.image) {
                            this.excursionService.loadImage(this.currentExcursion.image.idImage).subscribe((img: Image) => {
                              this.myImage = 'data:' + img.type + ';base64,' + img.image;
                            });
                          }
                        }
                      });
                    }
                    
/*
  onAddImageExcursion() {
    if (this.currentExcursion && this.currentExcursion.idExcursion !== undefined) {
      this.excursionService
       // .uploadImageEx(this.uploadedImage, this.uploadedImage.name, this.currentExcursion.idExcursion)
       .uploadImageEx(this.uploadedImage, this.uploadedImage.name,this.updatedTypeId= this.currentExcursion.type?.idType|| 0)
        .subscribe((img: Image) => {
          if (this.currentExcursion.images) {
            this.currentExcursion.images.push(img);
          } else {
            this.currentExcursion.images = [img];
          }
        });
    } else {
      console.error("L'excursion actuelle ou son identifiant est undefined.");
    }
  }
*/

onAddImageExcursion() {
  this.excursionService
    .uploadImageEx(this.uploadedImage, this.uploadedImage.name, this.updatedTypeId = this.currentExcursion.type?.idType || 0)
    .subscribe((img: Image) => {
      if (this.currentExcursion) {
        if (!this.currentExcursion.images) {
          this.currentExcursion.images = [];
        }
        this.currentExcursion.images.push(img);
      }
    });
}

                    


   onImageUpload(event: any) {
      if(event.target.files && event.target.files.length) {
      this.uploadedImage = event.target.files[0];
         this.isImageUpdated =true;
      const reader = new FileReader();
       reader.readAsDataURL(this.uploadedImage);
        reader.onload = () => { this.myImage = reader.result as string; };
                      }
                      }
  /*             
   updateExcursion() {
   this.currentExcursion.type = this.types.find(type => type.idType == this.updatedTypeId)!;
    //tester si l'image du produit a été modifiée

    if (this.isImageUpdated)
    {
    this.excursionService
    .uploadImage(this.uploadedImage, this.uploadedImage.name)
    .subscribe((img: Image) => {
    this.currentExcursion.image = img;
    this.excursionService
    .updateExcursion(this.currentExcursion)
    .subscribe((ex) => {
    this.router.navigate(['excursions']);
    });
    });
    }
    else{
   this.excursionService.updateExcursion(this.currentExcursion).subscribe(ex => {
         this.router.navigate(['excursions']); 
        });
      }
    }*/

  /*  updateExcursion() {
      this.currentExcursion.type = this.types.find(type => type.idType ==
      this.updatedTypeId)!;
      this.excursionService
      .updateExcursion(this.currentExcursion)
      .subscribe((ex) => {
      this.router.navigate(['excursions']);
      });
      }
*/

updateExcursion(): void {
  this.currentExcursion.type = this.types.find(type => type.idType == this.updatedTypeId)!;
  if (this.currentExcursion.type) {
    this.excursionService.updateExcursion(this.currentExcursion).subscribe(marque => {
      this.router.navigate(['excursions']);
    });
    if (this.isImageUpdated)
{this.excursionService
.uploadImage(this.uploadedImage, this.uploadedImage.name)
.subscribe((img: Image) => {
this.currentExcursion.image = img;
this.excursionService
.updateExcursion(this.currentExcursion)
.subscribe((ex) => {
  this.router.navigate(['excursions']);
});
});
}
else{
this.excursionService
.updateExcursion(this.currentExcursion)
.subscribe((ex) => {
  this.router.navigate(['excursions']);
});
}

  }
}



      supprimerImage(img: Image) {
        let conf = confirm("Etes-vous sûr ?");
        if (conf) {
          this.excursionService.supprimerImage(img.idImage).subscribe(() => {
            //supprimer image du tableau currentProduit.images
            if (this.currentExcursion && this.currentExcursion.images) {
              const index = this.currentExcursion.images.indexOf(img, 0);
              if (index > -1) {
                this.currentExcursion.images.splice(index, 1);
              }
            }
          });
        } else {
          console.error("L'excursion actuelle est undefined.");
        }
        















        
      }
      






  }