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
      { name: 'devicon-bitbucket-plain-wordmark colored' },
      { name: 'devicon-chrome-plain-wordmark colored' },
      { name: 'devicon-git-plain-wordmark' },
      { name: 'devicon-github-plain-wordmark colored' },
      { name: 'devicon-gulp-plain' },
      { name: 'devicon-javascript-plain' },
      { name: 'devicon-webstorm-plain colored' },
      { name: 'devicon-jquery-plain-wordmark colored' },
      { name: 'devicon-less-plain-wordmark colored' },
      { name: 'devicon-nodejs-plain-wordmark' },
      { name: 'devicon-photoshop-line' },
      { name: 'devicon-php-plain colored' },
      { name: 'devicon-sass-original colored' },
      { name: 'devicon-sourcetree-plain-wordmark colored' },
      { name: 'devicon-travis-plain-wordmark' },
      { name: 'devicon-trello-plain-wordmark colored' },
      { name: 'devicon-typescript-plain colored' },
      { name: 'devicon-visualstudio-plain colored' },
      { name: 'devicon-wordpress-plain-wordmark colored' }]
  }

  ngOnInit() {
  }

}
