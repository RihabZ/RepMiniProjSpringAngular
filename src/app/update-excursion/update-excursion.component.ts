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
                  
                  
    /*              
      ngOnInit(): void {
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
       /* hedhy jdida mt3 tp ana bedltha beli ta7tha mn heithem
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
                    
                      this.excursionService.consulterExcursion(excursionId).subscribe(ex => {
                        this.currentExcursion = ex;
                        this.updatedTypeId = ex.type?.idType;
                        if (this.currentExcursion && this.currentExcursion.image && this.currentExcursion.image.idImage) {
                          this.excursionService
                            .loadImage(this.currentExcursion.image.idImage)
                            .subscribe((img: Image) => {
                              this.myImage = 'data:' + img.type + ';base64,' + img.image;
                            });
                        }
                      });
                    }
                    
      //  this.updatedTypeId = this.currentExcursion.type?.idType ;

       
      //}  );
    //}
    
    
  
 /*
  ngOnInit(): void {
    this.excursionService.listeTypes()
      .subscribe(types => {
        this.types = types._embedded.types;
      });
  
    this.excursionService.consulterExcursion(this.activatedRoute.snapshot.params['id'])
      .subscribe(ex => {
        this.currentExcursion = ex;
  
        // Vérifier si 'type' est défini avant d'accéder à 'idType'
        if (ex.type) {
          this.updatedTypeId = ex.type.idType;
        } else {
          // Gérer le cas où 'type' est indéfini
          console.error("Type is undefined in the current excursion.");
          // Vous pouvez définir une valeur par défaut ou prendre une autre action appropriée ici.
        }
      });
    }
      */
  
  




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
/*
onAddImageExcursion() {
  this.excursionService
    .uploadImageEx(this.uploadedImage, this.uploadedImage.name, this.updatedTypeId = this.currentExcursion?.type?.idType || 0)
    .subscribe((img: Image) => {
      if (this.currentExcursion) {
        // Vérifiez si 'images' est défini, sinon initialisez-le
        if (!this.currentExcursion.images) {
          this.currentExcursion.images = [];
        }
        this.currentExcursion.images.push(img);
      }
    });
}

*/
                    


onImageUpload(event: any) {
  if(event.target.files && event.target.files.length) {
  this.uploadedImage = event.target.files[0];
  this.isImageUpdated =true;
  const reader = new FileReader();
  reader.readAsDataURL(this.uploadedImage);
  reader.onload = () => { this.myImage = reader.result as string; };
  }
  }                 
  
//hedhya commtitha tw
/*updateExcursion(): void {
   // Vérifiez si 'this.currentExcursion' est défini
   if (!this.currentExcursion) {
    console.error("L'excursion actuelle est undefined.");
    // Gérer le cas où 'this.currentExcursion' est indéfini
    return;
  }

  // Assurez-vous que 'this.updatedTypeId' est défini
  if (this.updatedTypeId === undefined) {
    console.error("L'ID du type mis à jour est undefined.");
    // Gérer le cas où 'this.updatedTypeId' est indéfini
    return;
  }

  // Mettez à jour le type de l'excursion
      this.currentExcursion.type = this.types.find(type => type.idType ==
      this.updatedTypeId)!;
       // Vérifiez si l'image est mise à jour
  if (this.isImageUpdated) {
    this.excursionService.uploadImage(this.uploadedImage, this.uploadedImage.name)
      .subscribe((img: Image) => {

        // Assurez-vous que 'this.currentExcursion' est défini
        if (!this.currentExcursion) {
          console.error("L'excursion actuelle est undefined après la mise à jour de l'image.");
          // Gérer le cas où 'this.currentExcursion' est indéfini après la mise à jour de l'image
          return;
        }
        this.currentExcursion.image = img;
          // Mettez à jour l'excursion après la mise à jour de l'image
      this.excursionService
      .updateExcursion(this.currentExcursion)
      .subscribe((ex) => {
      this.router.navigate(['excursions']);
      });
    });
  }
  else{// Mettez à jour l'excursion si l'image n'est pas mise à jour
 this.excursionService.updateExcursion(this.currentExcursion).subscribe(ex => {
       this.router.navigate(['excursions']); 
      });
    }
  }
*/
/* //a5er wa7da commentitha
updateExcursion(): void {
  // Vérifiez si 'this.currentExcursion' est défini
  if (!this.currentExcursion) {
    console.error("L'excursion actuelle est undefined.");
    // Gérer le cas où 'this.currentExcursion' est indéfini
    return;
  }

  // Assurez-vous que 'this.updatedTypeId' est défini
  if (this.updatedTypeId === undefined) {
    console.error("L'ID du type mis à jour est undefined.");
    // Gérer le cas où 'this.updatedTypeId' est indéfini
    return;
  }

  // Mettez à jour le type de l'excursion
  this.currentExcursion.type = this.types.find(type => type.idType == this.updatedTypeId);

  // Vérifiez si 'this.currentExcursion.type' est défini
  if (!this.currentExcursion.type) {
    console.error("Le type de l'excursion est undefined.");
    // Gérer le cas où 'this.currentExcursion.type' est indéfini
    return;
  }

  // Mettez à jour l'excursion
  this.excursionService.updateExcursion(this.currentExcursion).subscribe(marque => {
    this.router.navigate(['excursions']);
  });

  // Vérifiez si l'image est mise à jour
  if (this.isImageUpdated) {
    this.excursionService.uploadImage(this.uploadedImage, this.uploadedImage.name)
      .subscribe((img: Image) => {
        // Assurez-vous que 'this.currentExcursion' est défini
        if (!this.currentExcursion) {
          console.error("L'excursion actuelle est undefined après la mise à jour de l'image.");
          // Gérer le cas où 'this.currentExcursion' est indéfini après la mise à jour de l'image
          return;
        }

        this.currentExcursion.image = img;

        // Mettez à jour l'excursion après la mise à jour de l'image
        this.excursionService.updateExcursion(this.currentExcursion).subscribe((ex) => {
          this.router.navigate(['excursions']);
        });
      });
  } else {
    // Mettez à jour l'excursion si l'image n'est pas mise à jour
    this.excursionService.updateExcursion(this.currentExcursion).subscribe((ex) => {
      this.router.navigate(['excursions']);
    });
  }
}

*/


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
//mr
  updateExcursion(): void {

    this.currentExcursion.type = this.types.find(type => type.idType == this.updatedTypeId);
    if (this.currentExcursion.type) {
      this.excursionService.updateExcursion(this.currentExcursion).subscribe(excursion => {
        this.router.navigate(['excursions']);
      });
      if (this.isImageUpdated) {
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
      else {
        this.excursionService
          .updateExcursion(this.currentExcursion)
          .subscribe((ex) => {
            this.router.navigate(['excursion']);
          });
      }

    }
  }












}







