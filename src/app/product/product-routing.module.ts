import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductsWSignalComponent } from './products-w-signal/products-w-signal.component';

const routes: Routes = [
  { path: '', redirectTo: 'non-signal', pathMatch: 'full' },
  { path: 'non-signal', component: ProductsComponent },
  { path: 'w-signal', component: ProductsWSignalComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
