import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs/index';
import {map} from 'rxjs/internal/operators';

import {AuthRequestModel, AuthResponseModel, IResponse} from '../../models';
import {TokenService} from '../token/token.service';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient,
              private tokenService: TokenService) { }

  public signInUser(authRequest: AuthRequestModel): Observable<IResponse<AuthResponseModel>> {
    return this.http
      .post<IResponse<AuthResponseModel>>('/api/auth/sign_in', authRequest)
      .pipe(
        map(res => {
          TokenService.setAuthToken(res.data.auth_token);
          this.tokenService.setUser();
          return res;
        })
      );
  }
}
