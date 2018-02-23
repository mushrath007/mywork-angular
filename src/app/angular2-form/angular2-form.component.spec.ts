import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Angular2FormComponent } from './angular2-form.component';

describe('Angular2FormComponent', () => {
  let component: Angular2FormComponent;
  let fixture: ComponentFixture<Angular2FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Angular2FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Angular2FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
