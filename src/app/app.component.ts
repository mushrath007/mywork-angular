import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //constructor(){
  //  this.loadComponent = false;
  //  this.showForm = true;
  //}

  //loadMyChildComponent() {
  //  console.log('here');
  //  this.loadComponent = true;
  //}
  //
  //butterFlyOnOff() {
  //$("#butterflycontainer").toggleClass("force_hide");
  //$("#butterflyOnOff").toggleClass("butterflyOnOffClicked");
  //}

  noMobile:boolean = true;
  ngAfterViewInit(){

  }
  ngOnInit(){
    if (window.screen.width <= 425) {
      this.noMobile = false;
    }
  }
}
