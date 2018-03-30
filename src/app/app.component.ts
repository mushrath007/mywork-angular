import { Component, Input } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private toastr: ToastrService, public http: Http){
    //this.loadComponent = false;
    //this.showForm = true;
  }

  showSuccess() {
    this.toastr.success('Feel free to look around', 'Hi Welcome', {
      timeOut: 5000,
    });
  }

  gaGetCountry() {

    this.http.post('https://www.googleapis.com/analytics/v3/data/ga?ids=ga%3A172611116&start-date=30daysAgo&end-date=2018-03-30&metrics=ga%3Ausers&access_token=ya29.GluOBdb6FgBlw7Q3zxXWjhVFL4tbtiq89CIRGjdyt7kSpQRVpE0X2vJulvmUMEwUzTQr36fZvgSL499fNMIMJBg2H4khWBwHuSp3UehV9mWOAu7HCEd9TeSAVUh2','','') // google script code follow https://github.com/dwyl/learn-to-send-email-via-google-script-html-no-server/blob/master/index.html for more details
      .subscribe(
        res => {
          //drawRegionsMap(res);
          console.log(res.json());
        }
      );
  }

//  drawRegionsMap(data) {
//
//    var head = data[0];
//    head[0] = 'Country';
//    head[1] = 'Users';
//    for (var i = 1; i < data.length; i++) {
//      var d = data[i];
//      d[1] = Number(d[1]);
//    }
//
//    var chartData = google.visualization.arrayToDataTable(data);
//    var options = {
//      title: 'My Website is viewed from,',
//      domain: '{{Country Code eg: IN for India}}',
//      tooltip: {
//        textStyle: {
//          color: 'navy'
//        },
//        showColorCode: true
//      },
//      legend: {
//        textStyle: {
//          color: 'navy',
//          fontSize: 12
//        }
//      },
//      colorAxis: {
//        colors: ['#00FFFF', '#0000FF']
//      }
//    };
//
//    var chart = new google.visualization.GeoChart(document.getElementById('countryChart'));
//
//    chart.draw(chartData, options);
//}

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
