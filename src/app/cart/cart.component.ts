import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from '../../core/models/product.model';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  public cartItems: CartItem[] = [];

  public get totalPrice$(): Observable<number> {
    return this.cartService.totalPrice$;
  }

  public constructor(private cartService: CartService) {
    this.cartService.cartItems$.subscribe(data => {
      this.cartItems = data;
    });
  }

  public increment(item: CartItem): void {
    this.cartService.increment(item);
  }

  public decrement(item: CartItem): void {
    this.cartService.decrement(item);
  }
}
