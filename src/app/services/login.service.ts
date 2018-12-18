import { Injectable } from '@angular/core';
import { RouteSettingService } from './route-setting.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public setting: RouteSettingService, public http: HttpClient) { }

  getUserData(txtPhone:any,txtPassword:any):Observable<any>{
    return this.http.get(this.setting.httpUrlRoot + 'member?method=login&phone=' + txtPhone + '&password=' + txtPassword);
  }
}
 