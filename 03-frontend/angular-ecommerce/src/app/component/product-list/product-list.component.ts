import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Product} from "../../common/product";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list-grid.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

    products: Product[] = [];
    currentCategoryId: number = 1;
    constructor(private productService: ProductService,
                private router: ActivatedRoute,) {
    }

    ngOnInit(): void {
        this.router.paramMap.subscribe(() => {
            this.listProducts();
        });
    }
// check for id parameter availability

    private listProducts() {
        const hasCategoryId: boolean = this.router.snapshot.paramMap.has('id');
        if (hasCategoryId) {
            // Read the category id and convert to a number using (+) on front of this
            this.currentCategoryId = +this.router.snapshot.paramMap.get('id')!; // Use '!' to assert that the value is non-null
        } else {
            this.currentCategoryId = 1;  // Default category ID
        }
        this.productService.getProductList(this.currentCategoryId).subscribe(
            data => {
                this.products = data;
            },
        )
    }
}
