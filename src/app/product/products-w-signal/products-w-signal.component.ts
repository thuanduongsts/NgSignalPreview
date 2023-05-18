import { Component, OnInit } from '@angular/core';
import { Product } from '../../../core/models/product.model';
import { CartService } from '../../../core/services/cart.service';
import { ProductService } from '../../../core/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-products-w-signal',
  templateUrl: './products-w-signal.component.html',
  styleUrls: ['./products-w-signal.component.scss']
})
export class ProductsWSignalComponent {
  public products: Product[] = [];
  public product!: Product | null;

  public constructor(
    private productService: ProductService,
    private cartService: CartService,
    private activatedRoute: ActivatedRoute
  ) { }

  public ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap((params) => {
        const category = params['category'];
        if (category) {
          return this.productService.getProductsWithCategory(category)
        }
        return this.productService.getProducts();
      })
    ).subscribe(data => {
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
