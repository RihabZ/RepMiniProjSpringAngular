import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExcursionsComponent } from './excursions/excursions.component';
import { AddExcursionComponent } from './add-excursion/add-excursion.component';
import { UpdateExcursionComponent } from './update-excursion/update-excursion.component';
import { HttpClientModule ,HTTP_INTERCEPTORS } from '@angular/common/http';
import { RechercheParTypeComponent } from './recherche-par-type/recherche-par-type.component';
import { RechercheParDistinationComponent } from './recherche-par-distination/recherche-par-distination.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { ListeTypesComponent } from './liste-types/liste-types.component';
import { UpdateTypeComponent } from './update-type/update-type.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { TokenInterceptor } from './services/token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ExcursionsComponent,
    AddExcursionComponent,
    UpdateExcursionComponent,
    RechercheParTypeComponent,
    RechercheParDistinationComponent,
    SearchFilterPipe,
    ListeTypesComponent,
    UpdateTypeComponent,
    LoginComponent,
    ForbiddenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [{ provide : HTTP_INTERCEPTORS,
    useClass : TokenInterceptor,
    multi : true}
     ],
  bootstrap: [AppComponent]
})
export class AppModule { }
