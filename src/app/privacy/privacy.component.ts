import { AuthGuardService } from './../service/auth-guard.service';
import { Products } from './../model/products';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.css']
})
export class PrivacyComponent implements OnInit {

  product: Products = new Products();
  _id: any;

  constructor(private _authGardService: AuthGuardService, private _activatedRouter: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    this._id = this._activatedRouter.snapshot.paramMap.get('_id');
    this._authGardService.getProductbyId(this._id).subscribe(data => {
      this.product = data;
    }, error => {
      console.log(error);
    })
  }

  productDelete(){
    this._authGardService.deleteProduct(this._id).subscribe(data => {
      console.log(data)
      alert("Product was successfully deleted")
      this._router.navigate(['/admin-dashboard']);
    })
  }


}
