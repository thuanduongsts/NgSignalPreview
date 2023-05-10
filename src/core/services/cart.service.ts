import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, map } from 'rxjs';
import { CartItem, Product } from './../models/product.model';

@Injectable()
export class CartService {

  private _cartItems$: BehaviorSubject<CartItem[]> = new BehaviorSubject<CartItem[]>([]);
  private _totalPrice$: Observable<number> = this.cartItems$.pipe(map(cartItems => {
    if (!cartItems.length) return 0;
    const total = cartItems.reduce((previous, item) => previous += (item.amount * item.price), 0)
    return total;
  }));

  get cartItems$(): Observable<CartItem[]> {
    return this._cartItems$.asObservable();
  }

  get totalPrice$(): Observable<number> {
    return this._totalPrice$;
  }

  public setCartItems(cartItems: CartItem[]): void {
    this._cartItems$.next(cartItems);
  }

  public addCartItems(product: Product): void {
    const cartItems = [...this._cartItems$.value];
    const cartItem = cartItems.find((item) => item.id === product.id);
    if (cartItem) return;

    cartItems.push({ ...product, amount: 1 });
    this.setCartItems(cartItems);
  }

  public increment(data: CartItem): void {
    const cartItems = [...this._cartItems$.value];
    const index = cartItems.findIndex((el) => el.id === data.id);
    cartItems[index].amount = cartItems[index].amount + 1;
    this.setCartItems(cartItems);
  }

  public decrement(data: CartItem): void {
    const cartItems = [...this._cartItems$.value];
    const index = cartItems.findIndex((el) => el.id === data.id);
    cartItems[index].amount > 1 ? cartItems[index].amount-- : cartItems.splice(index, 1);
    this.setCartItems(cartItems);
  }
}
