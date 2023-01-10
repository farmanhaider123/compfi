import { Component } from '@angular/core';
import{FormGroup,FormControl,Validators} from '@angular/forms';
@Component({
  selector: 'app-regis',
  templateUrl: './regis.component.html',
  styleUrls: ['./regis.component.css']
})
export class RegisComponent {
myForm=new FormGroup({
  FirstName:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$'),Validators.minLength(2),Validators.maxLength(20)]),
  LastName:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$'),Validators.minLength(2),Validators.maxLength(20)]),
  email:new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*")]),
  password:new FormControl('',[Validators.required,Validators.pattern('(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}')]),
  contact:new FormControl('',[Validators.required,Validators.pattern('[6-9][0-9]{9}')]),
  otp:new FormControl('',[Validators.required,Validators.pattern('[0-9]{ ,6}')]),
})

constructor (){}
get fdata(){
  return this.myForm.controls;
}
}
