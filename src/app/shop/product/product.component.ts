import {Component, Input, OnInit} from '@angular/core';
import {ProductModel} from '../../models';

@Component({
  selector: 'ngwzp-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input('product')
  public product: ProductModel;

  constructor() { }

  ngOnInit() {
  }

}
