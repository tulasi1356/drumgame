import { Component, OnInit } from '@angular/core';

import { ListService } from '../list.service';
@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css'],
  providers:[ListService]
})
export class LeaderboardComponent implements OnInit {
// details:Array<Info>;
// selected:Info;
public info=[];
  constructor(private _list: ListService) {
    console.log("yfguyf", _list)
   }

  ngOnInit() {
    this._list.getinformation().subscribe(result =>{ console.log("dewdfd",result); this.info.push(result)});
  }

}
