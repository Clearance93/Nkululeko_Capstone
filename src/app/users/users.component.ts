import { AuthGuardService } from './../service/auth-guard.service';
import { Registration } from './../model/registration';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  

  public registerList: any;

  constructor(private _authGaurdService: AuthGuardService, private _router: Router) { }

  ngOnInit(): void {
    this._authGaurdService.getRegister().subscribe(data => {
      console.log(data);
      this.registerList = data;
    })
  }

  deleteUser(){
    this._authGaurdService.deleteUser().subscribe(data => {
      console.log(data)
      alert("User was successfully deleted.")
      this._router.navigate(['/admin-dashboard'])
    })
  }

}
