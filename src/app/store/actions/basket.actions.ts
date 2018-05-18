import {Action} from '@ngrx/store';

import {ProductModel} from '../../models';

export const GET_BASKET_PRODUCT = '[Basket] GET_BASKET_PRODUCT';
export const ADD_PRODUCT = '[Basket] ADD_PRODUCT';
export const REMOVE_PRODUCT = '[Basket] REMOVE_PRODUCT';

export class GetBasketProducts implements Action {
  readonly type = GET_BASKET_PRODUCT;
}

export class AddProduct implements Action {
  readonly type = ADD_PRODUCT;
  constructor(public payload: ProductModel) {}
}

export class RemoveProduct implements Action {
  readonly type = REMOVE_PRODUCT;
  constructor(public payload: number) {}
}

export type BasketActions =
  GetBasketProducts |
  AddProduct |
  RemoveProduct;
