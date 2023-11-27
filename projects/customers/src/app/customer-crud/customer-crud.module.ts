import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerCrudRoutingModule } from './customer-crud-routing.module';
import { CustomerIndexComponent } from './customer-index/customer-index.component';
import { CustomerSaveComponent } from './customer-save/customer-save.component';
import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "shared-lib";


@NgModule({
  declarations: [
    CustomerIndexComponent,
    CustomerSaveComponent
  ],
  imports: [
    CommonModule,
    CustomerCrudRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class CustomerCrudModule { }
