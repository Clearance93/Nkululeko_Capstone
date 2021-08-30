import { CartService } from './../service/cart.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  public product: any = [];
  public grandTotal: number = 0;

  constructor(private _cartService:CartService) { }

  ngOnInit(): void {
    this._cartService.getProduct().subscribe(res => {
      this.product = res; 
      this.grandTotal = this._cartService.getTotalprice();
    })
  }

  removeItem(product: any){
    this._cartService.removeCartItem(product);
  }

  emptyCart(){
    this._cartService.removeAllCart();
  }

}
