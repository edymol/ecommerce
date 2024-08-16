import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Product} from "../common/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

    private baseUrl = 'http://localhost:8080/api/products?size=100';

  constructor(private HttpClient: HttpClient) { }

    getProductList(): Observable<Product[]> {
      return this.HttpClient.get<GetResponse>(this.baseUrl).pipe(
          map(response => response._embedded.products)
      );
    }
}

interface GetResponse {
    _embedded: {
        products: Product[];
    }
}
