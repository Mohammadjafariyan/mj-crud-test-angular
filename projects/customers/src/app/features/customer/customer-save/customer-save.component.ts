import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomersService} from "../../../core/services/customers.service";
import {Customer} from "../../../core/models/customer";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {PhoneValidationService} from "../../../core/utils/validations/phone-validation.service";
import {generateUUID} from "../../../core/utils/generateGUID";
import {AccoountNumberValidationService} from "../../../core/utils/validations/accoount-number-validation.service";

@Component({
  selector: 'app-customer-save',
  templateUrl: './customer-save.component.html',
  styleUrls: ['./customer-save.component.css']
})
export class CustomerSaveComponent implements OnInit {

  /*
  * Customer {
	Firstname
	Lastname
	DateOfBirth
	PhoneNumber
	Email
	BankAccountNumber
}
* */
  customerForm = this.formBuilder.group({
    Id: [generateUUID()],
    Firstname: ['', Validators.required],
    Lastname: ['', Validators.required],
    DateOfBirth: ['', Validators.required],
    Email: ['', Validators.compose([Validators.required, Validators.email])],
    PhoneNumber: ['', Validators.required, this.phoneValidator.validatePhone()],
    BankAccountNumber: ['', Validators.compose([Validators.required ,Validators.min(1),  Validators.pattern(/^[0-9]\d*$/)])

    ],
  });
  validationMessages: string = '';

  constructor(private formBuilder: FormBuilder, private customersService: CustomersService,
              private activatedRoute: ActivatedRoute, private router: Router,
              private phoneValidator: PhoneValidationService,
              private accoountNumberValidationService: AccoountNumberValidationService) {
  }

  ngOnInit(): void {



    /*---------------------------------------------------------------------------*/
    /* on edit :*/
    /*---------------------------------------------------------------------------*/
    this.activatedRoute.params.subscribe(params => {

      let customerEmailForEdit = params['email'];
      if (!customerEmailForEdit)
        return;
      let value = this.customersService.ReadByEmail(customerEmailForEdit);

      console.log('activatedRoute value fetched : ', value);

      this.customerForm.patchValue(value)

    })


  }

  submit(ev: any) {


    ev.preventDefault();
    this.validationMessages = '';



    if (this.customerForm.valid) {


      /*---------------------------------------------------------------------------*/
      /* read all  :*/
      /*---------------------------------------------------------------------------*/
      let customers = this.customersService.Read();

      let customer: Customer = this.customerForm.value;

      /*---------------------------------------------------------------------------*/
      /* validations :*/
      /*---------------------------------------------------------------------------*/
      this.validationMessages +=  this.customersService.MustUniqueEmail(customer);
      this.validationMessages +=this.customersService.MustUniqueByFirstnameAndLastnameAndDateOfBirth(customer);


      /*---------------------------------------------------------------------------*/
      /* no error :*/
      /*---------------------------------------------------------------------------*/
      if (this.validationMessages === '') {


        /*---------------------------------------------------------------------------*/
        /* whether it is update or insert : :*/
        /*---------------------------------------------------------------------------*/
        if (customers.find(f => f.Id == this.customerForm.value.Id)) {

          this.customersService.Update(customer);

        } else {

          this.customersService.Insert(customer);

        }


        /*---------------------------------------------------------------------------*/
        /* after submit  :*/
        /*---------------------------------------------------------------------------*/
        this.router.navigate(['/customers/index']);

        console.log('form submitted');
      }

    } else {


      /*---------------------------------------------------------------------------*/
      /* show validations :*/
      /*---------------------------------------------------------------------------*/

      this.customerForm.markAllAsTouched();


    }


  }

  showValidationMsg(formGroup: FormGroup) {

    for (const key in formGroup.controls) {
      if (formGroup.controls.hasOwnProperty(key)) {
        const control: FormControl = <FormControl>formGroup.controls[key];

        if (Object.keys(control).includes('controls')) {
          const formGroupChild: FormGroup = <FormGroup>formGroup.controls[key];
          this.showValidationMsg(formGroupChild);
        }

        control.markAsTouched();
      }
    }
  }
}
