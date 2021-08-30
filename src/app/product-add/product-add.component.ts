import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Products } from '../model/products';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  product: Products = new Products();
  title = 'fileUpload';
  images: any;

  constructor(private _httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  submit(){

    // Products.append('file', this.images)

    this._httpClient.post(`http://localhost:3000/products/`, this.product).subscribe(data => {
      console.log(data);
    })
  }

  selectedFile(event: any){
    if(event.target.files.length > 0) {
      const file = event.target.file[0];
      this.images = file;
    }
  }

}
