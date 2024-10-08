import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { Product } from "../common/product";
import {ProductCategory} from "../common/product-category";

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    private baseUrl = 'http://localhost:8080/api/products';

    private categoryUrl = 'http://localhost:8080/api/product-category';

    constructor(private httpClient: HttpClient) { }

    getProductList(theCategoryId: number): Observable<Product[]> {
        // build a URL based on category id
        const searchURL = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}&page=0&size=10`;
        return this.httpClient.get<GetResponseProducts>(searchURL).pipe(
            map(response => response._embedded.products)
        );
    }

    getProductCategories(): Observable<ProductCategory[]>{
        return this.httpClient.get<GetResponseProductCategory>(this.categoryUrl).pipe(
            map(response => response._embedded.productCategory)
        );
    }
}

interface GetResponseProducts {
    _embedded: {
        products: Product[];
    }
}

interface GetResponseProductCategory {
    _embedded: {
        productCategory: ProductCategory[];
    }
}
