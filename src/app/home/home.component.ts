import { CartService } from './../service/cart.service';
import { Products } from './../model/products';
import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from '../service/auth-guard.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  public productList: any; 
  public featureList: any;
  public saleList: any;

  constructor(private _authGaurd: AuthGuardService, private _router: Router, private _cartService: CartService) { }

  ngOnInit(): void {
    this._authGaurd.getProduct().subscribe(data => {
      this.productList = data;
    this._authGaurd.featureProducts().subscribe(res => {
      this.featureList = res;
      this._authGaurd.saleProduct().subscribe(result => {
        this.saleList = result;
      })
    }) 
    })
  }

  image(){
    this._router.navigate(['/login'])
    alert("Please login, reselect and add me to cart")
  }

  addToCart(feat: any){
    this._cartService.addToCart(feat);
  }

  addToCartSale(sale: any){
    this._cartService.addToCart(sale);
  }

}
