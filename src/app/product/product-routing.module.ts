import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductBoardComponent } from './product-board/product-board.component';

const routes: Routes = [
  { path: '', redirectTo: 'product-board', pathMatch: 'full' },
  { path: 'product-board', component: ProductBoardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
