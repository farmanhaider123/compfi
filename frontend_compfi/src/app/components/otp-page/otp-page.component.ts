import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/services/user-auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-otp-page',
  templateUrl: './otp-page.component.html',
  styleUrls: ['./otp-page.component.css']
})
export class OtpPageComponent implements OnInit {
   isactive=false
  t1!: string;
  t2!: string;
  t3!: string;
  t4!: string;
  t5!: string;
  constructor(private userServ: UserAuthService) { }
  id!: string;
  ngOnInit(): void{
   this.userServ.subject.subscribe((res:any)=>{
      let data=res.otpData;
        this.id = data;
    }) 
   
  }
  submit() {
    let otp = this.t1 + this.t2 + this.t3 + this.t4 + this.t5;
    // console.log(otp);  
    // console.log(this.id)
    let data = { "otp": otp, "id": this.id }
    this.userServ.postotp(data).subscribe((res:any) => {
      if (res.err == 0) {
        Swal.fire(`${res.msg}`,'','success') 
      }
      if (res.err == 1) {
        this.isactive = res.active;
        Swal.fire(`${res.msg}`,'','warning')
        
      }
    })

  }

  //Resend otp
  resend()
  {
    let data=''
    this.userServ.resendotp(data).subscribe((res: any) =>{
       if (res.err == 0) {
        Swal.fire(`${res.msg}`,'','success') 
      } 
     })
  }
}
