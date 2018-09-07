import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EcommerceRoutingModule } from './ecommerce-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { OrderComponent } from './order/order.component';
import { OrderViewComponent } from './order-view/order-view.component';

@NgModule({
  imports: [
    CommonModule,
    EcommerceRoutingModule
  ],
  declarations: [DashboardComponent, ProductsComponent, EditProductComponent, OrderComponent, OrderViewComponent]
})
export class EcommerceModule { }
