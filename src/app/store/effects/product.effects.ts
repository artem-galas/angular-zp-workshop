import { Injectable } from '@angular/core';

import {Effect, Actions, ofType} from '@ngrx/effects';
import {map, switchMap, catchError} from 'rxjs/operators';
import {of} from 'rxjs';

import { ProductService } from '../../services/product/product.service';
import * as productActions from '../actions/product.actions';

@Injectable()
export class ProductEffects {
  constructor(private actions$: Actions,
              private productService: ProductService) {}

  @Effect()
  getProducts$ = this.actions$
    .pipe(
      ofType(productActions.GET_PRODUCTS),
      switchMap(() => {
        return this.productService.getProducts()
          .pipe(
            map((products) => new productActions.GetProductsSuccess(products.data)),
            catchError(error => of(new productActions.GetProductsError(error)))
          );
      })
    );
}
