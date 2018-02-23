import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularTwoFormsComponent } from './angular-two-forms.component';

describe('AngularTwoFormsComponent', () => {
  let component: AngularTwoFormsComponent;
  let fixture: ComponentFixture<AngularTwoFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularTwoFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularTwoFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
