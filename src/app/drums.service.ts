import { Injectable } from '@angular/core';
// import {Main} from './main';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DrumsService {
private url = '/score';
  constructor(private http:HttpClient) { }
  transfer1(score){
    console.log("score",score)
    return this.http.post<any>(this.url,score);
  }

}
