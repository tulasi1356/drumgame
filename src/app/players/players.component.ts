import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
public a = false;
public value;
public b = false;
public c = false;
public d = false;
public e = false;
public f = false;
public g = false;
public h = false;
public i = false;
  constructor(private router: Router,private route: ActivatedRoute) {
    let  f = parseInt(this.route.snapshot.paramMap.get('value'));
    this.value=f;
    console.log("f=",f)
    // this.value=f;
    // console.log("name:",this.value);
    
   }

  ngOnInit() {
  
  }
  player1(){
   this.a = true;
   this.i = true;
   this.b = false;
   this.c = false;
   this.d = false;
   this.e = false;
   this.f = false;
   this.g = false;
   this.h = false;
  }
  back(){
    this.i = !(this.i);
    
  }

  player2(){
    this.i = true;
    this.a = false;
    this.b = true;
    this.c = false;
    this.d = false;
    this.e = false;
    this.f = false;
    this.g = false;
    this.h = false;
  }
  player3(){
    this.a = false;
    this.i = true;
    this.b = false;
    this.c = true;
    this.d = false;
    this.e = false;
    this.f = false;
    this.g = false;
    this.h = false;
  }
  player4(){
    this.d = true;
    this.i = true;
    this.a = false;
    this.b = false;
    this.c = false;
    // this.d = false;
    this.e = false;
    this.f = false;
    this.g = false;
    this.h = false;
  }
  player5(){
    this.e = true;
    this.a = false;
    this.i = true;
    this.b = false;
    this.c = false;
    this.d = false;
    // this.e = false;
    this.f = false;
    this.g = false;
    this.h = false;
  }
  player6(){
    this.f = true;
    this.i = true;
    this.a = false;
    this.b = false;
    this.c = false;
    this.d = false;
    this.e = false;
    // this.f = false;
    this.g = false;
    this.h = false;
  }
  player7(){
    this.g = true;
    this.i = true;
    this.a = false;
    this.b = false;
    this.c = false;
    this.d = false;
    this.e = false;
    this.f = false;
    // this.g = false;
    this.h = false;
  }
  player8(){
    this.h = true;
    this.i = true;
    this.a = false;
    this.b = false;
    this.c = false;
    this.d = false;
    this.e = false;
    this.f = false;
    this.g = false;
    // this.h = false;
  }
  start(q1){
    console.log(q1);
    this.router.navigate(['/players', q1,this.value]);
  }
}
