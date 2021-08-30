import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../model/admin';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  admin: Admin = new Admin();
  admins: Array<Admin> = [];

  constructor(private _httpClient: HttpClient, private _router:Router) { }

  ngOnInit(): void {
    this._httpClient.get<Admin[]>(`http://localhost:3000/admin`).subscribe(data => {
      this.admins = data;
      console.log(data);
    }, err => {
      console.error(err)
    })
  }

  adminLogin(){
    if(this.isAdminExist()) {
      localStorage.setItem('isLoggedIn', "true");
      this._router.navigate(['/admin-dashboard'])
    } else {
      alert('Logins was unsuccessful')
    }
  }
  isAdminExist() {
    for(const admin of this.admins) {
      if(admin.email === this.admin.email && admin.password === this.admin.password){
        return true;
      }
    }
    return false;
  }

}
