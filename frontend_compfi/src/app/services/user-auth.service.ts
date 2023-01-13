import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable,Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
public subject=new Subject();
  apiURL = environment.apiURL;
  constructor(private http: HttpClient) { }
  postRegis(data: any)
  {
    return this.http.post(`${this.apiURL}signUp`,data)
  }
  postotp(data: any)
  {
    return this.http.post(`${this.apiURL}otp`,data)
  }

  setData(data: any) {
      this.subject.next({otpData:data});
  }

  resendotp(data:any)
  {
    return this.http.post(`${this.apiURL}resendotp`,data)
  }
}
