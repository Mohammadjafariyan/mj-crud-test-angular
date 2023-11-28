import { Injectable } from '@angular/core';
// phone-validator.service.ts
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import * as libphonenumber from 'google-libphonenumber';

@Injectable({
  providedIn: 'root'
})
export class PhoneValidationService {

  constructor() { }
  // Custom validator function for phone numbers
  validatePhone(): ValidatorFn {
    return (control: AbstractControl): Promise<ValidationErrors | null>=> {
      const phone = control.value;

    //  debugger

      try {
        const phoneUtil = libphonenumber.PhoneNumberUtil.getInstance();

// Parse a phone number
        const phoneNumber = phoneUtil.parse(phone, 'US');

// Check if the phone number is valid
        const isValid = phoneUtil.isValidNumber(phoneNumber);

        if (isValid) {
          // Format the phone number
          const formattedNumber = phoneUtil.format(phoneNumber, libphonenumber.PhoneNumberFormat.INTERNATIONAL);
          console.log('Formatted Number:', formattedNumber);
        } else {
          console.log('Invalid phone number');
        }

        return new Promise(resolve => {
          // Replace the setTimeout with your actual asynchronous validation logic
          resolve(isValid ? null : { invalidPhone: true });

        });

      }catch (e){

        return new Promise(resolve => {
          // Replace the setTimeout with your actual asynchronous validation logic
          resolve( { invalidPhone: true });

        });
      }

      // Your phone number validation logic goes here


    };
  }

}
