import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Router, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {DrumsService } from '../drums.service';
declare var check;
@Component({
  selector: 'app-drums',
  templateUrl: './drums.component.html',
  styleUrls: ['./drums.component.css']
})
export class DrumsComponent implements OnInit {
  public pic;
  public keyboard;
  public finalscore;
  public count = 0;
  public myArray;
  public rand;
  public audio;
  public scorefinal;
  public timmer=0;
  // public score = 0;
  score: number = 0;
  public name;
  public a1 = false;
  public b1 = false;
  public c1 = false;
  public d1 = false;
  public e1 = false;
  public f1 = false;
  public g1 = false;
  public h1 = false;
  public i1 = false;
  constructor(private route: ActivatedRoute, private router: Router,public http:HttpClient,private Drums:DrumsService) {
    let id = parseInt(this.route.snapshot.paramMap.get('q1'));
    this.pic=id;
    let name = parseInt(this.route.snapshot.paramMap.get('value'));
    this.name=name;
 
  if (id == 1)
  {
    this.a1 = true;
  }
  if (id == 2)
  {
    this.b1 = true;
  }
  if (id == 3)
  {
    this.c1 = true;
  }
  if (id == 4)
  {
    this.d1 = true;
  }
  if (id == 5)
  {
    this.e1 = true;
  }
  if (id == 6)
  {
    this.f1 = true;
  }
  if (id == 7)
  {
    this.g1 = true;
  }
  if (id == 8) {
    this.h1 = true;
  }
}
  ngOnInit() {
  }
  public a = false;
  public b = false;
  public c = false;
  public d = false;
  public e = false;
  public f = false;
  public g = false;
  public i = false;
  public j = false;
  title = 'drums';
  on() {
  // this.a=true;
  let audio1 = new Audio();
  audio1.src = "../assets/183097__dwsd__bd-doitlive.wav";
  audio1.play();
  this.a = !this.a;

  if (audio1.src == this.audio.src) {
    this.score = this.score + 1;
  }
  }
  on1() {
    let audio2 = new Audio();
    audio2.src="../assets/34843__zin__low-floor-tom-punk.wav";
    audio2.play();
    this.b = !this.b;
        if (audio2.src == this.audio.src) {
    this.score = this.score + 1;
    }
  }
  on2(){
    let audio3 = new Audio();
    audio3.src="../assets/270156__theriavirra__04c-snare-smooth-cymbals-snares.wav";
    audio3.play();
    this.c = !this.c;
    
    if(audio3.src == this.audio.src)
  {
    this.score = this.score + 1;
  
  }
  }
  
  on3(){
    let audio4 = new Audio();
    audio4.src="../assets/171488__xicecoffeex__savannah-open-hh.wav";
    audio4.play();
    this.d = !this.d;
    if(audio4.src == this.audio.src)
    {
    this.score = this.score + 1;
   }
  }

  bass(){
    let audio5 = new Audio();
    audio5.src="  ../assets/87238__zgump__bass-rvb-4.wav";
    audio5.play();
    this.e = !this.e;
    if(audio5.src == this.audio.src)
    {
    this.score = this.score + 1;
    }
  }
  cello(){
    let audio6 = new Audio();
    audio6.src=" ../assets/337899__fschaeffer__34cello.wav";
    audio6.play();
    this.f = !this.f;
    if(audio6.src == this.audio.src)
  {
    this.score = this.score + 1;
  }
  }
  alph(){
    let audio7 = new Audio();
    audio7.src=" ../assets/175540__alphasnk__flo-x-regis-cb-e1.wav";
    audio7.play();
    this.g = !this.g;
    if(audio7.src == this.audio.src)
    {
    this.score = this.score + 1;
    }
  }
  h(){
    let audio8 = new Audio();
    audio8.src=" ../assets/62270__fresh-g__a3.wav";
    audio8.play();
    this.i= !this.i;
    if(audio8.src == this.audio.src)
  {
    this.score = this.score + 1;
  }
  }
  o(){
    let audio9 = new Audio();
    audio9.src="../assets/496042__phonosupf__sax-multiphonic-11.wav";
    audio9.play();
    this.j = !this.j;
    if(audio9.src == this.audio.src)
  {
    this.score = this.score + 1;
  }
  }
  music() {
    this.count = this.count + 1;
  this.myArray = ['../assets/183097__dwsd__bd-doitlive.wav', '../assets/270156__theriavirra__04c-snare-smooth-cymbals-snares.wav', '../assets/34843__zin__low-floor-tom-punk.wavch',
  '../assets/171488__xicecoffeex__savannah-open-hh.wav',' ../assets/87238__zgump__bass-rvb-4.wav',' ../assets/337899__fschaeffer__34cello.wav',' ../assets/175540__alphasnk__flo-x-regis-cb-e1.wav',' ../assets/62270__fresh-g__a3.wav','../assets/496042__phonosupf__sax-multiphonic-11.wav'];

  this.rand = this.myArray[Math.floor(Math.random() * this.myArray.length)];

  this.audio = new Audio();
  this.audio.src = this.rand;
  this.audio.play();
     if(this.count<=16) { 
       setTimeout(() => {
      this.music();

      this.timmer=this.timmer+1;
  }, 5000);
  this.finalscore=this.score;


  if(this.count==16)
  {
  
    this.Drums.transfer1({score:this.finalscore}).subscribe()
      this.router.navigate(['/drums',this.finalscore,this.pic,this.name]);
  }
}

  
  }
  to(){
    this.keyboard = true;
  }

  checkKeyPress(key){
    check();
  }

}
