import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  items: Array<any> = [];

  constructor() {
    this.items = [
      { name: 'devicon-angularjs-plain colored' },
      { name: 'devicon-bower-line-wordmark' },
      { name: 'devicon-confluence-plain-wordmark colored' },
      { name: 'devicon-css3-plain-wordmark colored' },
      { name: 'devicon-foundation-plain colored' },
      { name: 'devicon-grunt-line-wordmark' },
      { name: 'devicon-html5-plain-wordmark' }    ]
  }

  ngOnInit() {
  }

}
