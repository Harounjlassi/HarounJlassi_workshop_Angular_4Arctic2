import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResidencesComponent } from './Residencess/residences/residences.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddResidenceComponent } from './Residencess/add-residence/add-residence.component';
import { ResidencesDetailsComponent } from './Residencess/residences-details/residences-details.component';
import { ApartmentsByResidenceComponent } from './Apartments/apartments-by-residence/apartments-by-residence.component';
import { AddApartmentComponent } from './Apartments/add-apartment/add-apartment.component';
import { ApartmentsComponent } from './Apartments/apartments/apartments.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    HeaderComponent,
    ResidencesComponent,
    AppComponent,
    HomeComponent,
    FooterComponent,
    NotFoundComponent,
    ResidencesDetailsComponent,
    AddResidenceComponent,
    ApartmentsByResidenceComponent,
    AddApartmentComponent,
    ApartmentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
