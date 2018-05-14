import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import {IResponse, ProductModel} from '../../models';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }

  public getProducts(): Observable<IResponse<ProductModel>> {
    return this.http.get<IResponse<ProductModel>>('/api/products');
  }
}
