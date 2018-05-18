import { Component, OnInit } from '@angular/core';
import {ProductModel} from '../../models';
import {Store} from '@ngrx/store';

import * as fromStore from '../../store';

import * as BasketAction from '../../store/actions/basket.actions';
import {Observable} from 'rxjs/index';
import {BasketService} from '../../services/basket/basket.service';

@Component({
  selector: 'ngwzp-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  public products$: Observable<ProductModel[]>;

  constructor(private basketService: BasketService) {}

  ngOnInit() {
    this.products$ = this.basketService.basketItems$;
  }

  removeProduct(index: number): void {
    this.basketService.removeFromBasket(index)
  }

}
