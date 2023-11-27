import { NgModule } from '@angular/core';
import { SharedComponent } from './shared.component';
import { ValidationMessageComponent } from './validation-message/validation-message.component';
import {CommonModule} from "@angular/common";



@NgModule({
  declarations: [
    SharedComponent,
    ValidationMessageComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    SharedComponent,
    ValidationMessageComponent
  ]
})
export class SharedModule { }
