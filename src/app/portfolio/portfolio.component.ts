import { Component, OnInit } from '@angular/core';
import { PortfolioWebSitesMetadata } from '../model/portfolio-metadate.model';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  portfolioWebSitesMetadata: any;

  constructor() { }

  ngOnInit() {
    this.portfolioWebSitesMetadata = PortfolioWebSitesMetadata;
  }

}
