import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ResidencesComponent } from './Residencess/residences/residences.component';
import { Residence } from './model/Residence';
import { ResidencesDetailsComponent } from './Residencess/residences-details/residences-details.component';
import { AddResidenceComponent } from './Residencess/add-residence/add-residence.component';
import { ApartmentsByResidenceComponent } from './Apartments/apartments-by-residence/apartments-by-residence.component';
import { ApartmentsComponent } from './Apartments/apartments/apartments.component';
import { AddApartmentComponent } from './Apartments/add-apartment/add-apartment.component';

const ROUTES: Routes = [ 
  {path:'',redirectTo:'/app',pathMatch:'full'},
  {path:'header',component:HeaderComponent},
  {path:'footer',component:FooterComponent},
  {path:'home',component:ResidencesComponent},
  {path:'residences',component:ResidencesComponent},
  {path:'details/:id',component:ResidencesDetailsComponent},
  {path:'add-residence',component:AddResidenceComponent},
  {path:'add-apartment',component:AddApartmentComponent},
  {path:'apartments',component:ApartmentsComponent},
  {path:'apartments-by-residence/:id',component:ApartmentsByResidenceComponent},
  {path:'**',component:NotFoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
