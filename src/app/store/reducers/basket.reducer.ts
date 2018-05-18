import * as fromBasket from '../actions/basket.actions';

import {ProductModel} from '../../models';

export interface BasketState {
  data: ProductModel[];
}

export const initialState: BasketState = {
  data: []
};

export function basketReducer(state = initialState, action: fromBasket.BasketActions) {
  switch (action.type) {
    case fromBasket.GET_BASKET_PRODUCT:
      return {
        ...state,
      };
    case fromBasket.ADD_PRODUCT:
      return {
        ...state,
        data: [...state.data, action['payload']]
      };
    case fromBasket.REMOVE_PRODUCT:
      state.data.splice(action['payload'], 1);
      return {
        ...state,
      };
  }
  return state;
}

export const getBasketProducts = (state: BasketState) => state.data;
