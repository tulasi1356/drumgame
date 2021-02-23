import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
// import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class ListService {

  private  _getUrl ='/score';
  constructor(private _http:HttpClient) {  }
  getinformation() {

    return this._http.get<any>(this._getUrl)
    // .map((response:Response)=>response.json());
    // this.http.get(url)
    // .subscribe((data: GithubUser) => {
      // Data extraction from the HTTP response is already done
      // Display the result
      // console.log('TJ user data', data);
    // });

  
  }
}
