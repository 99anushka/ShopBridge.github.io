import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  constructor(private product : ProductService, private router: ActivatedRoute, private route: Router) { }
  editProduct=new FormGroup( {
    id: new FormControl( '' ),
    name: new FormControl( '' ),
    imageUrl: new FormControl( '' ),
    quantity: new FormControl( '' ),
    price : new FormControl( '' )

  } );
  message: boolean=false;

  ngOnInit(): void {
    this.product.getProductById( this.router.snapshot.params.id ).subscribe( ( result: any ) => {
      //console.log( result );
      this.editProduct = new FormGroup( {
        id: new FormControl( result['id'] ),
        name: new FormControl( result['name'] ),
        imageUrl: new FormControl( result['imageUrl'] ),
        quantity: new FormControl( result['quantity']  ),
        price : new FormControl( result['price']  )

      } );
    } );
  }
  UpdateData() {

    this.product.updateProductData( this.router.snapshot.params.id, this.editProduct.value ).subscribe( ( result ) => {
      this.product.saveProduct("Product Updated", 'SAVE');
      this.route.navigate(['list']);
      this.message=true;
    } )
  }
  removeMessage() {
    this.message=false;
  }
}


