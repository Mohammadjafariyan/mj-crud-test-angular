import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerIndexComponent } from './customer-index.component';
import {RouterTestingModule} from "@angular/router/testing";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";

describe('CustomerIndexComponent', () => {
  let component: CustomerIndexComponent;
  let fixture: ComponentFixture<CustomerIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerIndexComponent ],
      imports: [RouterTestingModule , ReactiveFormsModule ,RouterModule],
      
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
