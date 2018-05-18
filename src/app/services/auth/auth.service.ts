import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/index';
import {AuthRequestModel, AuthResponseModel, IResponse} from '../../models';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  public signInUser(authRequest: AuthRequestModel): Observable<IResponse<AuthResponseModel>> {
    return this.http.post<IResponse<AuthResponseModel>>('/api/auth/sign_in', authRequest)
  }
}
