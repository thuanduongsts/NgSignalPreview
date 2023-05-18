import { Component, DoCheck, ElementRef, NgZone } from '@angular/core';
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
    private ngZone: NgZone
  ) { }

  public ngDoCheck(): void {
    console.log("Application")
  }

  public blink() {
    this.el.nativeElement.classList.add('highlight');
    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => {
        this.el.nativeElement.classList.remove('highlight');
      }, 1500);
    })
  }

}
