import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { Product } from "../common/product";

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    private baseUrl = 'http://localhost:8080/api/products';

    constructor(private httpClient: HttpClient) { }

    getProductList(theCategoryId: number): Observable<Product[]> {
        // build a URL based on category id
        const searchURL = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}&page=0&size=10`;
        return this.httpClient.get<GetResponse>(searchURL).pipe(
            map(response => response._embedded.products)
        );
    }
}

interface GetResponse {
    _embedded: {
        products: Product[];
    }
}
