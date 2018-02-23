import { Component, OnInit ,Input , Output, EventEmitter} from '@angular/core';
import { FormBuilder, Validators , FormGroup} from '@angular/forms';

@Component({
  selector: 'app-angular-two-input-field',
  templateUrl: './angular-two-input-field.component.html',
  styleUrls: ['./angular-two-input-field.component.css']
})
export class AngularTwoInputFieldComponent implements OnInit {

  @Input() sharedVar: string;
  @Input() name: string;
  @Input() group: string;
  @Input() form: FormGroup;

  @Output() sharedVarChange = new EventEmitter();
  change(newValue) {
    console.log('newvalue', newValue);
    this.sharedVar = newValue;
    this.sharedVarChange.emit(newValue);
  }

  public loginForm = this.fb.group({
    email: ["", Validators.required],
    password: ["", Validators.required]
  });

  constructor(public fb: FormBuilder) {}
  doLogin(event) {
    console.log(event);
    console.log(this.loginForm.value);
  }
  ngOnInit() {
  }
}
