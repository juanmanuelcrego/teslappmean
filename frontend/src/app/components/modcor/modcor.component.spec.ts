import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModcorComponent } from './modcor.component';

describe('ModcorComponent', () => {
  let component: ModcorComponent;
  let fixture: ComponentFixture<ModcorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModcorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModcorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
