import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Registration } from '../model/registration';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register: Registration = new Registration();

  constructor(private _httpClient: HttpClient, private _router: Router) { }

  ngOnInit(): void {

  }

  sendData(){
    this._httpClient.post('http://localhost:3000/register', this.register).subscribe(data => {
      console.log(data);
      this._router.navigate(['/login'])
    }, err => {
      console.error(err)
    })
  }

}
