import { Component, OnInit } from '@angular/core';
import { Product } from '../../../core/models/product.model';
import { CartService } from '../../../core/services/cart.service';
import { ProductService } from '../../../core/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public products: Product[] = [];
  public product!: Product | null;

  public constructor(
    private productService: ProductService,
    private cartService: CartService
  ) { }

  public ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  public addToCart(product: Product): void {
    this.cartService.addCartItems(product)
  }

  public viewDetail(product: Product): void {
    this.product = null;
    this.productService.gerProduct(product.id).subscribe(data => {
      this.product = data;
    })
  }
}
