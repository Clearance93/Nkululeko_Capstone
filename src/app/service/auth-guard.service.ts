import { Registration } from './../model/registration';
import { Sale } from './../model/sale';
import { Featured } from './../model/featured';
import { Products } from './../model/products';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  product: Products [] = [];
  feature: Featured [] = [];
  sale: Sale [] = [];

  constructor(private _httpClient: HttpClient) { }
  
  canActivate(): boolean {
    if(this.isLoggedin()){
      return true;
    }
    return false
  }

  isLoggedin(): boolean {
    if(localStorage.getItem('isLoggedIn') == "true") {
      return true
    }
    return false
  }

  logout(){
    localStorage.removeItem('isLoggedIn');
  }

  getRegister(){
    return this._httpClient.get<Registration[]>(`http://localhost:3000/register/`).pipe(map((res:any) => {
      return res;
    }))
  }

  getProduct(){
    return this._httpClient.get<Products[]>(`http://localhost:3000/products/`).pipe(map((res:any) => {
      return res;
    }))
  }

  featureProducts(){
    return this._httpClient.get<Featured[]>(`http://localhost:3000/featured/`).pipe(map((data:any) => {
    return data;
    }))
  }

  saleProduct(){
    return this._httpClient.get<Sale[]>(`http://localhost:3000/sale/`).pipe(map((result: any) => {
    return result;
    }))
  }

  getProductbyId(_id: any): Observable<Products> {
    return this._httpClient.get<Products>(`http://localhost:3000/products/${_id}`)
  }

  getFeaturebyId(_id: any): Observable<Featured> {
    return this._httpClient.get<Featured>(`http://localhost:3000/featured/${_id}`)
  }

  getSaleById(_id: any): Observable<Sale> {
    return this._httpClient.get<Sale>(`http://localhost:3000/sale/${_id}`)
  }

  deleteProduct(_id: any): Observable<Products> {
    return this._httpClient.delete<Products>(`http://localhost:3000/products/${_id}`)
  }

  deleteFeature(_id: any): Observable<Featured> {
    return this._httpClient.delete<Featured>(`http://localhost:3000/featured/${_id}`)
  }

  deleteSale(_id: any): Observable<Sale> {
    return this._httpClient.delete<Sale>(`http://localhost:3000/sale/${_id}`)
  }

  deleteUser(): Observable<Registration> {
    return this._httpClient.delete<Registration>(`http://localhost:3000/register`)
  }

  updateProduct(product: Products): Observable<Products> {
    return this._httpClient.put<Products>(`http://localhost:3000/products/` + product._id, product);
  }


  updateFeature(feat: Featured): Observable<Featured> {
    return this._httpClient.put<Featured>(`http://localhost:3000/featured/` + feat._id, feat);
  }


  updateSale(sale: Sale): Observable<Sale> {
    return this._httpClient.put<Sale>(`http://localhost:3000/sale/` + sale._id, sale);
  }

}
