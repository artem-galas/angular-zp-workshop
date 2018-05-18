import {ActionReducerMap, createSelector, createFeatureSelector} from '@ngrx/store';

import * as fromProduct from './product.reducer';
import * as fromBasket from './basket.reducer';

export interface ItemState {
  products: fromProduct.ProductState;
  basketProducts: fromBasket.BasketState;
}

export const reducers: ActionReducerMap<ItemState> = {
  products: fromProduct.reducer,
  basketProducts: fromBasket.basketReducer
};

export const getItemsState = createFeatureSelector<ItemState>('items');
export const getProductState = createSelector(
  getItemsState,
  (state: ItemState) => state.products
);

export const getBasketState = createSelector(
  getItemsState,
  (state: ItemState) => state.basketProducts
);

export const getAllProducts = createSelector(getProductState, fromProduct.getProducts);
export const getProductsLoaded = createSelector(getProductState, fromProduct.getProductsLoaded);
export const getLoading = createSelector(getProductState, fromProduct.getProductsLoading);

export const getBasketProducts = createSelector(getBasketState, fromBasket.getBasketProducts);
