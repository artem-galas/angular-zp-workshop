import {Component, Input, OnInit} from '@angular/core';
import {ProductModel} from '../../models';
import {Store} from '@ngrx/store';

import * as BasketAction from '../../store/actions/basket.actions';

@Component({
  selector: 'ngwzp-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input('product')
  public product: ProductModel;

  constructor(private store: Store<ProductModel>) { }

  ngOnInit() {
  }

  public buyItem() {
    this.store.dispatch(new BasketAction.AddProduct(this.product));
  }

}
