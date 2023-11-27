import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {CustomersService} from "../../core/services/customers.service";
import {Customer} from "../../core/models/customer";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';

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
    Firstname: ['', Validators.required],
    Lastname: ['', Validators.required],
    DateOfBirth: ['', Validators.required],
    PhoneNumber: ['', Validators.required],
    Email: ['', Validators.required],
    BankAccountNumber: ['', Validators.required],
  });

  constructor(private formBuilder: FormBuilder, private customersService: CustomersService,
              private activatedRoute: ActivatedRoute,private router:Router) {
  }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {

      let customerEmailForEdit = params['email'];
      if (!customerEmailForEdit)
        return;
      let value = this.customersService.ReadByEmail(customerEmailForEdit);

      console.log('activatedRoute value fetched : ', value);

      this.customerForm.patchValue(value)

    })


  }

  submit(ev:any) {

    ev.preventDefault();
    debugger
    if (this.customerForm.valid) {

      let customers = this.customersService.Read();

      let customer: Customer = this.customerForm.value;

      if (customers.find(f=>f.Email==this.customerForm.value.Email)){

        this.customersService.Update(customer);

      }else{
        this.customersService.Insert(customer);

      }

      this.router.navigate(['/customers/index']);

      console.log('form submitted');
    } else {
      // validate all form fields
    }


  }

}
