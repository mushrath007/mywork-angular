import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MouseEvent } from '@agm/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

declare var marker: any;
declare var $: any;
@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {


  // Common shared constructor
  public constructor(private fb:FormBuilder,public http: Http) {
    this.createForm();
  }

  // Google Maps Code
  zoom: number = 8;

  // initial center position for the map
  lat: number = 39.918394299999996;
  lng: number = -74.95368619999999;

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }

  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }

  markers: marker[] = [
    {
      lat: 39.918394299999996,
      lng: -74.95368619999999,
      label: 'A',
      draggable: true
    }
  ];

  // Google Maps Code

  // Reactive Form Code logic
  contactForm: FormGroup;

  createForm(){
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      contactEmail: ['', Validators.required],
      message: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(500)])]
    });
  }

  // Reactive Form Code logic

  // Google scripts form submission with out live server code

  public showSpinner: boolean = false;
  public successFullySubmitted: boolean = false;

  onSubmit(formData){

    var data = {
      formDataNameOrder : '',
      formGoogleSheetName: '',
      formGoogleSendEmail: ''
    };

    let headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");

    let opts = new RequestOptions();
    opts.headers = headers;

    console.log(formData);

    data = formData.value;

    var fields = Object.keys(data).filter(function (k) {
      return k;
    });

    data.formDataNameOrder = JSON.stringify(fields);
    data.formGoogleSheetName = "responses"; // default sheet name
    data.formGoogleSendEmail = ""; // no email by default

    this.showLoadingSpinner();

    var encoded = Object.keys(data).map(function(k) {
      return encodeURIComponent(k) + "=" + encodeURIComponent(data[k])
    }).join('&');
    this.http.post('https://script.google.com/macros/s/AKfycbxLs6G8alZSBDxKSy93yRE5YDcS2Lxu6BpbEjz9B6DENo4VNQ/exec',encoded, opts) // google script code follow https://github.com/dwyl/learn-to-send-email-via-google-script-html-no-server/blob/master/index.html for more details
      .subscribe(
        res => {
          console.log(res.json());
          this.hideLoadingSpinner();
          this.successFullySubmittedFn();
        }
      );
  }

  showLoadingSpinner() {
    this.showSpinner = true;
  }

  hideLoadingSpinner() {
    this.showSpinner = false;
  }

  successFullySubmittedFn(){
    this.successFullySubmitted = true;
  }

  // Google scripts form submission with out live server code


  ngOnInit() {

    this.showSpinner = false;
    this.successFullySubmitted = false;

    // Ripple css effects on Contact Me

    $(".contact-me-title").blast({
      delimiter: "character",
      tag: "span"
    });


    let a = 0;

    $(".contact-me-title h1 .blast").each(function () {
      var el = $(this);
      setTimeout(function () {
        el.addClass('animated bounceIn');
      }, a);
      a = a + 100;
    });



    setTimeout(function(){

      $(".contact-me-title .blast").removeClass('animated bounceIn');
      $(".contact-me-title .blast").css('opacity',1);
      $(".contact-me-title .blast").mouseenter(function (){
        var el = $(this);
        $(this).addClass('animated rubberBand');
        $(this).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
          el.removeClass('animated rubberBand');
        });
      });
    },1000);

    // Ripple css effects on Contact Me

  }

}

// google maps declaration
interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}
// google maps declaration
