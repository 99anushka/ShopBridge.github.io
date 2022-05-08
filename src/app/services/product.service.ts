import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url='http://localhost:3000/products';
  constructor( private http: HttpClient, private snackbar: MatSnackBar ) { }
  getAllProduct() {
    return this.http.get( this.url );
  }
  saveProductData( data: any ) {
    
    return this.http.post( this.url, data );
  }
  deleteProduct( id: any ) {
    return this.http.delete( `${this.url}/${id}` );
  }
  getProductById( id: number ) {
    return this.http.get( `${this.url}/${id}` );
  }
  updateProductData( id: number, data: any ) {
    return this.http.put( `${this.url}/${id}`, data );
  }
  saveProduct(errMsg: any, status: string, mins? : number){
    let cls = 'success-snackbar';
    if(status=='ERROR'){
      cls='error-snackbar';
    }
    if(mins==undefined){
      mins=6;
    }
    this.snackbar.open(errMsg, status, {
      duration: mins * 1000,
      panelClass: [cls]
    });
  }
 
}
