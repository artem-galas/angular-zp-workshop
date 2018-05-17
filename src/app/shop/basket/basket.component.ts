import { Component, OnInit } from '@angular/core';
import {ProductModel} from '../../models';

@Component({
  selector: 'ngwzp-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  public products: ProductModel[];
  constructor() {
    this.products = [
      new ProductModel(1,
        'Hello',
        'Description',
        9.99,
        ''),
    ]
  }

  ngOnInit() {
  }

}
