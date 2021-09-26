import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SymptompsComponent } from './symptomps.component';

describe('SymptompsComponent', () => {
  let component: SymptompsComponent;
  let fixture: ComponentFixture<SymptompsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SymptompsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SymptompsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
