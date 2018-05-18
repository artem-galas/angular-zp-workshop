import { Component, OnInit } from '@angular/core';
import {ProductModel} from '../../models';
import {Store} from '@ngrx/store';

import * as fromStore from '../../store';

import * as BasketAction from '../../store/actions/basket.actions';
import {Observable} from 'rxjs/index';

@Component({
  selector: 'ngwzp-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  public products$: Observable<ProductModel[]>;

  constructor(private store: Store<fromStore.ItemState>) {}

  ngOnInit() {
    this.products$ = this.store.select(fromStore.getBasketProducts);
    this.store.dispatch(new fromStore.GetBasketProducts());
  }

  removeProduct(index: number): void {
    this.store.dispatch(new BasketAction.RemoveProduct(index));
  }

}
