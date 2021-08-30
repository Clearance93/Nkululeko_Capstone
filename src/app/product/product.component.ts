import { CartService } from './../service/cart.service';
import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from '../service/auth-guard.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public productsList: any;

  constructor(private _authGuard: AuthGuardService, private _cartService: CartService) { }

  ngOnInit(): void {
    this._authGuard.getProduct().subscribe(res => {
      this.productsList = res;

      this.productsList.forEach((a: any) => {
        Object.assign(a,{quantity:1,total:a.price})
      });
    })
  }
  addToCart(pro: any){
    this._cartService.addToCart(pro);
  }

}
