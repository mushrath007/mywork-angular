import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-floating-switches',
  templateUrl: './floating-switches.component.html',
  styleUrls: ['./floating-switches.component.css']
})
export class FloatingSwitchesComponent implements OnInit {

  constructor() { }

  butterFlyOnOff() {
    $("#butterflycontainer").toggleClass("force_hide");
    $("#butterflyOnOff").toggleClass("butterflyOnOffClicked");
  }

  ngOnInit() {
  }

}
