import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopWindowComponent } from './shop-window/shop-window.component';
import { ProductComponent } from './product/product.component';
import {MaterialModule} from '../material/material.module';

@NgModule({
  imports: [
    CommonModule,
    ShopRoutingModule,
    MaterialModule,
  ],
  declarations: [ShopWindowComponent, ProductComponent]
})
export class ShopModule { }
