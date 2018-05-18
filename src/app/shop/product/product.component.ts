import {Component, Input, OnInit} from '@angular/core';
import {ProductModel} from '../../models';
import {Store} from '@ngrx/store';

import * as BasketAction from '../../store/actions/basket.actions';
import {BasketService} from '../../services/basket/basket.service';

@Component({
  selector: 'ngwzp-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input('product')
  public product: ProductModel;

  constructor(private basketService: BasketService) { }

  ngOnInit() {
  }

  public buyItem() {
    this.basketService.addItemToBasket(this.product);
  }

}
