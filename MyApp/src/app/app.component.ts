import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyApp';
  myname="Aashish"
  name ="Bruce"
  getData(name){
    alert(name)
  }
  currentval=""
  getVal(val){
console.warn(val);
this.currentval=val;
  }
  disableBox=true;
  enablebox(){
this.disableBox=false;
  }
  a : boolean;
  constructor(route:Router){
    route.events.forEach((event)=>{
      if(event instanceof NavigationStart){
        this.a=event.url!=="/Hello";
      }
    })
  }
}
