import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Residence } from 'src/app/model/Residence';
import { Router } from '@angular/router';

@Component({
  selector: 'app-residences-details',
  templateUrl: './residences-details.component.html',
  styleUrls: ['./residences-details.component.css']
})
export class ResidencesDetailsComponent {
  [x: string]: any;
  id!: number;
  res:Residence | undefined;
  selectedAddress: string = '';

  constructor(private act: ActivatedRoute,private router:Router) {}

  listResidences: Residence[] = [
      {
        id: 1,
        name: 'El fel',
        address: 'Borj Cedria',
        image: '../../assets/images/R1.png',
        status: 'Disponible',
      },
      {
        id: 2,
        name: 'El yasmine',
        address: 'Ezzahra',
        image: '../../assets/images/R2.png',
        status: 'Disponible',
      },
      {
        id: 3,
        name: 'El Arij',
        address: 'Rades',
        image: '../../assets/images/R1.png',
        status: 'Vendu',
      },
      {
        id: 4,
        name: 'El Anber',
        address: 'inconnu',
        image: '../../assets/images/R2.png',
        status: 'En Construction',
      },
    ];
  
  ngOnInit() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false; // Force reload on param change

    // this.id = this.act.snapshot.params['id'];
    this.act.paramMap.subscribe(
      param=>this.id= Number(param.get('id')))
this.res=this.listResidences.filter(res=>res.id==this.id)[0]
  }
  showAddress(address: string) {
    if (address.toLowerCase() === 'inconnu') {
      alert('Address is unknown!');
    } else {
      this.selectedAddress = address;
    }
  }
  navigateToDetails(id?: number) {
    const newId = ((id ?? 0) + 1) > 4 ? 1 : (id ?? 0) + 1;

    this.router.navigate(['/details', newId], { queryParamsHandling: 'merge' });


  }
  navigateToAdComponement() {

    this.router.navigate(['/add'], { queryParamsHandling: 'merge' });


  }
}
