import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/index';
import {ProductModel} from '../../models';

@Injectable()
export class BasketService {

  public basketItems$: BehaviorSubject<ProductModel[]>;
  constructor() {
    this.basketItems$ = new BehaviorSubject<ProductModel[]>([]);
  }

  public addItemToBasket(item: ProductModel) {
    const currentValue = this.basketItems$.getValue();
    this.basketItems$.next([
      ...currentValue, item
    ]);
  }

  public getBasketItems(): ProductModel[] {
    return this.basketItems$.getValue();
  }

  public removeFromBasket(index: number) {
    const currentValue = this.basketItems$.getValue();
    this.basketItems$.next(
      currentValue.filter((item, _index) => _index !== index)
    );
  }
}
