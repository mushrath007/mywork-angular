import { Component, Input } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private toastr: ToastrService){
    //this.loadComponent = false;
    //this.showForm = true;
  }

  showSuccess() {
    this.toastr.success('Feel free to look around', 'Hi Welcome', {
      timeOut: 5000,
    });
  }

  showInfo() {
    this.toastr.info('It means you can see this application in offline mode :', 'This application supports Service Workers)', {
      timeOut: 8000,
    });
  }

  noMobile:boolean = true;
  ngAfterViewInit(){
    setTimeout(() => this.showSuccess(), 15000);
    setTimeout(() => this.showInfo(), 24000);
  }
  ngOnInit(){
    if (window.screen.width <= 425) {
      this.noMobile = false;
    }


  }
}
