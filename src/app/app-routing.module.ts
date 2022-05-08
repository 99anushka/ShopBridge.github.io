import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './component/add-product/add-product.component';
import { EditProductComponent } from './component/edit-product/edit-product.component';
import { ProductDashboardComponent } from './component/product-dashboard/product-dashboard.component';

const routes: Routes = [
  {
    path: 'add',
    component: AddProductComponent
  },
  {
    path: 'edit/:id',
    component: EditProductComponent
  },
  {
    path: 'list',
    component: ProductDashboardComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
