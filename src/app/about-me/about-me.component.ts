import { Component, OnInit } from '@angular/core';
import * as Typed from 'typed.js';

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


    let profileInfo = ["Mushrath Mohammad.", "Senior UI Developer at TD.", "I'm a passionate Front-End Developer creating modern and responsive design for Web and Mobile."];

    profileInfo.forEach(function (value, i) {
      let options = {
        strings: [profileInfo[i]],
        typeSpeed: 30,
        showCursor: false,
        smartBackspace: true
      };

      new Typed(".about-me-content"+(i+1), options);

    });

    let profileInfoList = ['<i class="/ fa fa-circle /" aria-hidden=true></i><span> 7+ years of IT experience in analysis, design, development,testing, Implementation and Software Migration techniques of web application.</span>',
      '<i class="/ fa fa-circle /" aria-hidden=true></i><span> Experienced in web-based GUIs development using HTML5, CSS3,Twitter Bootstrap, SASS/SCSS, AngularJS, Angular2, Angular Material, Java Script, JQuery, Node JS and JSON object.</span>',
      '<i class="/ fa fa-circle /" aria-hidden=true></i><span> Have good knowledge on the framework and Web Based Applicationfor Desktop, Tablet and Mobile.</span>',
      '<i class="/ fa fa-circle /" aria-hidden=true></i><span> Extensive knowledge of current web standards, HTML5 and CSS3,Jquery along with developing front end with Cross browser compatibility.</span>'];

    profileInfoList.forEach(function (value, i) {
      let options = {
        strings: [profileInfoList[i]],
        typeSpeed: 10,
        showCursor: false,
        smartBackspace: true
      };

      new Typed(".list-group-item"+(i+1), options);

    });

  }

}
