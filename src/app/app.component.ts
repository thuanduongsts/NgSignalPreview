import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from '../core/models/product.model';
import { CartService } from '../core/services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  public get cartItems$(): Observable<CartItem[]> {
    return this.cartService.cartItems$;
  }
  
  public constructor(private cartService: CartService) {  }

}
