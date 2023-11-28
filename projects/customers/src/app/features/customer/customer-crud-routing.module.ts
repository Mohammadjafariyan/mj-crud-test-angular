import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerIndexComponent } from './customer-index/customer-index.component';
import {CustomerSaveComponent} from "./customer-save/customer-save.component";

const routes: Routes = [
   {path: 'index', component:CustomerIndexComponent},
   {path: 'save', component:CustomerSaveComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerCrudRoutingModule { }
