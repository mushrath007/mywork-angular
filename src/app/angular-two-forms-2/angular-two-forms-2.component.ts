import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-angular-two-forms-2',
  templateUrl: './angular-two-forms-2.component.html',
  styleUrls: ['./angular-two-forms-2.component.css']
})
export class AngularTwoForms2Component implements OnInit {

  stateList: String[];
  showInfo: boolean = true;

  addressForm: FormGroup; // <--- basicForm is of type FormGroup

  constructor(private fb: FormBuilder) { // <--- inject FormBuilder
    this.createForm();
  }

  bye(){
    console.log('Bye');
    this.showInfo = true;
  }

  createForm() {
    this.addressForm = this.fb.group({
      address1: ['', Validators.required ],
      address2: ['', Validators.required ],
      city: ['' , Validators.required],
      zip: ['', Validators.required ],
      state: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.stateList = ['NJ','FL'];
  }

}
