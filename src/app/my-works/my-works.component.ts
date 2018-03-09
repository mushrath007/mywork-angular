import { Component, OnInit } from '@angular/core';
import { PortfolioWebSitesMetadata } from '../model/portfolio-metadate.model';

@Component({
  selector: 'app-my-works',
  templateUrl: './my-works.component.html',
  styleUrls: ['./my-works.component.css']
})
export class MyWorksComponent implements OnInit {
  portfolioWebSitesMetadata: any;

  constructor() { }

  ngOnInit() {
    this.portfolioWebSitesMetadata = PortfolioWebSitesMetadata;
  }

}
