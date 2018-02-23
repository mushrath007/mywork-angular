import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularTwoForms2Component } from './angular-two-forms-2.component';

describe('AngularTwoForms2Component', () => {
  let component: AngularTwoForms2Component;
  let fixture: ComponentFixture<AngularTwoForms2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularTwoForms2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularTwoForms2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
