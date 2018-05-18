import * as fromProducts from '../actions/product.actions';
import {ProductModel} from '../../models';

export interface ProductState {
  data: ProductModel[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: ProductState = {
  data: [],
  loaded: false,
  loading: false,
};

export function reducer(state = initialState, action: fromProducts.ProductAction) {
  switch (action.type) {
    case fromProducts.GET_PRODUCTS:
      return {
        ...state,
        loading: true
      };
    case fromProducts.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        data: action['payload'],
        loading: false,
        loaded: true
      };
    case fromProducts.GET_PRODUCTS_ERROR:
      return {
        ...state,
        loading: false,
        loaded: false,
      };
  }
  return state;
}

export const getProductsLoading = (state: ProductState) => state.loading;
export const getProductsLoaded = (state: ProductState) => state.loaded;
export const getProducts = (state: ProductState) => state.data;
