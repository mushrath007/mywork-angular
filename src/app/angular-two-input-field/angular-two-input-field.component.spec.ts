import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularTwoInputFieldComponent } from './angular-two-input-field.component';

describe('AngularTwoInputFieldComponent', () => {
  let component: AngularTwoInputFieldComponent;
  let fixture: ComponentFixture<AngularTwoInputFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularTwoInputFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularTwoInputFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
