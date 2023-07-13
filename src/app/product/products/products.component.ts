import { ApplicationRef, Component, DoCheck, ElementRef, NgZone, OnInit } from '@angular/core';
import { Product } from '../../../core/models/product.model';
import { CartService } from '../../../core/services/cart.service';
import { ProductService } from '../../../core/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, DoCheck {

  public products: Product[] = [];
  public product!: Product | null;

  public constructor(
    private productService: ProductService,
    private cartService: CartService,
    private activatedRoute: ActivatedRoute,
    private appRef: ApplicationRef,
    private el: ElementRef,
    private ngZone: NgZone,
  ) {
    requestAnimationFrame(() => appRef.tick())
  }

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
      // this.appRef.tick();
    });
  }

  public ngDoCheck(): void {
    console.log("ProductsComponent")
  }

  public blink() {
    this.el.nativeElement.classList.add('highlight');
    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => {
        this.el.nativeElement.classList.remove('highlight');
      }, 1500);
    })
  }

  public addToCart(product: Product): void {
    this.cartService.addCartItems(product)
  }

  public viewDetail(product: Product): void {
    this.product = null;
    this.productService.gerProduct(product.id).subscribe(data => {
      this.product = data;
      // this.appRef.tick();
    })
  }
}
