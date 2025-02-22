import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',
  styleUrls: ['./add-residence.component.css']
})
export class AddResidenceComponent {
  apartForm!:FormGroup;
  constructor(){}

  ngOnInit(){

    this.apartForm= new FormGroup({
      name: new FormControl('', [Validators.required,Validators.pattern("^[A-Z][a-z]+$")]),
      address: new FormControl('',[Validators.required,Validators.minLength(15),Validators.maxLength(50)]),
      status: new FormControl('',Validators.required),
      image: new FormControl('',Validators.required),
  
    })
  }

  onSubmit(){
     console.log(this.apartForm.value);

    alert('SUCCESS\n\n'+ JSON.stringify(this.apartForm.value,null,4));

  }


  get name(){
    return this.apartForm.get('name')
  }

  test(){
    return console.log(this.apartForm.get('name')?.value)
  }
  

}
