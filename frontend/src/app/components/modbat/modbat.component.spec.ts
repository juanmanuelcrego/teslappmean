import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModbatComponent } from './modbat.component';

describe('ModbatComponent', () => {
  let component: ModbatComponent;
  let fixture: ComponentFixture<ModbatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModbatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModbatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
