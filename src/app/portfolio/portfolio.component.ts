import { Component, OnInit , NgModule} from '@angular/core';
import { PortfolioWebSitesMetadata } from '../model/portfolio-metadate.model';

import {NgxChartsModule} from '@swimlane/ngx-charts';
import {single} from '../model/portfolio-metadate.model';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  portfolioWebSitesMetadata: any;

  view: any[] = [];
  data: any[];


  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C']
  };

  onSelect(event) {
    console.log(event);
  }

  items: Array<any> = [];

  constructor() {
    this.data = single;
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
    this.portfolioWebSitesMetadata = PortfolioWebSitesMetadata;
  }

}
