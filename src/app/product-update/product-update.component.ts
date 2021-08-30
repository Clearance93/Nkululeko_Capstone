import { AuthGuardService } from './../service/auth-guard.service';
import { Products } from './../model/products';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Products = new Products();
  _id: any;

  constructor(private _authGaurdService: AuthGuardService, private _router: Router, private _activeRoutes: ActivatedRoute) { }

  ngOnInit(): void {
    this._id = this._activeRoutes.snapshot.paramMap.get('_id');
    this._authGaurdService.getProductbyId(this._id).subscribe(data => {
      this.product = data;
    })
  }

  
  updateProduct(){
    this._authGaurdService.updateProduct(this.product).subscribe(data => {
      console.log(data);
      alert('products successfully updated');
      this._router.navigate(['/admin-dashboard'])
    })
  }

}
