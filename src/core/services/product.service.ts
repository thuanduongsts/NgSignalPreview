import { Injectable } from '@angular/core';
import { Observable, map, take } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';

@Injectable()
export class ProductService {

  private readonly _baseUrl = 'https://dummyjson.com';

  public constructor(private http: HttpClient) { }

  public getProducts(): Observable<Product[]> {
    return this.http.get<any>(this._baseUrl + '/products?limit=5')
      .pipe(map(data => data?.products));
  }

  public gerProduct(id: number): Observable<Product> {
    return this.http.get<any>(this._baseUrl + '/products/' + id);
  }
}
