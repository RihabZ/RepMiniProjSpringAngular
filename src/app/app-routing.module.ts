import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExcursionsComponent } from './excursions/excursions.component';
import { AddExcursionComponent } from './add-excursion/add-excursion.component';
import { UpdateExcursionComponent } from './update-excursion/update-excursion.component';
import { RechercheParTypeComponent } from './recherche-par-type/recherche-par-type.component';
import { RechercheParDistinationComponent } from './recherche-par-distination/recherche-par-distination.component';
import { ListeTypesComponent } from './liste-types/liste-types.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
const routes: Routes = [
  {path: "excursions", component : ExcursionsComponent},
  {path: "add-excursion", component : AddExcursionComponent},
  {path: "updateExcursion/:id", component: UpdateExcursionComponent},
  {path: "rechercheParType", component : RechercheParTypeComponent},
  {path: "rechercheParDistination", component : RechercheParDistinationComponent},
  {path: "listeTypes", component : ListeTypesComponent},
  {path: 'app-forbidden', component: ForbiddenComponent},
  {path: 'login', component: LoginComponent},

  { path: "", redirectTo: "excursions", pathMatch: "full" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
