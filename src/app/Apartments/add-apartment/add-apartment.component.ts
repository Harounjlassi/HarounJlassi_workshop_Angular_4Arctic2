import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-apartment',
  templateUrl: './add-apartment.component.html',
  styleUrls: ['./add-apartment.component.css']
})
export class AddApartmentComponent {
  apartForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.apartForm = this.fb.group({
      apartmentNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      floorNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      terrace: [false],
      surfaceTerrace: [{ value: '', disabled: true }, [Validators.pattern('^[0-9]+$')]],
      residence: ['', Validators.required],
      category: ['S+1']  // Default selected value

    });

    // Enable or disable surface terrace field based on terrace checkbox
    this.apartForm.get('terrace')?.valueChanges.subscribe((value) => {
      const surfaceTerrace = this.apartForm.get('surfaceTerrace');
      if (value) {
        surfaceTerrace?.enable();
      } else {
        surfaceTerrace?.disable();
      }
    });
  }

  // Get error messages for each field
  getErrorMessage(controlName: string): string {
    const control = this.apartForm.get(controlName);
    if (control?.hasError('required')) {
      return `${controlName} is required.`;
    } else if (control?.hasError('pattern')) {
      return `${controlName} should be a number.`;
    }
    return '';
  }

  // Form submit handler
  onSubmit() {
    if (this.apartForm.valid) {
      const newApart = this.apartForm.value;
      console.log('New Apartment Data:', newApart);
    }
  }

}
