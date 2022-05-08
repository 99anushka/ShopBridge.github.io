import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { ProductService } from 'src/app/services/product.service';




@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.css']
})
export class ProductDashboardComponent implements OnInit {
  searchText: any; ;
  p: number = 1;
   
  constructor(private product : ProductService) { }
  
  productData: any= [];

  ngOnInit(): void {
    this.product.getAllProduct().subscribe( ( allData ) => {
      console.log( allData );
      this.productData=allData;
    } );
  }
  deleteProduct( product_id: any ) {
    this.product.deleteProduct( product_id ).subscribe( ( _result ) => {
      this.ngOnInit();
    } );
  }
  

}
function MatSort(MatSort: any) {
  throw new Error('Function not implemented.');
}

