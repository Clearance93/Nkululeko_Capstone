import { ActivatedRoute, Router } from '@angular/router';
import { AuthGuardService } from './../service/auth-guard.service';
import { Component, OnInit } from '@angular/core';
import { Sale } from '../model/sale';

@Component({
  selector: 'app-sale-add-product',
  templateUrl: './sale-add-product.component.html',
  styleUrls: ['./sale-add-product.component.css']
})
export class SaleAddProductComponent implements OnInit {

  sale: Sale = new Sale();
  _id: any;

  constructor(private _authGardService: AuthGuardService, private activeRoute: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    this._id = this.activeRoute.snapshot.paramMap.get('_id');
    this._authGardService.getSaleById(this._id).subscribe(data => {
      this.sale = data;
    }, err => {
      console.error(err);
    })
  }

  saleDelete(){
    this._authGardService.deleteSale(this._id).subscribe(data => {
      console.log(data)
      alert("Sale successfully deleted");
      this._router.navigate(['/admin-dashboard'])
    }, err => {
      console.error(err);
    })
  }

}
