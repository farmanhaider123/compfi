import { Component } from '@angular/core';
import{FormGroup,FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/services/user-auth.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-regis',
  templateUrl: './regis.component.html',
  styleUrls: ['./regis.component.css']
})
export class RegisComponent {
myForm=new FormGroup({
  firstName:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$'),Validators.minLength(2),Validators.maxLength(20)]),
  lastName:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$'),Validators.minLength(2),Validators.maxLength(20)]),
  email:new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*")]),
  password:new FormControl('',[Validators.required,Validators.pattern('(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}')]),
  contactNumber:new FormControl('',[Validators.required,Validators.pattern('[6-9][0-9]{9}')]),
  // otp:new FormControl('',[Validators.required,Validators.pattern('[0-9]{ ,6}')]),
})

constructor (private userServ:UserAuthService,private router:Router){}
get fdata(){
  return this.myForm.controls;
}
  postData()
  {
    let formdata = this.myForm.getRawValue();
    console.log(formdata)
    this.userServ.postRegis(formdata).subscribe((res: any) => {
     
      console.log("res1:" + res.uid)
    
      if (res.err == 0) {
        setInterval(() => {
          this.router.navigate(['/otp']).then(() => {
            this.userServ.setData(res.uid);
          })
        })
      }
      if (res.err == 1) {
        Swal.fire(`${res.msg}`,'','warning');
      }
    })
  }

}
