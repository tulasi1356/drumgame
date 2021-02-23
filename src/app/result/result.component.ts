import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Router, ParamMap } from '@angular/router';
import{ ResultService} from'../result.service';
// import {  ActivatedRoute, Router, ParamMap } from '@angular/router';
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  public score;
  public a = false;
  public b = false;
  public c = false;
  public d = false;
  public e = false;
  public f = false;
  public g = false;
  public i = false;
  public j = false;
  public a1 = false;
  public b1 = false;
  public c1 = false;
  public d1 = false;
  public e1 = false;
  public f1 = false;
  public g1 = false;
  public h1 = false;
  public i1 = false;
  constructor(private route: ActivatedRoute,private router:Router) { 
    let  name1 = parseInt(this.route.snapshot.paramMap.get('name'));
    let  f = parseInt(this.route.snapshot.paramMap.get('finalscore'));
    this.score=f;
    let  m = parseInt(this.route.snapshot.paramMap.get('id'));
    console.log("f,m,name",f,m,name1);
    if(m == 1){
      this.a = true;
      if(f>7)
      {
        this.a1 = true;
      }
    }
    if(m == 2){
      this.b = true;
      if(f>7)
      {
        this.b1 = true;
      }
    }
    if(m == 3){
      this.c = true;
      if(f>7)
      {
        this.c1 = true;
      }
    }
    if(m == 4){
      this.d = true;
      if(f>7)
      {
        this.d1 = true;
      }
    }
    if(m == 5){
      this.e = true;
      if(f>7)
      {
        this.e1 = true;
      }
    }
    if(m == 6){
      this.f = true;
      if(f>7)
      {
        this.f1 = true;
      }
    }
    if(m == 7)
    {
      this.g=true;
      if(f>7)
      {
        this.g1 = true;
      }
    }
    if(m == 8){
      this.i= true;
      if(f>7)
      {
        this.h1 = true;
      }
    }
    
  }

  ngOnInit() {
  }
leader(){
  this.router.navigate(['/leader'])
}
}
