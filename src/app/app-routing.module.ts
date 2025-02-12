import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ResidencesComponent } from './residences/residences.component';
const routes: Routes = [];

const ROUTES: Routes = [ 
  {path:'',redirectTo:'/app',pathMatch:'full'},
  {path:'header',component:HeaderComponent},
  {path:'app',component:AppComponent},
  {path:'footer',component:FooterComponent},
  {path:'home',component:ResidencesComponent},
  {path:'notfound',component:NotFoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
