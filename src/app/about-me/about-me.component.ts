import { Component, OnInit } from '@angular/core';
import * as Typed from 'typed.js';

declare var $:any;

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  constructor() {

  }

  noMobile:boolean = true;

  ngOnInit() {

    $(".about-me-desc .about-me-desc-content").blast({
      delimiter: "character",
      tag: "span"
    });

    let a = 0;


    $(".about h1 .blast").each(function () {

      var el = $(this);

      setTimeout(function () {

        el.addClass('animated bounceIn');


      }, a);


      a = a + 100;

    });

    setTimeout(function(){

      $(".about-me-desc .blast").removeClass('animated bounceIn');
      $(".about-me-desc .blast").css('opacity',1);

      $(".about-me-desc .blast").mouseenter(function (){

        var el = $(this);

        $(this).addClass('animated rubberBand');
        $(this).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){

          el.removeClass('animated rubberBand');

        });

      });


    },1000);


    this.loadInfo();
    if (window.screen.width <= 426) { // 768px portrait
      this.noMobile = false;
    }
  }

  loadInfo() {
    let profileInfo = ["Mushrath Mohammad.", "Senior UI Developer at TD.", "I'm a passionate Front-End Developer creating modern and responsive design for Web and Mobile."];

    profileInfo.forEach(function (value, i) {
      let options = {
        strings: [profileInfo[i]],
        typeSpeed: 0,
        showCursor: false,
        smartBackspace: true
      };

      new Typed(".about-me-content" + (i + 1), options);

    });

    let profileInfoList = ['<i class="/ fa fa-circle /" aria-hidden=true></i><span> 7+ years of IT experience in analysis, design, development,testing, Implementation and Software Migration techniques of web application.</span>',
      '<i class="/ fa fa-circle /" aria-hidden=true></i><span> Experienced in web-based GUIs development using HTML5, CSS3,Twitter Bootstrap, SASS/SCSS, AngularJS, Angular2, Angular Material, Java Script, JQuery, Node JS and JSON object.</span>',
      '<i class="/ fa fa-circle /" aria-hidden=true></i><span> Have good knowledge on the framework and Web Based Applicationfor Desktop, Tablet and Mobile.</span>',
      '<i class="/ fa fa-circle /" aria-hidden=true></i><span> Extensive knowledge of current web standards, HTML5 and CSS3,Jquery along with developing front end with Cross browser compatibility.</span>'];

    profileInfoList.forEach(function (value, i) {
      let options = {
        strings: [profileInfoList[i]],
        typeSpeed: 0,
        showCursor: false,
        smartBackspace: true
      };

      new Typed(".list-group-item" + (i + 1), options);

    });
  }

}
