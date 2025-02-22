import { Component } from '@angular/core';
import { Apartment } from 'src/app/model/Apartment';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css']
})
export class ApartmentsComponent {
  
  listApartments: Apartment[] = [
   { apartNum :1,
    floorNum: 1,
    surface: 100,
    terrace: true,
    surfaceterrace: 50,
    category: 'A',
    ResidenceId: 1,
  },
  { apartNum :2,
    floorNum: 2, 
    surface: 120,
    terrace: false,
    surfaceterrace: 0,
    category: 'B',
    ResidenceId: 2,
  },
  { apartNum :3,  
    floorNum: 3,
    surface: 150,
    terrace: true,
    surfaceterrace: 70,
    category: 'C',
    ResidenceId: 3,
  },
  { apartNum :4,
    floorNum: 4,
    surface: 200,
    terrace: false,
    surfaceterrace: 0,
    category: 'D',
    ResidenceId: 4,
  },
  { apartNum :5,
    floorNum: 5,
    surface: 250,
    terrace: true,
    surfaceterrace: 100,
    category: 'E',
    ResidenceId: 5, 
  }
    
  ];
 

}
