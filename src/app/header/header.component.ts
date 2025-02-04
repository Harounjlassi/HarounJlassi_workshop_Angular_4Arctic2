import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  link1: string= 'Home';
  link2: string= 'Residences';
  url: string= 'http://www.esprit.tn';
  color: string= '';
  
  clickMe(){
    alert('Hello');
  }


}
