import { Component, Input } from '@angular/core';

//declare var classie: any;

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

  title = 'Mushrath Mohammad Angular Demo';
  noMobile:boolean = true;
  ngAfterViewInit(){

  }
  ngOnInit(){
    if (window.screen.width <= 425) {
      this.noMobile = false;
    }
  }
}
