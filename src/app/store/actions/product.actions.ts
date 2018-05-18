import {Action} from '@ngrx/store';

import {ErrorModel, ProductModel} from '../../models';

export const GET_PRODUCTS = '[Product] GET_PRODUCTS';
export const GET_PRODUCTS_SUCCESS = '[Product] GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_ERROR = '[Product] GET_PRODUCTS_ERROR';

export class GetProducts implements Action {
  readonly type = GET_PRODUCTS;
}

export class GetProductsSuccess implements Action {
  readonly type = GET_PRODUCTS_SUCCESS;
  constructor(public payload: ProductModel[]) {}
}

export class GetProductsError implements Action {
  readonly type = GET_PRODUCTS_ERROR;
  constructor(public payload: ErrorModel) {}
}

export type ProductAction =
  GetProducts |
  GetProductsSuccess |
  GetProductsError;
