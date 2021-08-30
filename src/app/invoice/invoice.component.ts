import { ActivatedRoute } from '@angular/router';
import { AuthGuardService } from './../service/auth-guard.service';
import { Sale } from './../model/sale';
import { Featured } from './../model/featured';
import { Products } from './../model/products';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  public product: any;
  public feature: any;
  public sale: any;
  _id: any;

  constructor(private _authGuard: AuthGuardService, private _activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._id = this._activeRoute.snapshot.paramMap.get('_id');
    this._authGuard.featureProducts().subscribe(data => {
      this.feature = data;
    })
    this._authGuard.getProduct().subscribe(data => {
      this.product= data;
    })
    this._authGuard.saleProduct().subscribe(data => {
      this.sale = data;
    })
  }

  

}
