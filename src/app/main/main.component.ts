import { Component, OnInit,Renderer2 } from '@angular/core';
import {Router} from '@angular/router';
import {Main} from '../main';
import { HttpClient } from '@angular/common/http';
import {MainService} from '../main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
public a = true;
public value;
public name;
public main=new Main('');
  constructor(private router: Router,  private renderer: Renderer2,public ser:MainService,public http:HttpClient) { }

  ngOnInit() {
    this.renderer.setStyle(document.body, 'background-color', '#e1e8e3');
  }
  click(e)
  {
    this.a = false;
    this.name = e;
   console.log(e);
   this.value=e;
 
  }
  player() {
    this.router.navigate(['/main',this.value]);
    console.log(this.value);
    
    }
onsubmit(a){
  this.click(a)
  console.log("ts",JSON.stringify(this.main))
  this.ser.transfer(this.main).subscribe(
  )
}

}
