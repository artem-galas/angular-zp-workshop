import { Injectable } from '@angular/core';
import {IResponse, UserModel} from '../../models';
import {Observable} from 'rxjs/index';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ProfileService {

  constructor(private http: HttpClient) { }

  public getProfile(): Observable<IResponse<UserModel>> {
    return this.http.get<IResponse<UserModel>>('/api/profile');
  }

  public updateProfileImage(file: File): Observable<IResponse<UserModel>> {
    const formDataFile: FormData = new FormData;
    formDataFile.append('avatar', file);
    return this.http.put<IResponse<UserModel>>('/api/profile/avatar', formDataFile);
  }
}
