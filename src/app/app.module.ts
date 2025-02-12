import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { ResidencesComponent } from './residences/residences.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ResidenceDetailComponentComponent } from './residence-detail-component/residence-detail-component.component';

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
    ResidenceDetailComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
