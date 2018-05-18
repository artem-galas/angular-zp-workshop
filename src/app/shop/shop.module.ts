import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopWindowComponent } from './shop-window/shop-window.component';
import { ProductComponent } from './product/product.component';
import {MaterialModule} from '../material/material.module';
import {ProductService} from '../services/product/product.service';
import { BasketComponent } from './basket/basket.component';

import {effects, reducers} from '../store';
import {BasketService} from '../services/basket/basket.service';

@NgModule({
  imports: [
    CommonModule,
    ShopRoutingModule,
    MaterialModule,
    StoreModule.forFeature('items', reducers),
    EffectsModule.forFeature(effects),
  ],
  declarations: [ShopWindowComponent, ProductComponent, BasketComponent],
  providers: [
    ProductService,
    BasketService
  ]
})
export class ShopModule { }
