import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'lib-validation-message',
  templateUrl: './validation-message.component.html',
  styleUrls: ['./validation-message.component.css'],
})
export class ValidationMessageComponent implements OnInit {


  logMe(sss:any,name:any){
    console.log(sss,name);
    console.log(sss?.controls[name].invalid);
    console.log(sss?.controls[name].dirty);
    console.log(sss?.controls[name].touched);
    console.log(sss?.controls[name].errors?.required);
    console.log('--------');

  }
  @Input()
  name:string ='';
  @Input()
  form!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    console.log(this.form)
    console.log(this.name)
  }

}
