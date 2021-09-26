import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningMSGComponent } from './warning-msg.component';

describe('WarningMSGComponent', () => {
  let component: WarningMSGComponent;
  let fixture: ComponentFixture<WarningMSGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarningMSGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarningMSGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
