import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { ProductService } from 'src/core/services/product.service';
import { ProductRoutingModule } from './product-routing.module';
import { ProductsComponent } from './products/products.component';
import { ProductsWSignalComponent } from './products-w-signal/products-w-signal.component';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductsWSignalComponent,
  ],
  providers: [
    ProductService
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProductRoutingModule
  ],
})
export class ProductModule { }
