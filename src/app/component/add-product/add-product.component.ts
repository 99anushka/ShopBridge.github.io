import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private product : ProductService, private route: Router) { }
  addProduct=new FormGroup( {
    id: new FormControl( '',Validators.required ),
    name: new FormControl( '' , Validators.required),
    imageUrl: new FormControl( '' , Validators.required),
    quantity: new FormControl( '' , Validators.required),
    price : new FormControl( '' , Validators.required)

  } );
  message: boolean=false;

  ngOnInit(): void {
    
  }
  SaveData() {
    
    this.product.saveProductData( this.addProduct.value ).subscribe( ( _result ) => {
     
      this.message=true;
      this.product.saveProduct("Product Added", 'SAVE');
      this.route.navigate(['list']);
      this.addProduct.reset( {} );
    } );
  }
  removeMessage() {
    this.message=false;
  }


}
