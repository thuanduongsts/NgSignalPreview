import { Component, DoCheck, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from '../core/models/product.model';
import { CartService } from '../core/services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements DoCheck {

  public get cartItems$(): Observable<CartItem[]> {
    return this.cartService.cartItems$;
  }

  public constructor(
    private cartService: CartService,
    private el: ElementRef,
  ) { }

  public ngDoCheck(): void {
    console.log("Application")
  }

  public blink() {
    this.el.nativeElement.classList.add('highlight');
    setTimeout(() => {
      this.el.nativeElement.classList.remove('highlight');
    }, 1500);
  }

}
