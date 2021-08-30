import { Admin } from './../model/admin';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-registration',
  templateUrl: './admin-registration.component.html',
  styleUrls: ['./admin-registration.component.css']
})
export class AdminRegistrationComponent implements OnInit {

  admin: Admin = new Admin();

  constructor(private _router:Router, private _httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  sendData(){
    this._httpClient.post(`http://localhost:3000/admin`, this.admin).subscribe(data => {
      console.log(data);
      this._router.navigate(['/admin-login']);
      if(this.admin.password != this.admin.confirm_password){
        alert("The passwords do not match")
      }
    });
  };

}
