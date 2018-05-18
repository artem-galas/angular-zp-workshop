import { Component, OnInit } from '@angular/core';
import {ProductModel} from '../../models';
import {Store} from '@ngrx/store';
import * as fromStore from '../../store'
import {Observable} from 'rxjs/index';
import {ProductService} from '../../services/product/product.service';
import {map} from 'rxjs/internal/operators';

@Component({
  selector: 'ngwzp-shop-window',
  templateUrl: './shop-window.component.html',
  styleUrls: ['./shop-window.component.scss']
})
export class ShopWindowComponent implements OnInit {
  public products$: Observable<ProductModel[]>;

  constructor(private productService: ProductService) {
    this.products$ = this.productService.getProducts().pipe(map(res => res.data));
  }

  ngOnInit() {
  }

}
