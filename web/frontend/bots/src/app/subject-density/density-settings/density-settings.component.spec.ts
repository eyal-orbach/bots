import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DensitySettingsComponent } from './density-settings.component';

describe('DensitySettingsComponent', () => {
  let component: DensitySettingsComponent;
  let fixture: ComponentFixture<DensitySettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DensitySettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DensitySettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
