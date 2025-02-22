import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Apartment } from 'src/app/model/Apartment';

@Component({
  selector: 'app-apartments-by-residence',
  templateUrl: './apartments-by-residence.component.html',
  styleUrls: ['./apartments-by-residence.component.css']
})
export class ApartmentsByResidenceComponent {
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
      constructor(private app: ActivatedRoute,private router:Router) {}
      id!: number;
      apps:Apartment[] | undefined;
    
    ngOnInit() {
      //this.router.routeReuseStrategy.shouldReuseRoute = () => false; // Force reload on param change
  
      // this.id = this.act.snapshot.params['id'];
      this.app.paramMap.subscribe(
        param=>this.id= Number(param.get('id')))
  this.apps=this.listApartments.filter(app=>app.ResidenceId==this.id)
    }
   

}
