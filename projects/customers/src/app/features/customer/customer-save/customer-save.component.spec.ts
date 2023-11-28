import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSaveComponent } from './customer-save.component';
import {CustomersService} from "../../../core/services/customers.service";
import {RouterTestingModule} from "@angular/router/testing";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";

describe('CustomerSaveComponent', () => {
  let component: CustomerSaveComponent;
  let fixture: ComponentFixture<CustomerSaveComponent>;
  let customersService: CustomersService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerSaveComponent ],
      imports: [RouterTestingModule , ReactiveFormsModule ,RouterModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerSaveComponent);
    component = fixture.componentInstance;


    customersService= TestBed.inject(CustomersService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have empty form', () => {
    expect(component.customerForm.get('Firstname')?.value).toEqual('');
    expect(component.customerForm.get('Lastname')?.value).toEqual('');
    expect(component.customerForm.get('DateOfBirth')?.value).toEqual('');
    expect(component.customerForm.get('PhoneNumber')?.value).toEqual('');
    expect(component.customerForm.get('Email')?.value).toEqual('');
    expect(component.customerForm.get('BankAccountNumber')?.value).toEqual('');
  });

  it('should call onSubmit method when the form is submitted and count of customers must be increased', () => {
    spyOn(component, 'submit');
    const form = fixture.nativeElement.querySelector('form');

    let countBeforeSubmit=customersService.Read().length;

    // values get filled with test value generators
    component.customerForm.get('Firstname')?.setValue('mike ' + Math.round(Math.random()*1000));
    component.customerForm.get('Lastname')?.setValue('rand ' + Math.round(Math.random()*1000));
    component.customerForm.get('DateOfBirth')?.setValue('2/9/1994');
    component.customerForm.get('PhoneNumber')?.setValue('+989148980692');
    component.customerForm.get('Email')?.setValue(`mohammad.jafariyan${Math.round(Math.random()*1000)}@gmail.com`);
    component.customerForm.get('BankAccountNumber')?.setValue('16545');


    form.dispatchEvent(new Event('submit'));
    fixture.detectChanges();
    expect(component.submit).toHaveBeenCalled();

    let countAfterSubmit=customersService.Read().length;

    expect(countBeforeSubmit).toBe(countAfterSubmit);


  });

});
