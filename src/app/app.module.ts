import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartService } from 'src/core/services/cart.service';
import { CartComponent } from './cart/cart.component';
import { CategoriesModule } from './categories/categories.module';

@NgModule({
  declarations: [AppComponent, CartComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CategoriesModule
  ],
  providers: [CartService],
  bootstrap: [AppComponent],
})
export class AppModule { }
