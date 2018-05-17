import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product/product.service';
import {ProductModel} from '../../models';

@Component({
  selector: 'ngwzp-shop-window',
  templateUrl: './shop-window.component.html',
  styleUrls: ['./shop-window.component.scss']
})
export class ShopWindowComponent implements OnInit {

  public products: ProductModel[];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts()
      .subscribe((products) => {
        this.products = products.data
      })
  }

}
