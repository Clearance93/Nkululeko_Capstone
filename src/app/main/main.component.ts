import { CartService } from './../service/cart.service';
import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from '../service/auth-guard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {


  public totalItem: number = 0;

  constructor(private _cartService: CartService, private _authGuard: AuthGuardService, private _router: Router) { }

  ngOnInit(): void {
    this._cartService.getProduct()
    .subscribe(res => {
      this.totalItem = res.length;
    })
  }

  loginStatus(){
    if (this._authGuard.isLoggedin()){
      return true;
    } else {
      return false;
    }
  }

  logout(){
    this._authGuard.logout();
    this._router.navigate(['/login']);
  }

}
