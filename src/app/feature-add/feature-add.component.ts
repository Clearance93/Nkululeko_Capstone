import { Featured } from './../model/featured';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feature-add',
  templateUrl: './feature-add.component.html',
  styleUrls: ['./feature-add.component.css']
})
export class FeatureAddComponent implements OnInit {

  feature: Featured = new Featured();

  constructor(private httpClient: HttpClient, private _router: Router) { }

  ngOnInit(): void {
  }

  submit(){
    this.httpClient.post(`http://localhost:3000/featured/`, this.feature).subscribe(data => {
      console.log(data)
      alert("product added successfully");
      this._router.navigate(['/admin-dashboard'])
    })
  }

}
