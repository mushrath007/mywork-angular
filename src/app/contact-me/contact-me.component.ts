import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MouseEvent } from '@agm/core';

declare var marker: any;
declare var $: any;
@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {

  // google maps zoom level
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



  /* Contact me Maps */

  contactForm: FormGroup;

  constructor(private fb:FormBuilder) {
    this.createForm();
  }

  createForm(){
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      contactEmail: ['', Validators.required],
      message: [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(500)])]
    });
  }

  ngOnInit() {

    $(".contact-me-title").blast({
      delimiter: "character",
      tag: "span"
    });

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

  }

}

interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}
