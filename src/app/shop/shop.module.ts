import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopWindowComponent } from './shop-window/shop-window.component';
import { ProductComponent } from './product/product.component';
import {MaterialModule} from '../material/material.module';
import {ProductService} from '../services/product/product.service';
import { BasketComponent } from './basket/basket.component';

@NgModule({
  imports: [
    CommonModule,
    ShopRoutingModule,
    MaterialModule,
  ],
  declarations: [ShopWindowComponent, ProductComponent, BasketComponent],
  providers: [
    ProductService
  ]
})
export class ShopModule { }
