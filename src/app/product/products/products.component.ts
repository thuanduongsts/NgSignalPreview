import { Component, OnInit } from '@angular/core';
import { Product } from 'src/core/models/product.model';
import { CartItem } from '../../../core/models/product.model';
import { ProductService } from '../../../core/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public totalPrice: number = 0;
  public cartItems: CartItem[] = []
  public showWarning: boolean = false;
  public products: Product[] = [];

  public constructor(private productService: ProductService) { }

  public ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  public addToCart(product: Product): void {
    this.handleAddCart(product);
    this.calcTotalPrice();
  }

  public increment(item: CartItem): void {
    const index = this.cartItems.findIndex((el) => el.id === item.id);
    this.cartItems[index].amount = this.cartItems[index].amount + 1;
    this.calcTotalPrice();
  }

  public decrement(item: CartItem): void {
    const index = this.cartItems.findIndex((el) => el.id === item.id);
    const cartItem = this.cartItems[index];
    if (cartItem.amount > 0) cartItem.amount--;
    if (cartItem.amount === 0) this.cartItems.splice(index, 1)
    this.calcTotalPrice();
  }

  private handleAddCart(product: Product) {
    const cartItem = this.cartItems.find((item) => item.id === product.id);
    cartItem ? cartItem.amount++ : this.cartItems.push({ ...product, amount: 1 });
  }

  private calcTotalPrice(): void {
    this.totalPrice = 0;
    if (!this.cartItems.length) return;
    this.cartItems.forEach((item) => this.totalPrice += (item.amount * item.price))
  }
}
