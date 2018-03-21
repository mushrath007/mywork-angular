import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingSwitchesComponent } from './floating-switches.component';

describe('FloatingSwitchesComponent', () => {
  let component: FloatingSwitchesComponent;
  let fixture: ComponentFixture<FloatingSwitchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloatingSwitchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatingSwitchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
