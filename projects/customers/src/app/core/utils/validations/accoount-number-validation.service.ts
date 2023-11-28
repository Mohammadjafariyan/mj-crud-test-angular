import { Injectable } from '@angular/core';
import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class AccoountNumberValidationService {

  constructor() { }

  validateAccountNumber(): ValidatorFn {
    return (control: AbstractControl): Promise<ValidationErrors | null>=> {
      const phone = control.value;

      return new Promise(resolve => {
        // Replace the setTimeout with your actual asynchronous validation logic
        resolve( null);

      });

      // Your phone number validation logic goes here


    };
  }
}
