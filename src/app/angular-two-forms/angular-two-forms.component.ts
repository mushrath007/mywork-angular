import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatepickerOptions } from 'ng2-datepicker';

@Component({
  selector: 'app-angular-two-forms',
  templateUrl: './angular-two-forms.component.html',
  styleUrls: ['./angular-two-forms.component.css']
})
export class AngularTwoFormsComponent implements OnInit {

  genderList: String[];
  showForm: boolean = true;
  loadComponent: boolean = false;

  basicForm: FormGroup; // <--- basicForm is of type FormGroup

  constructor(private fb: FormBuilder) { // <--- inject FormBuilder
    this.createForm();
  }

  loadMyChildComponent() {
    console.log('here 11');
    this.loadComponent = true;
  }

  bye(){
    console.log('Bye');
    this.showForm = false;
  }

  createForm() {
    this.basicForm = this.fb.group({
      firstName: ['', Validators.required ],
      LastName: ['', Validators.required ],
      phoneNumber: ['' ],
      email: ['', Validators.required ],
      gender: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.genderList = ['Male','Female'];
  }

}
