import { ActivatedRoute, Router } from '@angular/router';
import { AuthGuardService } from './../service/auth-guard.service';
import { Component, OnInit } from '@angular/core';
import { Featured } from '../model/featured';

@Component({
  selector: 'app-feature-update',
  templateUrl: './feature-update.component.html',
  styleUrls: ['./feature-update.component.css']
})
export class FeatureUpdateComponent implements OnInit {

  feat: Featured = new Featured();
  _id: any;

  constructor(private _authguardService: AuthGuardService, private _activeRoute: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    this._id = this._activeRoute.snapshot.paramMap.get('_id');
    this._authguardService.getFeaturebyId(this._id).subscribe(data => {
      this.feat = data;
    })
  }

  updateFeature(){
    this._authguardService.updateFeature(this.feat).subscribe(data => {
      console.log(data);
      alert('Feature added successfully');
      this._router.navigate(['/admin-dashboard'])
    })
  }

}
