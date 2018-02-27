import { Component, OnInit , AfterViewChecked } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-experiment',
  templateUrl: './experiment.component.html',
  styleUrls: ['./experiment.component.css']
})
export class ExperimentComponent implements OnInit {

  constructor() { }

  refresh(){
    $("#os-phrases > h2").lettering('words').children("span").lettering().children("span").lettering();
  }

  ngOnInit() {
    $("#os-phrases > h2").lettering('words').children("span").lettering().children("span").lettering();
  }

  ngAfterViewChecked() {

  }
}
