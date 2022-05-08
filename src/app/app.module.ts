import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDashboardComponent } from './component/product-dashboard/product-dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AddProductComponent } from './component/add-product/add-product.component';
import { EditProductComponent } from './component/edit-product/edit-product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card'; 
import {NgxPaginationModule} from 'ngx-pagination'; 
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SearchFilterPipe } from './search-filter.pipe';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    AppComponent,
    ProductDashboardComponent,
    AddProductComponent,
    EditProductComponent,
    SearchFilterPipe,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    Ng2SearchPipeModule,
    FormsModule,
    MatCardModule,
    NgxPaginationModule,
    MatSnackBarModule,
    MatFormFieldModule
  
  ],
  exports:[
    MatCardModule,
    MatSnackBarModule,
    MatFormFieldModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
