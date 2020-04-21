import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmCorrComponent } from './adm-corr.component';

describe('AdmCorrComponent', () => {
  let component: AdmCorrComponent;
  let fixture: ComponentFixture<AdmCorrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmCorrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmCorrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
