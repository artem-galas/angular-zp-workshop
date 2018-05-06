import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product/product.service';

@Component({
  selector: 'ngwzp-shop-window',
  templateUrl: './shop-window.component.html',
  styleUrls: ['./shop-window.component.scss']
})
export class ShopWindowComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts()
      .subscribe((product) => {
        console.log(product);
      })
  }

}
