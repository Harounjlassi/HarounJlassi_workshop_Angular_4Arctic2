import { Component } from '@angular/core';
import { Residence } from '../../model/Residence';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css'],
})
export class ResidencesComponent {
  listResidences: Residence[] = [
    {
      id: 1,
      name: 'El fel',
      address: 'Borj Cedria',
      image: '../../assets/images/R1.png',
      status: 'Disponible',
      Apartments: [
        {apartNum :1,
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
        }]
    
    },
    {
      id: 2,
      name: 'El yasmine',
      address: 'Ezzahra',
      image: '../../assets/images/R2.png',
      status: 'Disponible',
      Apartments:[{apartNum :1,
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
      }
    ]

    },
    {
      id: 3,
      name: 'El Arij',
      address: 'Rades',
      image: '../../assets/images/R3.png',
      status: 'Vendu',
      Apartments:[ {apartNum :1,
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
      }]
    },
  
    {
      id: 4,
      name: 'El Anber',
      address: 'inconnu',
      image: '../../assets/images/R4.png',
      status: 'En Construction',
      Apartments:[ {apartNum :1,
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
      }]
    },
  ];
  listFav: Residence[] = [];
  selectedAddress: string = '';
  search: string = '';

  showAddress(address: string) {
    if (address.toLowerCase() === 'inconnu') {
      alert('Address is unknown!');
    } else {
      this.selectedAddress = address;
    }
  }
  searchText: string = '';


  addFav(i: number) {
    const index = this.listFav.findIndex((fav) => fav.id === i + 1);
    if (index === -1) {
      this.listFav.push(this.listResidences[i]);
      console.log(i);
    } else {
      alert('This residence is already in  favorites!');
    }
  }

  get filteredResidences() {
    return this.listResidences.filter(residence =>
      residence.address.toLowerCase().includes(this.searchText.toLowerCase())
    );
}
}
