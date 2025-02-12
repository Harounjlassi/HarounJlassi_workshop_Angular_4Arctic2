import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  link1: string= 'home';
  link2: string= 'residences';
/*  link3: string= '';
  link4: string= 'Residences';
  link5: string= 'Residences';
*/
  url: string= '';
  color: string= '';
  


}
