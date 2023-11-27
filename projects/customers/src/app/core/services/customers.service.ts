import { Injectable } from '@angular/core';
import {LocalStorageService} from "./local-storage.service";
import {Customer} from "../models/customer";

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  private customersName= 'Customers';
  constructor(
    private localStorageService:LocalStorageService
  ) { }

  Insert(customer:Customer){
    let customers = this.localStorageService.getData<Customer[]>(this.customersName);

    if (!customers)
    {
      customers=[];
    }
    customers.push(customer)

    this.localStorageService.saveData(this.customersName,customers);
  }


  Update(customer:Customer){
    if (!customer)
      throw new Error("customer is null");

    let customers = this.localStorageService.getData<Customer[]>(this.customersName);

    if (!customers)
    {
      customers=[];
    }

    let i = customers.findIndex(f=>f.Email==customer.Email);
    if (!customers[i])
      throw new Error("customer not found");


    customers[i]=customer
    this.localStorageService.saveData(this.customersName,customers);
  }

  Delete(customer:Customer){
    if (!customer)
      throw new Error("customer is null");

    let customers = this.localStorageService.getData<Customer[]>(this.customersName);

    if (!customers)
    {
      customers=[];
    }

    let i = customers.findIndex(f=>f.Email==customer.Email);
    if (!customers[i])
      throw new Error("customer not found");


    customers.splice(i, 1);
    this.localStorageService.saveData(this.customersName,customers);
  }


  Read(){

    let customers = this.localStorageService.getData<Customer[]>(this.customersName);

    if (!customers)
    {
      customers=[];
    }

    return customers;
  }

  ReadByEmail(email:string){

    if (!email)
      throw new Error("customer is null");

    let customers = this.localStorageService.getData<Customer[]>(this.customersName);

    if (!customers)
    {
      customers=[];
    }

    let i = customers.findIndex(f=>f.Email==email);
    if (!customers[i])
      throw new Error("customer not found");

    return customers[i];
  }


}
