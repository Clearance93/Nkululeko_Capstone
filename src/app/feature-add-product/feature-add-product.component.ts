import { ActivatedRoute, Router } from '@angular/router';
import { AuthGuardService } from './../service/auth-guard.service';
import { Component, OnInit } from '@angular/core';
import { Featured } from '../model/featured';

@Component({
  selector: 'app-feature-add-product',
  templateUrl: './feature-add-product.component.html',
  styleUrls: ['./feature-add-product.component.css']
})
export class FeatureAddProductComponent implements OnInit {

  feature: Featured = new Featured();
  _id: any;

  constructor(private _authgaurdService: AuthGuardService, private _activeRoute: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    this._id = this._activeRoute.snapshot.paramMap.get('_id');
    this._authgaurdService.getFeaturebyId(this._id).subscribe(data => {
      this.feature = data;
    }, err => {
      console.error(err);
    })
  }

  productDelete(){
    this._authgaurdService.deleteFeature(this._id).subscribe(data => {
      console.log(data);
      alert("Product got deleted successfully")
      this._router.navigate(['/admin-dashboard'])
    })
  }

}
