import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RouteSettingService {
  get httpUrlRoot(){
    return "http://101.200.58.3:9090/webapi/";
  }
  constructor() { }

}
