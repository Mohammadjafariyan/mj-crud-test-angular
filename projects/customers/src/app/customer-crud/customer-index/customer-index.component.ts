import { Component, OnInit } from '@angular/core';
import {CustomersService} from "../../core/services/customers.service";
import {Customer} from "../../core/models/customer";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-customer-index',
  templateUrl: './customer-index.component.html',
  styleUrls: ['./customer-index.component.css']
})
export class CustomerIndexComponent implements OnInit {
  customers: Customer[] =[];

  constructor(private customersService:CustomersService,private router:Router ) { }

  ngOnInit(): void {
    this.customers = this.customersService.Read();
  }

  edit(customer:Customer) {
    this.router.navigate(['/customers/save', { email: customer.Email }]);
  }

  delete(customer: Customer) {
     this.customersService.Delete(customer);
    this.customers = this.customersService.Read();

  }
}
