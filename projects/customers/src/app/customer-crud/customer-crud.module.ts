import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerCrudRoutingModule } from './customer-crud-routing.module';
import { CustomerIndexComponent } from './customer-index/customer-index.component';
import { CustomerSaveComponent } from './customer-save/customer-save.component';


@NgModule({
  declarations: [
    CustomerIndexComponent,
    CustomerSaveComponent
  ],
  imports: [
    CommonModule,
    CustomerCrudRoutingModule
  ]
})
export class CustomerCrudModule { }
