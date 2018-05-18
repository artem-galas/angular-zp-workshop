import { Component, OnInit } from '@angular/core';
import {ProductModel} from '../../models';
import {Store} from '@ngrx/store';
import * as fromStore from '../../store'
import {Observable} from 'rxjs/index';

@Component({
  selector: 'ngwzp-shop-window',
  templateUrl: './shop-window.component.html',
  styleUrls: ['./shop-window.component.scss']
})
export class ShopWindowComponent implements OnInit {
  public products$: Observable<ProductModel[]>;

  constructor(private store: Store<fromStore.ItemState>) {
    this.products$ = this.store.select(fromStore.getAllProducts);
    this.store.dispatch(new fromStore.GetProducts());
  }

  ngOnInit() {
  }

}
