import { AuthGuardService } from './../service/auth-guard.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  public productList: any;
  public featureList: any;
  public saleList: any;

  constructor(private _authgaurdService: AuthGuardService) { }

  ngOnInit(): void {
    this._authgaurdService.getProduct().subscribe(data => {
      this.productList = data;
    this._authgaurdService.featureProducts().subscribe(data => {
      this.featureList= data;
    this._authgaurdService.saleProduct().subscribe(data => {
      this.saleList = data;
    })
    })
    })
  }

}
