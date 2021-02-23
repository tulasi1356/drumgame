import { Injectable } from '@angular/core';
import {Main} from './main';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MainService {
private url = 'main';
  constructor(private http:HttpClient) { }
  transfer(name:Main){
    return this.http.post<any>(this.url, name);
  }
}
