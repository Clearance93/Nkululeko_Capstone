import { ActivatedRoute, Router } from '@angular/router';
import { AuthGuardService } from './../service/auth-guard.service';
import { Sale } from './../model/sale';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sale-update',
  templateUrl: './sale-update.component.html',
  styleUrls: ['./sale-update.component.css']
})
export class SaleUpdateComponent implements OnInit {

  sale: Sale = new Sale();
  _id: any;

  constructor(private _authGaurdService: AuthGuardService, private _activeRouter: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    this._id = this._activeRouter.snapshot.paramMap.get('_id'),
    this._authGaurdService.getSaleById(this._id).subscribe(data => {
      this.sale = data;
    }, err => {
      console.error(err);
    })
  }

  updateSale(){
    this._authGaurdService.updateSale(this.sale).subscribe(data => {
      this.sale = data;
      alert('Sale Product successfully updated');
      this._router.navigate(['/admin-dashboard']);
    }, err => {
      console.error(err);
    })
  }

}
