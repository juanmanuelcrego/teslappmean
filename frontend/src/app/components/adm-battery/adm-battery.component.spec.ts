import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmBatteryComponent } from './adm-battery.component';

describe('AdmBatteryComponent', () => {
  let component: AdmBatteryComponent;
  let fixture: ComponentFixture<AdmBatteryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmBatteryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmBatteryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
