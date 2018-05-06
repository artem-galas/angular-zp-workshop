import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShopWindowComponent} from './shop-window/shop-window.component';

const routes: Routes = [
  {
    path: '',
    component: ShopWindowComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
