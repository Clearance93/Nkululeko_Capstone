import { Registration } from './../model/registration';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  reg: Registration = new Registration();
  users: Array<Registration> = [];

  constructor(private _router: Router, private _httpClient:HttpClient) { }

  ngOnInit(): void {
    this._httpClient.get<Registration[]>(`http://localhost:3000/register`).subscribe(data => {
      this.users = data;
      console.log(data);
    }, err => {
      console.error(err);
    });
  };

  login(){
    if(this.isUserExist()) {
      localStorage.setItem('isLoggedIn', "true");
      this._router.navigate(['/product'])
      // alert("Login successfully")
    } else {
      alert("login faild")
    }
  }

  isUserExist(){
    for(const reg of this.users) {
      if(reg.email == this.reg.email && reg.password == this.reg.password) {
        return true;
      }
    }
    return false;
  }

}
