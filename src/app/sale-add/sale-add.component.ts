import { AuthGuardService } from './../service/auth-guard.service';
import { Sale } from './../model/sale';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sale-add',
  templateUrl: './sale-add.component.html',
  styleUrls: ['./sale-add.component.css']
})
export class SaleAddComponent implements OnInit {

  sale: Sale = new Sale();

  constructor(private _httpClient: HttpClient, private _router: Router) { }

  ngOnInit(): void {
  }

  submit(){
    this._httpClient.post('http://localhost:3000/sale/', this.sale).subscribe(data => {
      console.log(data);
      alert("Product added succesfull");
      this._router.navigate(['/admin-dashboard']);
    }, err => {
      console.error(err);
    })
  }

}
